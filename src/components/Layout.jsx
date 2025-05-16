
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CreativeServicesBanner from '@/components/CreativeServicesBanner';


const Layout = ({ children }) => {
  const officialWhatsAppNumber = "525647547221"; // Asegúrate que este es el número correcto
  const generalInquiryMessage = "Hola, me gustaría obtener más información sobre IztapaMarket.";

	return (
		<div className="flex flex-col min-h-screen bg-background">
			<Header />
			<main className="flex-grow container mx-auto px-4 py-8">
				{children}
			</main>
			<CreativeServicesBanner />
			<Footer />
			<WhatsAppButton phoneNumber={officialWhatsAppNumber} message={generalInquiryMessage} />
			
		</div>
	);
};

export default Layout;
  