import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs";
import Ticketshell from "@/components/shared/Ticketshell"

const TicketPage = () => {
  const { userId } = auth();
  const userIdAsString: string = userId as string;
  console.log(userIdAsString)

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper my-8">
         <Ticketshell userId={userIdAsString}/> 
      </div>
    </>
  )
}

export default TicketPage