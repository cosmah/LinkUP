import { useParams } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Tag, Users, Star } from 'lucide-react';

import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { events } from '@/data/events'; // Import your events data

interface EventDetailsProps {
  featured?: boolean;
}

const EventDetails = ({ featured }: EventDetailsProps) => {
  const { id } = useParams<{ id: string }>();
  const event = events.find((event) => event.id === id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <Card className={`overflow-hidden transition-all hover:shadow-lg ${featured ? 'border-primary' : ''}`}>
      <div className="aspect-video relative overflow-hidden">
        {featured && (
          <div className="absolute top-2 right-2 z-10">
            <Badge variant="default" className="gap-1">
              <Star className="w-3 h-3" /> Featured
            </Badge>
          </div>
        )}
        <img
          src={event.image}
          alt={event.title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <div className="flex items-center gap-2 mt-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src={event.organizer.image} />
                <AvatarFallback>{event.organizer.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">{event.organizer.name}</span>
            </div>
          </div>
          <Badge variant="secondary" className="whitespace-nowrap">${event.price}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{format(new Date(event.date), 'PPP')}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4" />
            <span>{event.attendees} attending</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="flex gap-2 flex-wrap">
          {event.tags.map((tag) => (
            <div key={tag} className="flex items-center gap-1 text-xs text-muted-foreground">
              <Tag className="w-3 h-3" />
              {tag}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
            <Button variant="secondary">Share</Button>
            <Button variant="secondary">Save</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EventDetails;