import React from "react";
import { getEvents } from "@/lib/client";
import EventCard from "@/components/EventCard";
import EventSearchBar from "./components/EventSearchBar";

const page = async () => {
  const events = await getEvents();

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-4xl font-bold font-plus-jakarta-sans tracking-tight">
        Events
      </h1>
      <div>
        <EventSearchBar />
      </div>
      <div className="w-full flex flex-col items-center">
        {events.map((event) => {
          return <EventCard key={event.id} event={event} />;
        })}
      </div>
    </section>
  );
};

export default page;
