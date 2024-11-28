import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  getUserByEmail,
  getUserDemographicsByUserId,
  updateUserDemographicsByUserId
} from "@/context/api";
import { ProfileDisplay } from "./ProfileDisplay";
import { ProfileEditForm } from "./ProfileEditForm";
import { UserData } from "./types";
import { events } from "@/data/events"; // Import your events data
import { format } from "date-fns"; // Import the format function from date-fns

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string>("");
  const [bookmarkedEvents, setBookmarkedEvents] = useState<any[]>([]); // State to hold bookmarked events

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!user?.email) return;

        const userDetails = await getUserByEmail(user.email);
        const demographics = await getUserDemographicsByUserId(userDetails.id);
        setUserData({
          ...userDetails,
          ...demographics
        });
      } catch (error) {
        setError("Failed to fetch user data");
      }
    };

    fetchUserData();
  }, [user?.email]);

  useEffect(() => {
    // Retrieve bookmarked events from session storage
    const bookmarkedEventIds = JSON.parse(sessionStorage.getItem('bookmarkedEvents') || '[]');
    const allEvents = events; // Assuming 'events' is an array of all event objects
    const userBookmarkedEvents = allEvents.filter(event => bookmarkedEventIds.includes(event.id));
    setBookmarkedEvents(userBookmarkedEvents);
  }, []);

  const handleSave = async (formData: Omit<UserData, 'id' | 'created_at'>) => {
    try {
      if (!userData?.id) throw new Error("User ID not found");

      await updateUserDemographicsByUserId(userData.id, {
        date_of_birth: formData.date_of_birth,
        gender: formData.gender,
        religion: formData.religion,
        address: formData.address,
      });

      // Refresh user data
      const userDetails = await getUserByEmail(user?.email || "");
      const demographics = await getUserDemographicsByUserId(userDetails.id);
      setUserData({
        ...userDetails,
        ...demographics
      });

      setIsEditing(false);
    } catch (error) {
      throw new Error("Failed to update profile");
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        {isEditing ? (
          <ProfileEditForm
            userData={userData}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <ProfileDisplay
            userData={userData}
            onEdit={() => setIsEditing(true)}
          />
        )}

<div className="mt-8">
  <h2 className="text-2xl font-semibold">Bookmarked Events</h2>
  {bookmarkedEvents.length > 0 ? (
    <ul className="space-y-4 mt-4">
      {bookmarkedEvents.map(event => (
        <li key={event.id} className="border p-4 rounded-md shadow-sm">
          <Link to={`/event-details/${event.id}`} className="block hover:underline">
            <h3 className="font-bold">{event.title}</h3>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {format(new Date(event.date), "PPP")}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Price:</strong> USh {event.price}</p>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>No bookmarked events found.</p>
  )}
</div>


      </div>
    </div>
  );
};

export default Profile;
