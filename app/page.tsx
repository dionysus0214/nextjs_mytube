"use client";

import { useState } from "react";
import Image from "next/image";

import { searchVideos } from "@lib/youtubeApi";

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

export default function MyTube() {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState<Video[]>([]);

  const handleSearch = async () => {
    if (query.trim() !== "") {
      const results = await searchVideos(query);
      setVideos(results.items || []);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 sm:p-20">
      {/* Search Input */}
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 w-64"
          placeholder="Search for music"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Video Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id.videoId} className="flex flex-col items-center">
            <Image
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              width={320}
              height={180}
              className="rounded-lg shadow-md"
            />
            <p className="text-center mt-2">{video.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
