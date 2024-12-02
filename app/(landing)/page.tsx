import { STUFFS } from '@/lib/constats.index';
import Link from 'next/link';
import Button from "@/components/Button";
import {getEvents} from "@/lib/client"
import { Event } from '@/types/events';


interface Product extends Event {
  price?: {
    unit_amount: number;
    currency: string;
    id: string;
  };
}

export default async function page() {
  const contents = await getEvents();
  return (
    <div className="flex flex-col items-center">
      {/* hero */}
      <section className="w-full h-screen flex flex-col justify-center px-20 lg:px-44">
        <main className="flex flex-col gap-5 md:gap-6 items-start sm:w-1/2">
          <h1 className="flex flex-col leading-tight text-black text-5xl font-bold">
            <span>Discover.</span>
            <span>Connect.</span>
            <span>Experience.</span>
          </h1>
          <p className="font-normal text-gray-600">
            some text is here some text is here some text is here some text is
            here some text is here some text text is here some text text is here
            some text text is here
          </p>
          <div className="w-full flex gap-3 flex-col items-center sm:flex-row">
            <Button>Find Events</Button>
            <Button variant="yellow">Login</Button>
          </div>
        </main>
      </section>
      {/* Event section */}
      <section>
        <div>
          <h2>Discover Events</h2>
          <p>some text  text is heres ome text  text is here some text  text is here</p>
        </div>

        {/* event cards */}
        <div>
          {contents.map((event:Product)=>(
            <div key={event.id}>
              <h1>{event.title['en-title']}</h1>
              <p>{event.location['en-location']}</p>
              <p>{event.date['en-date']}</p>
              {event.price? (
              <dl className="mb-4">
                <dd className="text-xl">
                  {(event.price.unit_amount / 100).toLocaleString()}
                  {event.price.currency.toUpperCase()}
                </dd>
              </dl>
              ):<h4 className= "text-xl">Free</h4>}
              <Link href={`/events/${event.id}`}>
                <Button>View More</Button>              
              </Link>
            </div>
          ))}
        </div>

      </section>

      {/* About us */}
      <section>
        <h3>About Us</h3>
        <p>
        {/* Our team consists of event planners, developers, and customer support specialists who believe in the power of live experiences. 
        We’ve built this platform to help event organizers easily create, manage, and promote their events while providing attendees with a hassle-free ticketing experience. Our mission is to connect people with the events they love in the simplest way possible, ensuring a smooth and enjoyable journey from start to finish. */}
        </p>
        <Button
        variant='yellow'
        >Contact Us</Button>
        <Button
          variant='square'
          className='m-2'
          >test</Button>
      </section>

      {/* stuff section */}
      <section>
        <h3>Our Team</h3>
        <p>some text  text is heres ome text  text is here some text  text is here</p>

        {/* stuff cards */}
        {/* <div >
          {STUFFS.map((item)=>(
            <div key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.role}</p>
            </div>
          ))}
        </div> */}
      </section>

    </div>
  );
}
