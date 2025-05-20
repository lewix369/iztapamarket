require('dotenv').config();
const fs = require('fs');
const csv = require('csv-parser');
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const businesses = [];

fs.createReadStream('negocios.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log('🔍 Fila leída:', row);
    businesses.push(row);
  })
  .on('end', async () => {
    console.log(`📦 Cargando ${businesses.length} negocios...\n`);

    for (const negocio of businesses) {
      const prompt = `Genera una descripción llamativa para un negocio de ${negocio.categoria} llamado "${negocio.nombre}". Está ubicado en ${negocio.direccion}.`;

      try {
        const completion = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        });

        const descripcionGenerada = completion.choices[0].message.content;

        console.log(`🟢 ${negocio.nombre}:`);
        console.log(descripcionGenerada);
        console.log('---------------------------\n');

      } catch (error) {
        console.error(`❌ Error con ${negocio.nombre}:`, error.message);
      }
    }
  });