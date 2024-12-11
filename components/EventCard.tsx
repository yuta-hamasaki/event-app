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
    <div className="flex flex-col max-w-[350px] sm:max-w-none sm:flex-row mt-4 border w-full md:w-2/3 lg:w-1/2 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg ">
      {/* Image Section */}
      <div className="relative w-full sm:w-1/3 md:w-1/3 h-48 md:h-44 overflow-hidden rounded-t-lg sm:rounded-l-lg sm:rounded-t-none shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <Image
          src={event.image || "/image_sample.png"}
          alt="event image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col w-full gap-2 sm:w-2/3 md:w-2/3 p-5 md:py-4 px-3 ">
        <div className="flex flex-col justify-between gap-5">
          {event.price ? (
            <dl className="w-[80px] bg-linkWater rounded-2xl">
              <dd className="text-sm  text-gray-500 text-center font-semibold">
                {(event.price.unit_amount / 100).toLocaleString()}{" "}
                {event.price.currency.toUpperCase()}
              </dd>
            </dl>
          ) : (
            <h4 className="text-sm w-[80px] bg-linkWater text-center rounded-2xl text-gray-500 font-semibold">
              Free
            </h4>
          )}
          <div className="flex flex-col gap-2">
            <h2 className=" text-lg md:text-base lg:text-lg font-semibold">
              {event.title["en-title"]}
            </h2>
            <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-3">
              <div className="flex flex-col">
                <p className="text-sm">{event.date["en-date"]}</p>
                <p className="text-sm">{event.location["en-location"]}</p>
              </div>
              <div className="flex justify-end sm:ml-auto">
                <Link href={`/events/${event.id}`}>
                  <Button
                    variant="square"
                    className="sm:w-auto w-[150px] lg:w-[150px]"
                  >
                    View More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
