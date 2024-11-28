import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Calendar, MapPin, Clock, Tag, Users, Star } from "lucide-react";

import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { events } from "@/data/events"; // Import your events data

interface EventDetailsProps {
  featured?: boolean;
}

const shareToPlatform = (platform: string) => {
  const url = window.location.href;
  const text = "Check out this event!";
  let shareUrl = "";

  switch (platform) {
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`;
      break;
    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(text)}`;
      break;
    case "linkedin":
      shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(text)}`;
      break;
    default:
      break;
  }

  window.open(shareUrl, "_blank");
};

const EventDetails = ({ featured }: EventDetailsProps) => {
  const { id } = useParams<{ id: string }>();
  const event = events.find((event) => event.id === id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <Card
      className={`overflow-hidden transition-all hover:shadow-lg ${
        featured ? "border-primary" : ""
      }`}
    >
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
              <span className="text-sm text-muted-foreground">
                {event.organizer.name}
              </span>
            </div>
          </div>
          <Badge variant="secondary" className="whitespace-nowrap">
            ${event.price}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {event.description}
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{format(new Date(event.date), "PPP")}</span>
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
            <div
              key={tag}
              className="flex items-center gap-1 text-xs text-muted-foreground"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" className="flex items-center gap-2">
        Share
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48 bg-white border rounded-md shadow-lg">
      <DropdownMenuItem
        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 hover:text-primary transition-all"
        onClick={() => shareToPlatform('facebook')}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook"
          className="w-4 h-4"
        />
        Share on Facebook
      </DropdownMenuItem>
      <DropdownMenuItem
        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 hover:text-primary transition-all"
        onClick={() => shareToPlatform('x')}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e3/X_logo_2023.svg"
          alt="X"
          className="w-4 h-4"
        />
        Share on X
      </DropdownMenuItem>
      <DropdownMenuItem
        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 hover:text-primary transition-all"
        onClick={() => shareToPlatform('linkedin')}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="LinkedIn"
          className="w-4 h-4"
        />
        Share on LinkedIn
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  <Button variant="secondary">Save</Button>
</div>

      </CardFooter>
    </Card>
  );
};

export default EventDetails;
