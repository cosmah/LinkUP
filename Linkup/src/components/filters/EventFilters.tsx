import { CategoryFilter } from './CategoryFilter';
import { SearchBar } from './SearchBar';
import { PriceRangeFilter } from './PriceRangeFilter';
import { DateRangeFilter } from './DateRangeFilter';
import { EventFilters as EventFiltersType } from '@/types/event';

interface EventFiltersProps {
  filters: EventFiltersType;
  onFiltersChange: (filters: EventFiltersType) => void;
}

export function EventFilters({ filters, onFiltersChange }: EventFiltersProps) {
  return (
    <div className="space-y-6">
      <SearchBar 
        value={filters.search} 
        onChange={(search) => onFiltersChange({ ...filters, search })} 
      />
      <CategoryFilter
        selectedCategory={filters.category}
        onSelectCategory={(category) => onFiltersChange({ ...filters, category })}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PriceRangeFilter
          value={filters.priceRange}
          onChange={(priceRange) => onFiltersChange({ ...filters, priceRange })}
        />
        <DateRangeFilter
          value={filters.dateRange}
          onChange={(dateRange) => onFiltersChange({ ...filters, dateRange })}
        />
      </div>
    </div>
  );
}