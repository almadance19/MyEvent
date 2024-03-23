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
            <h1 className="h1-bold">Welcome Partner!</h1>
            <p className="p-regular-20 md:p-regular-24">We are excited to collaborate with you.</p>
          </div>

          <Image 
            src="/assets/images/hero2.svg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>


      
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">

      <h2 className='font-bold  desc text-left'>How to sell your Tickets</h2>
      <p className='desc text-left'>
        Step 1: Create a Stripe Account and get a Stripe "read-only" API key to register your Events. See the link below for precise instructions.
      </p>
      <div className='primary-content py-4 my-2'>
      <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="https://docs.google.com/presentation/d/e/2PACX-1vSOOeIaW4Rpn6SUEPMcVzVIIzzVMbshssayxHU0dydm7h6R82eAhLkvdQuwSj1uf2AyodRaGRZ0hZ0p/pub?start=false&loop=true&delayms=10000">
              How to Create a Stripe Account, API Key, Ticketlinks
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
      <p className='desc text-left'>
       Step 3: Contact us to activate your event and create your tickets with us! 
      </p>
      <div className='primary-content py-4 my-2'>
      <a className='font-bold  desc text-left' href="tel:+491639641730">+49 163 9641730</a>
      </div>
      <div className='primary-content py-4 my-2'>
      <a className='font-bold  desc text-left' href="mailto:info@alma-dance.de">info@alma-dance.de</a>
      </div>

    </div>
    </div >
    </section>
    </>

  );
};

export default PartnersPage;

