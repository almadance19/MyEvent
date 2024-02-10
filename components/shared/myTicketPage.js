"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/shared/TicketCardUser";

/*
See tickets by email
DONE
ADD FILTER TO SEARCH BY EVENT AND USER
*/

const MyTicketPage = ({ userId }) => {
  const router = useRouter();
  const [myEvents, setMyEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`/api/users/${userId}/tickets`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const checkoutData = await response.json();
        setMyEvents(checkoutData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    if (userId) {
      fetchEvents();
    }
  }, [userId]);

  return (
    <>
      <section className='w-full'>
      <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Here your Tickets for the hottest dance events!</h1>
            <p className="p-regular-20 md:p-regular-24">Get in contact with the organizer for questions.</p>
          </div>
      </section>

      <div className="flex flex-col items-center gap-10">
        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {myEvents.map(event => (
            <li key={event._id} className="flex justify-center">
              <Card event={event} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyTicketPage;