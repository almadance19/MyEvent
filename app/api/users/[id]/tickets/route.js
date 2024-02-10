
import Ticket from "@/models/ticket";
import Event from '@/lib/database/models/event.model'
import { connectToDatabase } from '@/lib/database'
import User from '@/lib/database/models/user.model'


export const GET = async (request, { params }) => {
    try {
        await connectToDatabase()
        console.log("HOLA",params.id);

        const user = await User.findOne({ clerkId: params.id });

        console.log("USER",user);

        if (!user) {
            return new Response(JSON.stringify("No user found"), { status: 201 })
        } else {
            const ticketsasuser = await Ticket.find({ email: user.email }).select({
                eventOrganiserId: 0, // Exclude
                });
    
                if (!ticketsasuser) {
                    console.log("NO Tickets as user");
                    return new Response(JSON.stringify("No Tickets as user"), { status: 201 }) 
        
                } else {
                    console.log("Tickets as user",ticketsasuser);
                    return new Response(JSON.stringify(ticketsasuser), { status: 201 })
                }
        }


    } catch (error) {
        return new Response("Failed to fetch ticketsasuser created by user", { status: 500 })
    }
} 