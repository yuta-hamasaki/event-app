"use client";
import EventCard from "@/components/EventCard";
import { Event } from "@/types/events";
import React, { useState } from "react";
import EventSearch from "./EventSearch";

type EventListProps = {
  events: Event[];
};

const EventList = ({ events }: EventListProps) => {
  const [filteredData, setFilteredData] = useState<Event[]>(events);

  const handleSearch = (query: string) => {
    const filtered = events.filter((event) =>
      event.title["en-title"].toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filtered);
  };

  return (
    <>
      <EventSearch handleSearch={handleSearch} />
      <div className="w-full flex flex-col items-center">
        {filteredData.length === 0 ? (
          <div>No events found</div>
        ) : (
          filteredData.map((event) => {
            return <EventCard key={event.id} event={event} />;
          })
        )}
      </div>
    </>
  );
};

export default EventList;
