"use client";
import { useState } from "react";

const Tickets = () => {
  const [isUpcomingTickets, setIsUpcomingTickets] = useState<boolean>(true);

  const button = (isActive: boolean) =>
    `font-semibold font-plus-jakarta-sans transition-all ease-out duration-300 ${
      isActive ? "text-black" : "text-gray-400"
    }`;

  return (
    <div className="flex gap-5 w-full border-b-0.5 border-gray-400 pb-3">
      <button
        className={button(isUpcomingTickets)}
        onClick={() => setIsUpcomingTickets(true)}
      >
        Upcoming
      </button>
      <button
        className={button(!isUpcomingTickets)}
        onClick={() => setIsUpcomingTickets(false)}
      >
        Past Ticket
      </button>
    </div>
  );
};

export default Tickets;
