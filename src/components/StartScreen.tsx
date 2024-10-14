import React from 'react';
import { MessageCircle } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center">
      <div className="mb-8">
        <MessageCircle size={80} className="text-white mx-auto" />
        <h1 className="text-4xl font-bold text-white mt-4">MavR</h1>
      </div>
      <button
        onClick={onStart}
        className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-purple-100 transition duration-300"
      >
        Start
      </button>
      <div className="mt-8 space-x-4">
        <a href="#" className="text-white hover:text-purple-200">
          Facebook
        </a>
        <a href="#" className="text-white hover:text-purple-200">
          Twitter
        </a>
        <a href="#" className="text-white hover:text-purple-200">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default StartScreen;