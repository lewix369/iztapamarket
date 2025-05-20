
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((reg) => console.log('✅ Service worker registrado:', reg))
      .catch((err) => console.error('❌ Error al registrar el SW:', err));

    // Detección de instalación PWA
    window.addEventListener('appinstalled', () => {
      console.log('✅ App instalada como PWA');
      window.gtag?.('event', 'pwa_installed', {
        event_category: 'PWA',
        event_label: 'instalada'
      });
    });

    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      console.log('👍 Evento beforeinstallprompt capturado');
      // Opción: mostrar botón de instalación si quieres
      // document.querySelector('#installBtn').style.display = 'block';
    });

    // Puedes acceder a deferredPrompt desde un componente React si lo exportas
    window.promptInstallPWA = () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('✅ Usuario aceptó instalar la app');
            window.gtag?.('event', 'pwa_install_accepted');
          } else {
            console.log('❌ Usuario rechazó instalar la app');
          }
          deferredPrompt = null;
        });
      }
    };
  });
}
