"use client"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import Image from 'next/image';


const PartnersPage = () => {
  return (
    <>
               <section className="bg-primary-50 bg-dotted-pattern bg-contain pt-1 pb-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Welcome Potential Partner!</h1>
            <p className="p-regular-20 md:p-regular-24">Thank you for considering our platform to sell your event tickets. We are excited to collaborate with you.</p>
          </div>

          <Image 
            src="/assets/images/hero1.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>


      
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">

      <h2 className='font-bold  desc text-left'>Company Goals</h2>
      <p className='desc text-left'>
        Our company is dedicated to providing a seamless and efficient platform for event organizers to create and manage their event tickets. We aim to help event organizers increase their visibility,
        reach a wider audience, and make their events a great success.
      </p>

      <h2 className='font-bold  desc text-left'>Benefits of Selling Tickets with Us</h2>
      <ul>
        <li className='desc text-left'>Increased Visibility: Reach a larger audience through our platform.</li>
        <li className='desc text-left'>Easy Management: Effortlessly manage and track your ticket sales.</li>
        <li className='desc text-left'>Secure Transactions: Paymentlinks are hosted and managed by you, we dont receive any money from customers.</li>
        <li className='desc text-left'>Customization: Customize your event page to reflect your brand and style.</li>
        <li className='desc text-left'>Marketing Support: Leverage our marketing tools to promote your event.</li>
      </ul>

      <h2 className='font-bold  desc text-left'>Ready to Get Started?</h2>
      <p className='desc text-left'>
       Step 1: Sign in / Login to create a user!
      </p>
      <div className='primary-content py-4 my-2'>
      <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="/sign-in">
              Sign in / Login
              </Link>
        </Button>
      </div>
    
      <p className='desc text-left'>
       Step 2: Register your event with us today and start selling tickets!
      </p>
      <div className='primary-content py-4 my-2'>
      <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="/events/create">
              Register Your Event
              </Link>
      </Button>
      </div>
    </div>
    </div >
    </section>
    </>

  );
};

export default PartnersPage;

