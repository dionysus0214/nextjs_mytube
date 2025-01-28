"use client";

import Image from "next/image";

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

interface VideoResultProps {
  videos: Video[];
}

export default function VideoResult({ videos }: VideoResultProps) {
  return (
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
  );
}
