import React from "react";
import { getEvents } from "@/lib/client";
import EventList from "./components/EventList";

const page = async () => {
  const events = await getEvents();

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-4xl font-bold font-plus-jakarta-sans tracking-tight">
        Events
      </h1>
      <EventList events={events} />
    </section>
  );
};

export default page;
