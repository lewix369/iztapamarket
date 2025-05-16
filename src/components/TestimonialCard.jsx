
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, UserCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  const { quote, author, businessType } = testimonial;

  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.08)" }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="h-full bg-white shadow-lg rounded-xl p-6 flex flex-col border-2 border-transparent hover:border-primary/30">
        <Quote className="h-8 w-8 text-primary/70 mb-4 transform rotate-180" />
        <CardContent className="flex-grow p-0">
          <p className="text-foreground/80 italic leading-relaxed text-base">"{quote}"</p>
        </CardContent>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center">
            <UserCircle className="h-10 w-10 text-gray-400 mr-3" />
            <div>
              <p className="font-bold text-secondary">{author}</p>
              <p className="text-sm text-primary">{businessType}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
  