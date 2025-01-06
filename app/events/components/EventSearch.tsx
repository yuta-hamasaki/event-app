"use client";
import React, { useState } from "react";

type EventSearchProps = {
  handleSearch: (query: string) => void;
};

const EventSearch = ({ handleSearch }: EventSearchProps) => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInput(query);
    handleSearch(query);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(input);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border py-2 px-4 rounded-3xl flex items-center gap-2 w-1/2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-5 h-5 text-gray-500"
      >
        <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search events"
        className="border-none outline-none p-0 m-0 w-full bg-transparent text-black text-sm"
      />
    </form>
  );
};

export default EventSearch;
