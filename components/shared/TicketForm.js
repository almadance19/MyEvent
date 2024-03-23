import { useState } from 'react';
import { useRouter } from "next/navigation"

const TicketForm = ({eventURL,eventName,eventOrganiserId}) => {

  const today = new Date();
  const uniqueID =  'manual_ticket_' + Date.now();
  const uniqueID2 =  'ticket_' + Date.now();
    
  const [formData, setFormData] = useState({
    creator: eventOrganiserId,
    eventURL: eventURL,
    eventName: eventName,
    eventOrganiserId: eventOrganiserId,
    eventId: eventURL,
    created_at: today,
    ticket_id: uniqueID,
    ticket_nr: uniqueID2,
    email: '',
    name_payment: '',
    pre_total: '',
    total: '',
    pre_mwst: '',
    mwst: '',
    subtotal: '',
    amount_discount: '',
    name_ticket: '',
    paystatus: 'manual payment',
    ticket_type: '',
    address: '',
    phone: '',
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
      const response = await fetch('/api/ticket/new_edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Ticket created successfully!');
        router.push(`/ticket?event=${formData.eventURL}&id=${formData.ticket_id}`)
        setSuccessMessage('Ticket created successfully!');
        
      } else {
        console.error('Failed to create ticket.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-white shadow sm:rounded-lg py-4 m-2">
    <h2 className="text-2xl font-semibold text-center">{eventName}</h2>
    <p className="text-center text-gray-500">Fill in the form to create a ticket</p>
    
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
            className="w-full mt-1"
          />
      </label>
      </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <div className="col-span-full">
       <label className="block"><strong>
      Ticket Nr:
        </strong><input
          type="text"
          name="ticket_nr"
          value={formData.ticket_nr}
          onChange={handleChange}
          readOnly={true}
            className="w-full mt-1"
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
            className="w-full mt-1"
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
            className="w-full mt-1"
          />
      </label>
      </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <div className="col-span-full">
       <label className="block"><strong>
      Payment Amount:
        </strong><input
          type="number"
          name="total"
          value={formData.total}
          onChange={handleChange}
            className="w-full mt-1"
          />
      </label>
      </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <div className="col-span-full">
       <label className="block"><strong>
      Currency:
        </strong><input
          type="text"
          name="currency"
          value={formData.currency}
          onChange={handleChange}
            className="w-full mt-1"
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
            className="w-full mt-1"
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
            className="w-full mt-1"
          />
      </label>
      </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <div className="col-span-full">
       <label className="block"><strong>
      Phone Nr:
        </strong><input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
            className="w-full mt-1"
          />
      </label>
      </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <div className="col-span-full">
       <label className="block"><strong>
       Address:
        </strong><input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
            className="w-full mt-1"
          />
      </label>
      </div>
        </div>
    <br />
      {/* Add other input fields for other form fields */}
      <button type="submit" ><strong>CREATE TICKET</strong></button>
    </div>
    </form>
    {successMessage && <p>{successMessage}</p>}
    </div>	
  );
};

export default TicketForm;
