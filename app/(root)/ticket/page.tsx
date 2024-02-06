import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs";
import Ticketshell from "@/components/shared/Ticketshell"
import { Button } from "@/components/ui/button"

const TicketPage = () => {
  const { userId } = auth();
  const userIdAsString: string = userId as string;
  console.log(userIdAsString)

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Display your Ticket</h3>
        <Ticketshell userId={userIdAsString}/> 
      </section> 
      <div className="  m-4 my-8">
         
      </div>

    </>
  )
}

export default TicketPage