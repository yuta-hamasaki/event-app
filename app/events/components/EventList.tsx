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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const handleSearch = (query: string) => {
    const filtered = events.filter((event) =>
      event.title["en-title"].toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const getPageButtons = () => {
    let startPage = currentPage - 1;
    let endPage = currentPage + 1;

    if (totalPages <= 3) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage === 1) {
        startPage = 1;
        endPage = 3;
      } else if (currentPage === totalPages) {
        startPage = totalPages - 2;
        endPage = totalPages;
      }
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  return (
    <>
      <EventSearch handleSearch={handleSearch} />
      <div className="w-full flex flex-col items-center">
        {currentItems.length === 0 ? (
          <div className="text-lg">No events found</div>
        ) : (
          currentItems.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        )}
      </div>

      {/* pagination */}
      <div className="flex justify-center items-center mt-4 gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width="20"
          height="20"
          className={`cursor-pointer ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => {
            if (currentPage > 1) {
              paginate(currentPage - 1);
            }
          }}
        >
          <path d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <div className="flex gap-2">
          {getPageButtons().map((page) => (
            <button
              key={page}
              onClick={() => paginate(page)}
              className={`flex justify-center items-center gap-4 py-1 px-4 w-6 rounded-md ${
                currentPage === page ? "bg-gray-200" : ""
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width="20"
          height="20"
          className={`cursor-pointer ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => {
            if (currentPage < totalPages) {
              paginate(currentPage + 1);
            }
          }}
        >
          <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </>
  );
};

export default EventList;
