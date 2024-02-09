"use client"

import React from 'react';
//import { CldImage } from 'next-cloudinary';
import QRCode from 'qrcode.react';
import { useEffect } from "react";
import PrintButton from './PrintPage';
import Image from 'next/image';
import { formatDateTime } from '@/lib/utils';
import { Button } from "@/components/ui/button"

/// GET STRIPE ID FROM METADATA
/// GET STRIPE ID FROM METADATA
/// GET STRIPE ID FROM METADATA

export default function FormDataDisplay({data}) {

  console.log(data);
  // Format the date string
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Generate the PDF when component mounts
  useEffect(() => {
    // Check if running in the browser environment
    if (typeof window !== 'undefined') {
    }}, []);

    const  handleSendEmail = async () => {

      try{
        if (!data || !data.CheckoutData) {
          console.error('Invalid data:', data);
          return;
        }
      //CREATE GET REQUEST TO GOOGLE SHEET API
      // Add EMAIL, LINK, NAME, EVENTNAME and send it as Parameters
      //let google_string= `${URL}?eventURL=${eventURL}&ticket_id=${ticket_id}&email=${email}`;
          const URL = "https://script.google.com/macros/s/AKfycbxSQgm_jx1vGCTeSeV2SxN46V-3skyWJ5HFock3MehY_qR45EA0si5ukUBwug-k4JYvpQ/exec";

          const eventURL = data.CheckoutData.eventURL;
          const eventName = data.CheckoutData.eventName;
          const ticket_id = data.CheckoutData.ticket_id;
          const ticket_nr = data.CheckoutData.ticket_nr;
          const email = data.CheckoutData.email;
          const name_payment = data.CheckoutData.name_payment;
          const name_ticket = data.CheckoutData.name_ticket;
          const ticket_type = data.CheckoutData.ticket_type;
          const pre_total = data.CheckoutData.pre_total;
          const organizer_email = data.EventExists.eventEmail;


          let google_string= `${URL}?eventURL=${eventURL}&eventName=${eventName}&ticket_id=${ticket_id}&ticket_nr=${ticket_nr}&email=${email}&organizer_email=${organizer_email}&name_ticket=${name_ticket}&ticket_type=${ticket_type}&pre_total=${pre_total}`;
          
            console.log('Sending email...',google_string);
            const response = await fetch(google_string);
            const responseData = await response.json();
      console.log('Email sent.', responseData);
      if (responseData.status="success"){
        alert('Email sent sucessfully to: '+email)
      }
      if (!responseData.ok) {
        throw new Error(`Failed to send Email. Status: ${responseData}`);
      } else {
        alert('Ticket sent to your Email: ' + email);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleEmailClick = async () => {
    await handleSendEmail();
  };

 

  return (
    <>

  <div id="printableContent" className="container border m-3 mx-auto p-4">
  <form className="bg-white border border-gray-300 p-4 rounded-md m-4">
  <div className='content-justify-center items-center flex flex-col gap-5'>
  {data.EventExists.imageUrl !== undefined ? (
    <Image
        src={data.EventExists.imageUrl}
        width="300"
        height="300"
        crop="fill"
        gravity="auto"
        radius="10"
        effect="sepia"
        className="img-fluid"
        alt="My Event Ticket"
      /> 
  ): (
    <Image
          src="/assets/images/hero.png"
          alt='logo'
          width={300}
          height={300}
          className='object-contain'
        />
  ) }
  </div>
  <div className='flex flex-col gap-5 md:flex-row m-4'>
  <h1 className="text-4xl font-bold mb-4 ml-4">{data.EventExists.eventName}</h1>
  </div>
  <div className='p-medium-16 lg:p-regular-20 flex flex-wrap items-center m-4'>
    <p className="mb-4 ml-4"><strong>Address: </strong>{data.EventExists.eventAdress}</p>
  </div>
  <div className='p-medium-16 lg:p-regular-20 flex flex-wrap items-center m-4'>
  <p className=" mb-4 ml-4"><strong>Website: </strong>{data.EventExists.eventWebsite}</p>
  </div>
  <div className='p-medium-16 lg:p-regular-20 flex flex-wrap items-center m-4'>
  <p className=" mb-4 ml-4"><strong>Phone: </strong>{data.EventExists.eventWebsite}</p>
  </div>
  <div className='p-medium-16 lg:p-regular-20 flex flex-wrap items-center m-4'>
  <p className=" mb-4 ml-4"><strong>Details: </strong>{data.EventExists.eventDescription}</p>
  <br />
  </div>
  <div className='flex gap-2 md:gap-3 m-4'>
              <Image src="/assets/icons/calendar.svg" alt="calendar" width={32} height={32} />
              <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                <p>
                  {formatDateTime(data.EventExists.startDateTime).dateOnly} - {' '}
                  {formatDateTime(data.EventExists.startDateTime).timeOnly}
                </p>
                <p>
                  {"/ "+formatDateTime(data.EventExists.endDateTime).dateOnly} -  {' '}
                  {formatDateTime(data.EventExists.endDateTime).timeOnly}
                </p> 
                                {/* <p>
                  {data.CheckoutData.startDateTime}
                </p>
                <p>
                  {' '}
                  - {data.CheckoutData.endDateTime}
                </p> */}
              </div>
  </div>
  <div>
  </div>
  <div className='content-justify-center items-center m-4 gap-5'>
  <div className="mb-4 ml-4 ">
  <label className="block text-gray-600 mb-2 font-bold">Payment Date</label>
  <p className="text-gray-800">{formatDateTime(data.CheckoutData.created_at).dateOnly} - {' '}
                  {formatDateTime(data.CheckoutData.created_at).timeOnly}</p>
</div>
<div className="mb-4 ml-4">
  <label className="block text-gray-600 mb-2 font-bold">Email ID</label>
  <p className="text-gray-800">{data.CheckoutData.email}</p>
</div>
<div className="mb-4 ml-4">
  <label className="block text-gray-600 mb-2 font-bold">Ticket Name</label>
  <p className="text-gray-800">{data.CheckoutData.name_ticket}</p>
</div>
<div className="mb-4 ml-4">
  <label className="block text-gray-600 mb-2 font-bold">Payer Name</label>
  <p className="text-gray-800">{data.CheckoutData.name_payment}</p>
</div>
<div className="mb-4 ml-4">
  <label className="block text-gray-600 mb-2 font-bold">Ticket Type</label>
  <p className="text-gray-800">{data.CheckoutData.ticket_type}</p>
</div>
<div className="mb-4 ml-4">
  <label className="block text-gray-600 mb-2 font-bold">Payment Amount</label>
  <p className="text-gray-800">{data.CheckoutData.pre_total} EUR</p>
</div>
<div className="mb-4 ml-4">
  <label className="block text-gray-600 mb-2 font-bold">Ticket Nr</label>
  <p className="text-gray-800">{data.CheckoutData.ticket_nr}</p>
</div>
</div>
          <br />
          <div className="content-justify-center items-center flex flex-col gap-5 mb-4">
    <QRCode value={`https://firstnextjs-wine.vercel.app/ticket?event=${data.CheckoutData.eventURL}&id=${data.CheckoutData.ticket_id}&type=org`} size={200} />
  </div>
  </form>
  </div>  
  <div className='mb-4'>
      <Button 
            variant=""
            onClick={handleEmailClick}>Send Ticket to Email</Button>
      {/* Your other page content */}

  </div>
  <div className='mb-4'>
  <PrintButton data={data} />
  </div>
    </>
  );
};

