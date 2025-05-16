
import React from 'react';
import { Separator } from '@/components/ui/separator.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Youtube } from 'lucide-react';

const BusinessVideoSection = ({ videoEmbedUrl, businessName }) => {
  if (!videoEmbedUrl) {
    return null;
  }

  const isValidYoutubeLink = (url) => {
    try {
      const parsedUrl = new URL(url);
      return (parsedUrl.hostname === 'www.youtube.com' && parsedUrl.pathname === '/watch' && parsedUrl.searchParams.has('v')) || 
             (parsedUrl.hostname === 'youtu.be' && parsedUrl.pathname !== '');
    } catch (e) {
      return false;
    }
  };

  if (!isValidYoutubeLink(videoEmbedUrl)) {
    console.warn("Invalid YouTube video link provided:", videoEmbedUrl);
    return (
        <>
            <Separator />
            <h3 className="text-xl font-semibold text-secondary flex items-center">
                <Youtube className="h-6 w-6 mr-2 text-red-600" /> Video
            </h3>
            <p className="text-red-500 mt-2">El enlace del video no es válido. Por favor, use un enlace directo de YouTube (ej: https://www.youtube.com/watch?v=...).</p>
        </>
    );
  }

  return (
    <>
      <Separator />
      <h3 className="text-xl font-semibold text-secondary flex items-center">
        <Youtube className="h-6 w-6 mr-2 text-red-500" /> Video
      </h3>
      <div className="mt-4">
        <Button asChild size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
          <a href={videoEmbedUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver video de ${businessName} en YouTube`}>
            <Youtube className="mr-2 h-5 w-5" /> Ver Video en YouTube
          </a>
        </Button>
      </div>
    </>
  );
};

export default BusinessVideoSection;
