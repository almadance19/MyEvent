"use client";

import { useSearchParams } from "next/navigation";
import Head from 'next/head';
import FormDataDisplay from "@/components/shared/dataTicket";
//import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { auth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import PrintButton from "@/components/shared/PrintPage";
import { Button } from "@/components/ui/button"
//import EditFormDataDisplay from "@components/editTicket";
import { useRouter } from "next/navigation";

import Link from "next/link";


/// GET STRIPE ID FROM METADATA
/// GET STRIPE ID FROM METADATA
/// GET STRIPE ID FROM METADATA
/*
Save TICKET FIRST 
ASK IF USER WANTS TO SIGN IN TO SAVE TICKET ON THE SYSTEM AND GET NOTIFICATIONS
IF USER SAYS YES THEN SIGN IN AND LINK IT TO THE TICKET
SO PROBABLY THE ID WILL BE THE EMAIL AND NOT THE USER ID FROM NEXT AUTH

user with Email and then create ticket
See tickets by email not user id
*/

/// SAVE THE TICKET ALREADY AT CREATION WITHOUT HAVING TO GO TO WEB PAGE AND RISK MESSING WITH API
/// SAVE THE TICKET ALREADY AT CREATION WITHOUT HAVING TO GO TO WEB PAGE AND RISK MESSING WITH API


const Ticketshell = ({userId}) => {
  const [providers, setProviders] = useState(null);

  const [apiResponse, setApiResponse] = useState(null);
  const [apiResponse2, setApiResponse2] = useState(null);
  const [editButton, setEditButton] = useState(null);

  const router = useRouter();


  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const event = searchParams.get("event");
  const type = searchParams.get("type") || "buyer";

  console.log(id," ",event," ",type," ",userId);

  // useEffect(() => {
  //   if (userId) {
  //     handleSendToApi();

  //   } else {
  //     handleSendToApi();
  //     // const decision = window.confirm('Do you want to save your Ticket here:\n\n OK: Sign in and Save Ticket in the Page \n Cancel: Print Ticket without Signing In.');
  //     // if (decision) {
  //     //   console.log('User chose to sign in.');
  //     //   router.push('/sign-in');
  //     // } else {
  //     //   console.log('User chose not to sign in.');
  //     // }
  //   }
  
  // }, [userId]);


//   useEffect(() => {
//     (async () => {
//       const res = await getProviders();
//       setProviders(res);
//     })();
//   }, []);

  const handleSendToApi = async () => {
    try {
      if (id && event) {
        const body = {
          eventURL: event,
          id: id,
          type: type,
          creator: userId,
        };

        
        const fetchURL = async () => {
          try {
            console.log('Fetching URL...', event);
            const response2 = await fetch("/api/event_url2", 
            {
              method: "POST",
              body: JSON.stringify(body),
              headers: new Headers({ "Content-Type": "application/json" }),
            });


            if (!response2.ok) {
              throw new Error(`Failed to fetch URL. Status: ${response2.status}`);
            }
             
            const data2 = await response2.json();
     
            console.log('TEST ORGANISER IS USER',userId,data2.EventExists.creator.clerkId);
            if (userId == data2.EventExists.creator.clerkId ) {
              console.log('ORGANISER TICKET');
              setApiResponse2("Edit");
            }

            return data2;
          } catch (error) {
            console.error('Error fetching URL:', error);
            throw error;
          }
        };
  
        const event_ticket_data = await fetchURL();

        setApiResponse(event_ticket_data);
        setButtonClicked(true);
        

      } else {
        console.error('ID or Event is undefined or null.');
      }
    } catch (error) {
      console.error('Error sending data to API:', error);
    }
  };
  
  const handleEdit = async () => {
    try {
      if (id && event) {
        const body = {
          eventURL: event,
          id: id,
          type: type,
          creator: userId,
        };
        // handleSendToApi();
        setEditButton("Edit");
        setButtonClicked(true);
      }
    }
    catch (error) {
      console.error('Error sending data to API:', error);
    }
  }

  const [buttonClicked, setButtonClicked] = useState(false);


  return (
    <div className="container mx-auto p-2 m-4 bg-cover bg-center py-5 md:py-10">
      <Head>
        <title>Ticket System</title>
      </Head>
      {type === "org" && userId &&   (
        <div >
          <h1 className="text-2xl font-bold mb-4">Organiser Ticket Management</h1>
          <p className="mb-4">
           Click the button below to see and print your Ticket
          </p>
          {!buttonClicked && (
          <Button 
            className="m-4"
            variant="" 
            onClick={handleSendToApi}
          > 
            Open Ticket
          </Button> 
          )}
          {apiResponse2 && (
            <>
          
          <Link href={`/events/edit_ticket?eventid=${event}&ticketid=${id}&clerckid=${userId}&statusticket=${apiResponse.CheckoutData.paystatus}&eventName=${apiResponse.CheckoutData.eventName}&nameticket=${apiResponse.CheckoutData.name_ticket}&emailticket=${apiResponse.CheckoutData.email}&amountticket=${apiResponse.CheckoutData.pre_total}&typeticket=${apiResponse.CheckoutData.ticket_type}`}>
            <Button 
            variant="default" 
          > 
            Edit Ticket
          </Button>
          </Link> 
          <Button variant="default"
            className="m-4"
            onClick={handleSendToApi}>
            Check In
          </Button> 
            </>
          )}
          
        </div>
      )}
      {type === "buyer" && !userId   && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Welcome to My Ticket</h1>
          <p className="mb-4">
            Click the button below to see and print your Ticket
          </p>
          {!buttonClicked && (
          <Button variant="" 
            className="m-4"
            onClick={handleSendToApi}
          > 
            Open Ticket
          </Button>  
          )}
          {buttonClicked || null}
                <>
                <p className="mb-4">
            Do you want to save your Ticket to be available here online?
          </p>
          <label className="block mb-2" htmlFor="email">
            ** Click the button to sign in and save your Ticket in our Website. Use the email you use in your stripe registration 
          </label>
                {/* <Button variant="" 
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="rounded-xl bg-navy-700 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
                  >
                  Sign in & Show Ticket
                </Button> */}
                </>
        </div>  
      )}
      {type === "buyer" && userId   && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Welcome to My Ticket</h1>
          <p className="mb-4">
          Click the button below to see and print your Ticket
          </p>
          {!buttonClicked && (
          <Button 
            variant="" 
            className="m-4"
            onClick={handleSendToApi}
          > 
            Show & Open Ticket
          </Button>
          )}
          {buttonClicked || null}  
        </div>  
      )}
      {editButton && (
            <div className="mb-4">
              {/* <EditFormDataDisplay data={apiResponse} /> */}
            </div>
      )} 
      {apiResponse && (
         <>
            <div className="mb-4">
              <PrintButton />
            </div>
              <div className="mb-4">
              <FormDataDisplay data={apiResponse} />
            </div>
            </>
      )}
 
      
        <div>
        </div>
    </div>

  );
};

export default Ticketshell;