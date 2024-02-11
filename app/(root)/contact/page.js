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
            <h1 className="h1-bold">Welcome to My Dance Event!</h1>
            <p className="p-regular-20 md:p-regular-24">We are not sellers or organizers and we don't receive any money from event attendees. We only provide a platform for Ticket creation and Event promotion.</p>
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

      <h2 className='font-bold  desc text-left'>Company Goals</h2>
      <p className='desc text-left'>
        Our company is dedicated to providing a seamless and efficient platform for event organizers to create and manage their event tickets. We aim to help event organizers increase their visibility,
        reach a wider audience, and make their events a great success.
      </p>
      <h2 className='font-bold  desc text-left'>Ready to Get Started?</h2>
      <p className='desc text-left'>
        Contact us to activate your event and create your tickets with us! 
      </p>
      <p className='desc text-left'>
        Eduardo Millan
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

