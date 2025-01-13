'use client';
import Button from "@/components/Button";
import EventCard from '@/components/EventCard';
import { Event } from '@/types/events';
import Link from 'next/link';

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
      <div className="flex flex-col gap-5 mt-7">
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
