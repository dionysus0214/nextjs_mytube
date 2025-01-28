"use client";

import { useState } from "react";
import Filter from "@components/Filter";
import VideoResult from "@components/VideoResult";
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
  const [videos, setVideos] = useState<Video[]>([]);

  const handleFilterChange = async (filters: {
    query: string;
    weather: string;
    genre: string;
    duration: string;
  }) => {
    if (filters.query.trim() !== "") {
      const results = await searchVideos(filters.query);
      setVideos(results.items || []);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 sm:p-20">
      <Filter onFilterChange={handleFilterChange} />
      <VideoResult videos={videos} />
    </div>
  );
}
