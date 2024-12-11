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
  image?: string;
}

interface EventCardProps {
  event: Product;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-4 border w-full sm:w-2/3 md:w-1/2">
      {/* Image Section */}
      <div className="relative w-full sm:w-1/3 md:w-1/3 h-48 md:h-44 ">
        <Image
          src={event.image || "/image_sample.png"}
          alt="event image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col w-full sm:w-2/3 md:w-2/3 p-3 justify-between">
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
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{event.title["en-title"]}</h2>
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-3">
            <div className="flex flex-col">
              <p>{event.date["en-date"]}</p>
              <p>{event.location["en-location"]}</p>
            </div>
            <div className="flex justify-end sm:ml-auto">
              <Link href={`/events/${event.id}`}>
                <Button variant="square" className="sm:w-auto w-[200px] lg:w-[150px]">
                  View More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
