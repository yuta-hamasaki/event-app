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
      className="border py-2 px-4 rounded-3xl w-1/3"
    >
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="border-none outline-none p-0 m-0 bg-transparent text-black"
      />
    </form>
  );
};

export default EventSearch;
