import Ticket from "@/models/ticket";
import Event from '@/lib/database/models/event.model'


import { connectToDatabase } from '@/lib/database'

export const POST = async (request) => {

    let { creator,
        eventURL,
        eventName,
        eventOrganiserId,
        eventId,
        created_at,
        ticket_id,
        ticket_nr,
        email,
        name_payment,
        pre_total,
        total,
        pre_mwst,
        mwst,
        subtotal,
        amount_discount,
        name_ticket,
        paystatus,
        ticket_type,
        address,
        phone,
        currency,
        checked_in} = await request.json();

        name_ticket = name_payment;
        pre_total = total;
        pre_mwst = 0;
        mwst = 0;
        subtotal = 0;
        amount_discount = 0;

    console.log("name_ticket: ", name_ticket, "eventURL: ", eventURL, "eventName: ", eventName, "checkedin" , checked_in, );


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
            console.log("Event Key",eventKey);

            if (!eventKey || eventActive === false) {
                console.log("Event Key does not exist or Event is not active");
                return new Response(JSON.stringify("NO KEY IN SYSTEM"), { status: 201 })
            } else {
                console.log("Event Key exists");
                let existingTicket = await Ticket.findOne({ name_ticket: name_ticket, eventURL: eventURL, eventName: eventName });

                if (!existingTicket) {
                    console.log("Ticket not found");
                    const newTicket = new Ticket({
                        creator,
                        eventURL,
                        eventName,
                        eventOrganiserId,
                        eventId,
                        created_at,
                        ticket_id,
                        ticket_nr,
                        email,
                        name_payment,
                        pre_total,
                        total,
                        pre_mwst,
                        mwst,
                        subtotal,
                        amount_discount,
                        name_ticket,
                        paystatus,
                        ticket_type,
                        address,
                        phone,
                        currency,
                        checked_in
                    });
                    await newTicket.save();
                    
                    console.log("Ticket saved");

                    return new Response("Ticket Created", { status: 200 });
                } else {
                    console.log("Ticket found");
                    return new Response("Ticket Exists already", { status: 404 });

                }
            }
        }

    } catch (error) {
        console.log(error);
        return new Response("Error Updating Ticket", { status: 500 });
    }
};