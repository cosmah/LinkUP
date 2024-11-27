import { Event } from '@/types/event';
import { EventCard } from './EventCard';

interface FeaturedEventsProps {
  events: Event[];
}

export function FeaturedEvents({ events }: FeaturedEventsProps) {
  const featuredEvents = events.filter(event => event.featured);

  if (featuredEvents.length === 0) return null;

  return (
    <section id="featured" className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} featured />
          ))}
        </div>
      </div>
    </section>
  );
}