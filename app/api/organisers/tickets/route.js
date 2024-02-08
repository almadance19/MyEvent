import Ticket from "@/models/ticket";
import { connectToDatabase } from '@/lib/database'
import User from '@/lib/database/models/user.model'

export const POST = async (request) => {

    const { session, eventid } = await request.json();

    console.log("SEARCH ORG TICKETS",session,eventid);

    try {
        await connectToDatabase();
        console.log("HOLA");

        //const organizer = await User.findById(userId)
        const organizer = await User.findOne({ clerkId: session })

        console.log("org",organizer)

        if (!organizer) throw new Error('Organizer not found')

        const organizerId= organizer._id;


        const prompts = await Ticket.find({ eventOrganiserId: organizerId }).populate("creator")

        if (!prompts) {
            console.log("NO Tickets");
            return new Response(JSON.stringify("No Tickets"), { status: 201 })
        } else {
            console.log("Tickets",prompts);
            
            return new Response(JSON.stringify(prompts), { status: 201 })
        }

    } catch (error) {
        return new Response("Failed to fetch prompts owned by organiser", { status: 500 })
    }
} 