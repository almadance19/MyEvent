"use client"
import { useState } from 'react';
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation";

const TicketForm = ({clerckAuth}) => {
  const searchParams = useSearchParams();
    const eventURL = searchParams.get("eventid");   
    const nameticket = searchParams.get("nameticket");
    const eventName = searchParams.get("eventName");
    const emailticket = searchParams.get("emailticket");
    const amountticket = searchParams.get("amountticket");
    const typeticket = searchParams.get("typeticket");
    const ticketId = searchParams.get("ticketid");  
    const eventclerckid = searchParams.get("clerckid");
    const isEventCreator = clerckAuth === eventclerckid;
    const statusticket = searchParams.get("statusticket");
  


  const today = new Date();
  const uniqueID =  'manual_ticket_' + Date.now();
  const uniqueID2 =  'ticket_' + Date.now();
    
  const [formData, setFormData] = useState({
    creator: '',
    eventURL: eventURL,
    eventName: eventName,
    eventOrganiserId: '',
    eventId: eventURL,
    created_at: today,
    ticket_id: ticketId,
    ticket_nr: uniqueID2,
    email: emailticket,
    name_payment: nameticket,
    pre_total: amountticket,
    total: amountticket,
    pre_mwst: '',
    mwst: '',
    subtotal: '',
    amount_discount: '',
    name_ticket: nameticket,
    paystatus: statusticket,
    ticket_type: typeticket,
    address: '--',
    phone: '--',
    currency: 'EUR',
    checked_in: false
  });

  const [successMessage, setSuccessMessage] = useState('');


  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (!isEventCreator) {
        console.error('You are not the creator of this event.');
        return;

      } else {
      const response = await fetch('/api/ticket/edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Ticket updated successfully!');
        router.push(`/ticket?event=${formData.eventURL}&id=${formData.ticket_id}&type=org`)
        setSuccessMessage('Ticket updated successfully!');
        
      } else {
        console.error('Failed to create ticket.');
      }
    }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-white shadow sm:rounded-lg py-4 m-2">
    <h2 className="text-2xl font-semibold text-center">{eventName}</h2>
    <p className="text-center text-gray-500">Fill in the form to edit a ticket</p>
    
    <form onSubmit={handleSubmit}>
    <  div className="">

        <div className="flex flex-col gap-5 md:flex-row">
        <div className="col-span-full">
       <label className="block"><strong>
      Ticket ID:
        </strong><input
          type="text"
          name="ticket_id"
          value={formData.ticket_id}
          onChange={handleChange}
          readOnly={true}
              className="w-full mt-1 bg-gray-300 text-black border-gray-700 border px-4 py-2 rounded-md"
          />
      </label>
      </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
        <div className="col-span-full">
       <label className="block"><strong>
      Email:
        </strong><input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
              className="w-full mt-1 bg-gray-300 text-black border-gray-700 border px-4 py-2 rounded-md"
          />
      </label>
      </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <div className="col-span-full">
       <label className="block"><strong>
      Name in Ticket:
        </strong><input
          type="text"
          name="name_payment"
          value={formData.name_payment}
          onChange={handleChange}
              className="w-full mt-1 bg-gray-300 text-black border-gray-700 border px-4 py-2 rounded-md"
          />
      </label>
      </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <div className="col-span-full">
       <label className="block"><strong>
      Payment Amount EUR:
        </strong><input
          type="number"
          name="total"
          value={formData.total}
          onChange={handleChange}
              className="w-full mt-1 bg-gray-300 text-black border-gray-700 border px-4 py-2 rounded-md"
          />
      </label>
      </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
        <div className="col-span-full">
       <label className="block"><strong>
      Notes:
        </strong><input
          type="text"
          name="paystatus"
          value={formData.paystatus}
          onChange={handleChange}
              className="w-full mt-1 bg-gray-300 text-black border-gray-700 border px-4 py-2 rounded-md"
          />
      </label>
      </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <div className="col-span-full">
       <label className="block"><strong>
      Ticket Type (Fullpass, Daypass, Partypass, etc):
        </strong><input
          type="text"
          name="ticket_type"
          value={formData.ticket_type}
          onChange={handleChange}
              className="w-full mt-1 bg-gray-300 text-black border-gray-700 border px-4 py-2 rounded-md"
          />
      </label>
      </div>
        </div>

    <br />
      {/* Add other input fields for other form fields */}
      <button type="submit" ><strong><p className="bg-blue-600 text-gray-800 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-400">EDIT TICKET</p>
</strong></button>
    </div>
    </form>
    {successMessage && <p>{successMessage}</p>}
    </div>	
  );
};

export default TicketForm;
