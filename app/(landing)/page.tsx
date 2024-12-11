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
      <section
        className="w-screen h-screen flex flex-col justify-center items-center p-9 md:items-start md:px-56 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <main className="flex flex-col gap-5 md:gap-6 items-start sm:w-1/2">
          <h1 className="flex flex-col leading-tight text-black text-5xl font-bold">
            <span>Discover.</span>
            <span>Connect.</span>
            <span>Experience.</span>
          </h1>
          <p className="font-normal text-black">
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
      <section className="w-full px-9">
        <div className="flex flex-col items-center gap-2 pt-16">
          <h2 className="text-4xl font-bold font-plus-jakarta-sans tracking-tight">
            Discover Events
          </h2>
          <p className="text-gray-600">
            some text text is heres ome text text is here some text text is here
          </p>
        </div>
        {/* event cards */}
        <div className="flex flex-col gap-3 mt-7 justify-center items-center">
          {contents.map((event: Product) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="flex flex-col justify-center my-10">
          <Link href={`/`} className="text-center">
            <Button variant="yellow">View All</Button>
          </Link>
        </div>
      </section>

      {/* About us */}
      <section className="flex flex-col items-center justify-center gap-8 py-32 bg-linkWater">
        <h3 className="text-4xl font-bold px-9 font-plus-jakarta-sans tracking-tight">
          About{" "}
          <span className="text-blue-700 font-plus-jakarta-sans tracking-tight">
            Us
          </span>
        </h3>
        <p className="w-full md:w-1/2 text-center px-9">
          Our team consists of event planners, developers, and customer support
          specialists who believe in the power of live experiences. We’ve built
          this platform to help event organizers easily create, manage, and
          promote their events while providing attendees with a hassle-free
          ticketing experience. Our mission is to connect people with the events
          they love in the simplest way possible, ensuring a smooth and
          enjoyable journey from start to finish.
        </p>
        <Button variant="yellow">Contact Us</Button>
      </section>

      {/* stuff section */}
      <section className="w-full h-screen flex flex-col items-center px-9">
        <div className="flex flex-col gap-2 items-center py-16">
          <h3 className="text-4xl font-bold font-plus-jakarta-sans tracking-tight">
            Our Team
          </h3>
          <p className="text-center text-gray-600">
            some text text is heres ome text text is here some text text is here
          </p>
        </div>

        {/* stuff cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          {STUFFS.map((staff) => (
            <StaffCard staff={staff} key={staff.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
