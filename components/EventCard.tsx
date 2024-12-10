import Link from "next/link";
import Button from "./Button";
import { Event } from "@/types/events";
import Image from "next/image";

interface Product extends Event {
  price?: {
    unit_amount: number;
    currency: string;
    id: string;
  };
}

interface EventCardProps {
  event: Product;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="w-full flex mt-7 border">
      <div className="w-[400px] h-[200px] relative">
        <Image
          src="/image_sample.png"
          alt="event image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col gap-3 py-3 px-6 w-full">
        {event.price ? (
          <dl className="mb-4">
            <dd className="text-xl">
              {(event.price.unit_amount / 100).toLocaleString()}{" "}
              {event.price.currency.toUpperCase()}
            </dd>
          </dl>
        ) : (
          <h4 className="text-xl">Free</h4>
        )}

        <h2>{event.title["en-title"]}</h2>

        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <div className="flex flex-col">
            <p>{event.date["en-date"]}</p>
            <p>{event.location["en-location"]}</p>
          </div>

          <Link href={`/events/${event.id}`}>
            <Button variant="square">View More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
