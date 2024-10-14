import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import CategoriesScreen from './components/CategoriesScreen';
import CardGameScreen from './components/CardGameScreen';

export type Category = {
  id: string;
  name: string;
  icon: string;
};

const categories: Category[] = [
  { id: '1', name: 'MavR', icon: '🎉' },
  { id: '2', name: 'Gündelik', icon: '😜' },
  { id: '3', name: 'Düşündürücü', icon: '🤔' },
  { id: '4', name: 'Romantik', icon: '❤️' },
];

function App() {
  const [screen, setScreen] = useState<'start' | 'categories' | 'game'>(
    'start'
  );
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const handleStart = () => {
    setScreen('categories');
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setScreen('game');
  };

  const handleBackToCategories = () => {
    setScreen('categories');
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
      {screen === 'start' && <StartScreen onStart={handleStart} />}
      {screen === 'categories' && (
        <CategoriesScreen
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />
      )}
      {screen === 'game' && selectedCategory && (
        <CardGameScreen
          category={selectedCategory}
          onBack={handleBackToCategories}
        />
      )}
    </div>
  );
}

export default App;
