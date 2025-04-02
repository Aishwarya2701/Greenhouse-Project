import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { greenhouseFacts } from '../data/plantDatabase';

export function GreenhouseFact() {
  const [currentFact, setCurrentFact] = useState('');

  useEffect(() => {
    const getRandomFact = () => {
      const randomIndex = Math.floor(Math.random() * greenhouseFacts.length);
      setCurrentFact(greenhouseFacts[randomIndex]);
    };

    getRandomFact();
    const interval = setInterval(getRandomFact, 10000); // Change fact every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-yellow-50 rounded-xl shadow-lg p-6 mb-8"
    >
      <div className="flex items-center gap-3 mb-2">
        <Lightbulb className="text-yellow-500 w-6 h-6" />
        <h3 className="text-lg font-semibold text-yellow-700">Did You Know?</h3>
      </div>
      <p className="text-yellow-800">{currentFact}</p>
    </motion.div>
  );
}