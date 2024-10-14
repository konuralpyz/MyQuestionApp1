import React from 'react';
import { Category } from '../App';

interface CategoriesScreenProps {
  categories: Category[];
  onCategorySelect: (category: Category) => void;
}

const CategoriesScreen: React.FC<CategoriesScreenProps> = ({
  categories,
  onCategorySelect,
}) => {
  return (
    <div className="w-full max-w-4xl p-4">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Kategori Seç
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category)}
            className="bg-white rounded-lg p-4 shadow-lg hover:bg-purple-100 transition duration-300 flex flex-col items-center"
          >
            <span className="text-4xl mb-2">{category.icon}</span>
            <span className="text-purple-600 font-semibold">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesScreen;
