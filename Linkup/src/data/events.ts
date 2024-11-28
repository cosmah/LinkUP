import { Event } from '@/types/event';

export const events: Event[] = [
  {
    id: '1',
    title: 'Summer Music Festival',
    description: 'A three-day music festival featuring top artists from around the world.',
    date: '2024-07-15',
    time: '16:00',
    location: 'Central Park',
    category: 'music',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
    price: 200000,
    tags: ['music', 'festival', 'outdoor', 'summer'],
    attendees: 1250,
    organizer: {
      name: 'EventWave Productions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
    featured: true,
  },
  {
    id: '2',
    title: 'Tech Innovation Summit',
    description: 'Join industry leaders for insights into the latest technology trends.',
    date: '2024-06-20',
    time: '09:00',
    location: 'Convention Center',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    price: 150000,
    tags: ['technology', 'business', 'networking'],
    attendees: 850,
    organizer: {
      name: 'TechHub Events',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
    },
    featured: true,
  },
  {
    id: '3',
    title: 'Food & Wine Festival',
    description: 'Experience culinary delights from renowned chefs and wineries.',
    date: '2024-08-05',
    time: '12:00',
    location: 'Riverfront Plaza',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
    price: 50000,
    tags: ['food', 'wine', 'culinary'],
    attendees: 650,
    organizer: {
      name: 'Culinary Arts Society',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
    featured: true,
  },
 
    {
      id: '4',
      title: 'Jazz Night Under the Stars',
      description: 'An enchanting evening of jazz music featuring local artists.',
      date: '2024-06-25',
      time: '19:00',
      location: 'Rooftop Lounge',
      category: 'music',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      price: 25000,
      tags: ['music', 'jazz', 'nightlife'],
      attendees: 300,
      organizer: {
        name: 'Jazz Lovers Society',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      },
      featured: true,
    },
    
    {
      id: '5',
      title: 'City Marathon 2024',
      description: 'Join thousands of runners in the annual city marathon.',
      date: '2024-10-01',
      time: '07:00',
      location: 'City Park',
      category: 'sports',
      image: 'https://images.unsplash.com/photo-1521205309350-1f3e8c2b5c6e',
      price: 30000,
      tags: ['sports', 'marathon', 'running'],
      attendees: 2000,
      organizer: {
        name: 'City Sports Committee',
        image: 'https://images.unsplash.com/photo-1521205309350-1f3e8c2b5c6e',
      },
      featured: true,
    },
  
    {
      id: '6',
      title: 'Local Art Fair',
      description: 'Discover unique artworks from local artists and artisans.',
      date: '2024-09-15',
      time: '10:00',
      location: 'Downtown Square',
      category: 'arts',
      image: 'https://images.unsplash.com/photo-1517423440428-a5b3e6f1a0b7',
      price: 70000,
      tags: ['arts', 'local', 'exhibition'],
      attendees: 500,
      organizer: {
        name: 'Art in the City Collective',
        image: 'https://images.unsplash.com/photo-1517423440428-a5b3e6f1a0b7',
      },
      featured: true,
    },
  
    {
      id: '7',
      title: 'Gourmet Food Truck Festival',
      description: 'Taste delicious offerings from the best food trucks in town.',
      date: '2024-08-12',
      time: '11:00',
      location: 'Riverfront Park',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1514516878676-dbc69c6a09d2',
      price: 10000,
      tags: ['food', 'festival', 'trucks'],
      attendees: 800,
      organizer: {
        name: 'Foodie Events LLC',
        image: 'https://images.unsplash.com/photo-1514516878676-dbc69c6a09d2',
      },
      featured: true,
    },
  
    {
      id: '8',
      title: 'AI & Future Tech Expo',
      description: "Explore groundbreaking innovations in artificial intelligence.",
      date: '2024-11-05',
      time: '09:00',
      location: 'Tech Convention Center',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1564866701623-f7f8b2c5a1a9',
      price: 120000,
      tags: ['technology', 'expo', 'innovation'],
      attendees: 600,
      organizer: {
        name: "Future Tech Group",
        image:'https://images.unsplash.com/photo-1564866701623-f7f8b2c5a1a9'
       },
       featured:true
     },
  
     {
       id:'9', 
       title:'Annual Business Summit', 
       description:'Connect with industry leaders and innovators.', 
       date:'2024-12-10', 
       time:'08;30', 
       location:'Business Center', 
       category:'business', 
       image:'https://images.unsplash.com/photo-1583508987666-e3b84e9bfc2b', 
       price:25000, 
       tags:['business','networking'], 
       attendees:450, 
       organizer:{
         name:'Global Business Network', 
         image:'https://images.unsplash.com/photo-1583508987666-e3b84e9bfc2b'
       }, 
       featured:true
     },
  
     {
       id:'10', 
       title:'Health & Wellness Expo', 
       description:'Discover the latest trends in health and wellness.', 
       date:'2024-09-20', 
       time:'10;00', 
       location:'Wellness Center', 
       category:'lifestyle', 
       image:'https://images.unsplash.com/photo-1521010511016-d865fc4dc67c', 
       price:50000, 
       tags:['lifestyle','health'], 
       attendees:300, 
       organizer:{
         name:'Wellness Advocates', 
         image:'https://images.unsplash.com/photo-1521010511016-d865fc4dc67c'
       }, 
       featured:true
     },
  
     {
        id:'11',  
        title:'Yoga Retreat Weekend',  
        description:'Relax and rejuvenate at our yoga retreat.',  
        date:'2024-08-01',  
        time:'09;00',  
        location:'Mountain Resort',  
        category:'lifestyle',  
        image:'https://images.unsplash.com/photo-1532171462967-b1a39c7f7b88',  
        price:19000,  
        tags:['lifestyle','yoga','retreat'],  
        attendees:100,  
        organizer:{
          name:'Zen Yoga Studio', 
          image:'https://images.unsplash.com/photo-1532171462967-b1a39c7f7b88'  
         },  
         featured:true
     },
  
 
      {
        "id": "12",
        "title": "Summer Music Camp",
        "description": "Learn music from experienced instructors at our summer camp.",
        "date": "2024-07-20",
        "time": "10:00",
        "location": "Music Academy",
        "category": "music",
        "image": "https://images.unsplash.com/photo-1540563368-eeb5e7d2d8a3",
        "price": 100000,
        "tags": ["music", "camp", "education"],
        "attendees": 50,
        "organizer": {
          "name": "Music Academy",
          "image": "https://images.unsplash.com/photo-1540563368-eeb5e7d2d8a3"
        },
        "featured": true
      },
      {
        "id": "13",
        "title": "Photography Workshop",
        "description": "Enhance your photography skills with hands-on training.",
        "date": "2024-06-15",
        "time": "11:00",
        "location": "Art Studio",
        "category": "arts",
        "image": "https://images.unsplash.com/photo-1497636653703-b2e64eec30cc",
        "price": 75000,
        "tags": ["arts", "photography", "workshop"],
        "attendees": 25,
        "organizer": {
          "name": "Art Studio",
          "image": "https://images.unsplash.com/photo-1497636653703-b2e64eec30cc"
        },
        "featured": true
      },
      {
        "id": "14",
        "title": "Culinary Arts Class",
        "description": "Join us for an interactive culinary class.",
        "date": "2024-10-15",
        "time": "18:00",
        "location": "Culinary School",
        "category": "food",
        "image": "https://images.unsplash.com/photo-1595019519192-be170ab6e69e",
        "price": 85000,
        "tags": ["food", "culinary", "class"],
        "attendees": 40,
        "organizer": {
          "name": "Culinary School",
          "image": "https://images.unsplash.com/photo-1595019519192-be170ab6e69e"
        },
        "featured": true
      },
      {
        "id": "15",
        "title": "Tech Startup Pitch Night",
        "description": "Watch startups pitch their ideas to investors.",
        "date": "2024-11-20",
        "time": "18:30",
        "location": "Startup Hub",
        "category": "technology",
        "image": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        "price": 40000,
        "tags": ["technology", "startup", "pitch"],
        "attendees": 150,
        "organizer": {
          "name": "Startup Network",
          "image": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
        },
        "featured": true
      }
    ]