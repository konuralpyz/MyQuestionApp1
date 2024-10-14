import React, { useState, useEffect } from 'react';
import { Category } from '../App';
import { ChevronLeft, RotateCcw } from 'lucide-react';

interface CardGameScreenProps {
  category: Category;
  onBack: () => void;
}

const questions: { [key: string]: string[] } = {
  '1': [
    "What's your favorite childhood memory?",
    'If you could have any superpower, what would it be?',
    "What's the most adventurous thing you've ever done?",
  ],
  '2': [
    "What's your biggest fear in life?",
    'If you could change one thing about the world, what would it be?',
    "What's the most valuable lesson you've learned so far?",
  ],
  '3': [
    'If you were a vegetable, what vegetable would you be and why?',
    "What's the weirdest dream you've ever had?",
    'If you could invent a silly holiday, what would it be?',
  ],
  '4': [
    "What's your idea of a perfect date?",
    'How do you show love and affection in a relationship?',
    "What's the most romantic gesture you've ever experienced or given?",
  ],
};

const CardGameScreen: React.FC<CardGameScreenProps> = ({
  category,
  onBack,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [usedQuestions, setUsedQuestions] = useState<number[]>([]);

  const categoryQuestions = questions[category.id];

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const shuffleQuestions = () => {
    const shuffled = [...Array(categoryQuestions.length).keys()].sort(
      () => Math.random() - 0.5
    );
    setUsedQuestions(shuffled);
    setCurrentQuestionIndex(0);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < usedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      shuffleQuestions();
    }
  };

  const currentQuestion =
    categoryQuestions[usedQuestions[currentQuestionIndex]];

  return (
    <div className="w-full max-w-lg p-4">
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="text-white hover:text-purple-200">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-2xl font-bold text-white">{category.name}</h2>
        <button
          onClick={shuffleQuestions}
          className="text-white hover:text-purple-200"
        >
          <RotateCcw size={24} />
        </button>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
        <p className="text-xl text-purple-600 font-semibold">
          {currentQuestion}
        </p>
      </div>
      <button
        onClick={handleNextQuestion}
        className="w-full bg-purple-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-purple-600 transition duration-300"
      >
        Geç
      </button>
    </div>
  );
};

export default CardGameScreen;
