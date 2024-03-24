import TicketForm from '@/components/shared/TicketFormEdit';
import { auth } from '@clerk/nextjs'

export default function Page() {

    const { userId } = auth();

    console.log("clerckId was here",userId); 


    return (
          <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Edit Ticket</h3>
      </section>

      <div className="wrapper my-8">
         <TicketForm clerckAuth={userId} /> 
      </div>
    </>
    );
    }

