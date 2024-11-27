import { Button } from '@/components/ui/button';
import { EventCategory } from '@/types/event';
import { Music, Dumbbell, Palette, Utensils, Laptop, Briefcase, Heart } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: EventCategory | null;
  onSelectCategory: (category: EventCategory | null) => void;
}

const categories: { label: string; value: EventCategory; icon: React.ReactNode }[] = [
  { label: 'Music', value: 'music', icon: <Music className="w-4 h-4" /> },
  { label: 'Sports', value: 'sports', icon: <Dumbbell className="w-4 h-4" /> },
  { label: 'Arts', value: 'arts', icon: <Palette className="w-4 h-4" /> },
  { label: 'Food', value: 'food', icon: <Utensils className="w-4 h-4" /> },
  { label: 'Technology', value: 'technology', icon: <Laptop className="w-4 h-4" /> },
  { label: 'Business', value: 'business', icon: <Briefcase className="w-4 h-4" /> },
  { label: 'Lifestyle', value: 'lifestyle', icon: <Heart className="w-4 h-4" /> },
];

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        onClick={() => onSelectCategory(null)}
      >
        All Events
      </Button>
      {categories.map((category) => (
        <Button
          key={category.value}
          variant={selectedCategory === category.value ? "default" : "outline"}
          onClick={() => onSelectCategory(category.value)}
          className="flex items-center gap-2"
        >
          {category.icon}
          {category.label}
        </Button>
      ))}
    </div>
  );
}