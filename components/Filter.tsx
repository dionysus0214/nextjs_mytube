"use client";

import { useState } from "react";

interface FilterProps {
  onFilterChange: (filters: {
    query: string;
    weather: string;
    genre: string;
    duration: string;
  }) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");
  const [genre, setGenre] = useState("");
  const [duration, setDuration] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ query, weather, genre, duration });
  };

  return (
    <div className="flex flex-col gap-4 mb-8">
      <input
        type="text"
        className="border border-gray-300 rounded-md px-4 py-2"
        placeholder="Search for music"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        className="border border-gray-300 rounded-md px-4 py-2"
        value={weather}
        onChange={(e) => setWeather(e.target.value)}
      >
        <option value="">Select Weather</option>
        <option value="sunny">Sunny</option>
        <option value="rainy">Rainy</option>
        <option value="cloudy">Cloudy</option>
      </select>
      <select
        className="border border-gray-300 rounded-md px-4 py-2"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="">Select Genre</option>
        <option value="pop">Pop</option>
        <option value="rock">Rock</option>
        <option value="jazz">Jazz</option>
      </select>
      <select
        className="border border-gray-300 rounded-md px-4 py-2"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      >
        <option value="">Select Duration</option>
        <option value="short">Short</option>
        <option value="medium">Medium</option>
        <option value="long">Long</option>
      </select>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={handleFilterChange}
      >
        Apply Filters
      </button>
    </div>
  );
}
