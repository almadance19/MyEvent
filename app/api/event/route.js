import Event from "@/models/event";
import { connectToDatabase } from '@/lib/database'

export const POST = async (request) => {

    console.log("request.json().userId");


    const { eventURL, eventKey, eventName, eventEmail, creator,createdAt,eventDescription,eventDate,eventAdress,eventFotoURL, eventWebsite   } = await request.json();

    console.log("event_image",eventFotoURL);

    try {
        await connectToDatabase();
        // check if user already exists
        const EventExists = await Event.findOne({ eventURL: eventURL });

        // if not, create a new document and save user in MongoDB
        if (!EventExists) {
            const newEvent = new Event({eventURL, eventKey, eventName, eventEmail, creator,createdAt,eventDescription,eventDate,eventAdress,eventFotoURL, eventWebsite  });
            await newEvent.save();
            console.log("Event created successfully");
            return new Response(JSON.stringify(newEvent), { status: 201 })

        } else {
            console.log("Event already in the System");
            return new Response("Event already in the System", { status: 201 })
        }
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}


export const GET = async (request) => {
    try {
        await connectToDatabase();
        const prompts = await Event.find({}).select({
            creator: 0, // Exclude
            eventKey: 0, // Exclude
            });
        console.log(prompts);
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        return new Response("Failed to get prompts", { status: 500 });
    }           
}


