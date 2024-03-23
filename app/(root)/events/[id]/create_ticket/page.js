"use client"
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from 'react';    
import TicketForm from '@/components/shared/TicketForm';

export default function Page() {
    const [allCSVData, setallCSVData] = useState(null);

    const searchParams = useSearchParams();
    const id = searchParams.get("eventid");   
    const userId = searchParams.get("userid");
    const eventName = searchParams.get("eventName");  

    console.log(id,"Id was here",userId); 

    useEffect(() => {
        //handleGetAllData();
    }, []);
  
      const  handleGetAllData = async () => {

        console.log('Fetching data from API...');
      //Wait 3 seconds before sending data to API
      try {
        if (id && userId ) {
          const body = {
            session: userId,
            eventid: id,
          };
          const event_ticket_data = await fetchURL(body);
          setallCSVData(event_ticket_data.prompts);
  


        } else {
          console.error('ID or Event is undefined or null.');
        }
      } catch (error) {
        console.error('Error sending data to API:', error);
      }
    };
    
    const fetchURL = async (body) => {
      try {
      const response2 = await fetch("/api/ticket/new_edit", 
      {
          method: "POST",
          body: JSON.stringify(body),
          headers: new Headers({ "Content-Type": "application/json" }),
      });
  
      if (!response2.ok) {
          throw new Error(`Failed to fetch URL. Status: ${response2.status}`);
      }
      
      const data2 = await response2.json();
      console.log('STRIPE API REP:', data2);
  
      return data2;
      } catch (error) {
      console.error('Error fetching URL:', error);
      throw error;
      }
  };

    return (
          <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Ticket</h3>
      </section>

      <div className="wrapper my-8">
         <TicketForm eventURL={id} eventName={eventName} eventOrganiserId={userId}  /> 
      </div>
    </>
    );
    }

