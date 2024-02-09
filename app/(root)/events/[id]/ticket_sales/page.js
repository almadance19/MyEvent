"use client"
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from 'react';    
import CsvTable from '@/components/shared/TicketTable';

export default function Page() {
    const [allCSVData, setallCSVData] = useState(null);

    const searchParams = useSearchParams();
    const id = searchParams.get("eventid");   
    const userId = searchParams.get("userid"); 

    console.log(id,"Id was here",userId); 

    useEffect(() => {
        handleGetAllData();
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
      const response2 = await fetch("/api/organisers/tickets", 
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
        <div>

        {allCSVData ? (
            <CsvTable data={allCSVData} />
        ) : (
            <p className="text-gray-500"></p>
        )}
        </div>
    );
    }

