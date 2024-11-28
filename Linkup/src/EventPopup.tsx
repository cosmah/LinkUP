import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Music, Dumbbell, Palette, UtensilsCrossed, Cpu, Briefcase, Heart } from 'lucide-react';

const eventCategories = [
  { name: 'Music', icon: Music },
  { name: 'Sports', icon: Dumbbell },
  { name: 'Arts', icon: Palette },
  { name: 'Food', icon: UtensilsCrossed },
  { name: 'Technology', icon: Cpu },
  { name: 'Business', icon: Briefcase },
  { name: 'Lifestyle', icon: Heart },
];

interface EventPopupProps {
  onClose: (selectedCategories: string[]) => void;
}

const EventPopup: React.FC<EventPopupProps> = ({ onClose }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = () => {
    const normalizedCategories = selectedCategories.map(category => category.toLowerCase());
    onClose(normalizedCategories);
  };
  


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">Select Events You're Interested In</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {eventCategories.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => handleCategoryClick(name)}
              className={`
                flex flex-col items-center justify-center p-4 rounded-xl
                transition-all duration-200 ease-in-out
                ${selectedCategories.includes(name)
                  ? 'bg-gray-200 shadow-inner transform scale-95'
                  : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'
                }
              `}
            >
              <Icon className={`w-8 h-8 mb-2 ${
                selectedCategories.includes(name) ? 'text-gray-700' : 'text-gray-500'
              }`} />
              <span className={`font-medium ${
                selectedCategories.includes(name) ? 'text-gray-700' : 'text-gray-600'
              }`}>
                {name}
              </span>
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleSubmit}
            className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;