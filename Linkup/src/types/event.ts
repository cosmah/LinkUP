export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  image: string;
  price: number;
  tags: string[];
  attendees: number;
  organizer: {
    name: string;
    image: string;
  };
  featured: boolean;
}

export type EventCategory = 
  | 'music'
  | 'sports'
  | 'arts'
  | 'food'
  | 'technology'
  | 'business'
  | 'lifestyle';

export interface EventFilters {
  category: EventCategory | null;
  search: string;
  priceRange: [number, number];
  dateRange: [Date | null, Date | null];
}