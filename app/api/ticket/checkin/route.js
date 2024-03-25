import Ticket from "@/models/ticket";
import Event from '@/lib/database/models/event.model'

import { connectToDatabase } from '@/lib/database'

export const POST = async (request) => {

    const { eventURL, id , type, creator} = await request.json();
    console.log("URL:",eventURL);
    console.log("ID:",id);
    console.log("TYPE:",type);

    let ticket_id = id;

    try {
  
       await connectToDatabase();

       let EventExists = await Event.findOne({ _id: eventURL })
        ;
    
        if (!EventExists) {
            console.log("Event does not Exists");
            
            return new Response(JSON.stringify("URL DOES NOT EXISTS OR IS WRONG"), { status: 201 })

        } else {
      
            let eventKey = EventExists.eventKey;
            let eventActive = EventExists.active;
            let eventName = EventExists.eventName;
            console.log("Event Key",eventKey);

            if (!eventKey || eventActive === false) {
                console.log("Event Key does not exist or Event is not active");
                return new Response(JSON.stringify("NO KEY IN SYSTEM"), { status: 201 })
            } else {
                console.log("Event Key exists");
             // let existingTicket = await Ticket.findOne({ ticket_id: ticket_id, eventURL: eventURL, eventName: eventName });
                const existingTicket = await Ticket.findOneAndUpdate(
                    {ticket_id: ticket_id, eventURL: eventURL, eventName: eventName, checked_in: false},
                    { $set: { checked_in: true}}
                )

                if (existingTicket) {
                    console.log("Ticket Check In");
                    
                    return new Response(JSON.stringify("Check In was successful"), { status: 200 })
                } else {

                    const existingTicket2 = await Ticket.findOneAndUpdate(
                        {ticket_id: ticket_id, eventURL: eventURL, eventName: eventName, checked_in: true},
                        { $set: { checked_in: true}}
                    )

                    if (existingTicket2) {
                        console.log("Ticket Check In");
                        
                        return new Response(JSON.stringify("Ticket already Checked In"), { status: 200 })
                    } else {
                        console.log("Ticket not found");
                        return new Response(JSON.stringify("Ticket not found"), { status: 404 })
                    }
                }
            }
        }

    } catch (error) {
        console.log(error);
        return new Response("Error Updating Ticket", { status: 500 });
    }
};