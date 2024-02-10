"use client"
import { formatDateTime } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'



const Card = ({ event }) => {
  
  const isEventCreator = true
  console.log(isEventCreator)

  return (
    <div className="group relative flex min-h-[280px] w-full max-w-[300px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link 
        href={`/ticket?event=${event.eventURL}&id=${event.ticket_id}`}
        style={{backgroundImage: `url(/assets/images/logo.svg)`}}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />
    
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
        </div>
      

      <div
        className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
      > 
       <div className="flex gap-2">
          <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
            {event.email}
          </span>
          <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
            {event.pre_total}€
          </p>
        </div>

          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">{event.name_ticket}</p>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.eventName}
        </p>
        </div>
        <div className="flex-between w-full">

          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">{event.ticket_type}</p>

        </div>
        <div className="flex-between w-full">
        <Link href={`/ticket?event=${event.eventURL}&id=${event.ticket_id}`}>
          <Button variant="default">Open Ticket</Button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Card