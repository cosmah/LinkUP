import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { EventFilters } from '@/components/filters/EventFilters';
import { FeaturedEvents } from '@/components/events/FeaturedEvents';
import { EventCard } from '@/components/events/EventCard';
import { events } from '@/data/events';
import { EventFilters as EventFiltersType } from '@/types/event';
import { PRICE_RANGE } from '@/lib/constants';
import EventDetails from '@/components/events/EventDetails';
import Registeration from './components/auth/signUp/Registeration'; // Corrected import path
import Login from './components/auth/signIn/Login';
import { AuthProvider } from '@/context/AuthContext';
import Profile from './components/user/Profile';
import { useMediaQuery } from 'react-responsive';

function App() {
  const [filters, setFilters] = useState<EventFiltersType>({
    search: '',
    category: null,
    priceRange: [PRICE_RANGE.min, PRICE_RANGE.max],
    dateRange: [null, null],
  });

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      event.description.toLowerCase().includes(filters.search.toLowerCase());
    const matchesCategory = filters.category ? event.category === filters.category : true;
    const matchesPrice = event.price >= filters.priceRange[0] && event.price <= filters.priceRange[1];
    const matchesDate = !filters.dateRange[0] || !filters.dateRange[1] ? true :
      new Date(event.date) >= filters.dateRange[0] && new Date(event.date) <= filters.dateRange[1];

    return matchesSearch && matchesCategory && matchesPrice && matchesDate;
  });

  // Define media queries
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });
  
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Header />
          
          <Routes>
            <Route path="/" element={
              <>
                <FeaturedEvents events={events} />

                <main className={`container mx-auto ${isMobile ? 'px-2' : 'px-4'} py-8`}>
                  <section id="explore" className="space-y-8">
                    <h2 className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Explore Events</h2>
                    
                    <EventFilters
                      filters={filters}
                      onFiltersChange={setFilters}
                    />

                    <div className={`grid grid-cols-1 ${isTablet ? 'md:grid-cols-2' : 'lg:grid-cols-3'} gap-6`}>
                      {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>
                    
                    {filteredEvents.length === 0 && (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground">No events found matching your criteria.</p>
                      </div>
                    )}
                  </section>
                </main>
              </>
            } />
            <Route path="/event-details/:id" element={<EventDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registeration />} />
            <Route path='/user-profile' element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;