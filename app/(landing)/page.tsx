import Button from '@/components/Button';
import { AboutUs } from '@/components/landing/about-us';
import { EventsList } from '@/components/landing/event-list';
import { Hero } from '@/components/landing/hero';
import { getEvents } from "@/lib/client";
import { Event } from '@/types/events';
import Link from "next/link";

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
    <>
      <div className="flex flex-col items-center">
        {/* hero */}
        <Hero />
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
          <div className="mx-auto md:max-w-[720px] max-w-none w-full">
            <EventsList initialEvents={contents} />
            <Link href={`/events`} className="flex justify-center pb-20">
              <Button variant="yellow">View All</Button>
            </Link>
          </div>
        </section>

        {/* About us */}
        <AboutUs />
      </div>
    </>
  );

}
