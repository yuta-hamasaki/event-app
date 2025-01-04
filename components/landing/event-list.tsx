'use client';
import Link from 'next/link';
import Button from "@/components/Button";
import EventCard from '@/components/EventCard';
import { Event } from '@/types/events';


interface Product extends Event {
  price?: {
    unit_amount: number;
    currency: string;
    id: string;
  };
}
interface EventsListProps {
  initialEvents: Event[];
}

export function EventsList({ initialEvents }: EventsListProps) {
  return (
    <>
      <div className="flex flex-col gap-3 mt-7 justify-center items-center">
        {initialEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <div className="flex flex-col justify-center my-10">
        <Link href={`/events`} className="text-center">
          <Button variant="yellow">View All</Button>
        </Link>
      </div>
    </>
  );
}
