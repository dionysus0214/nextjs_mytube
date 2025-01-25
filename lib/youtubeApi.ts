const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const searchVideos = async (query: string) => {
  if (!API_KEY) {
    throw new Error("Missing YouTube API key");
  }
  const response = await fetch(
    `${BASE_URL}/search?part=snippet&q=${query}&type=video&key=${API_KEY}&maxResults=10`
  );
  const data = await response.json();
  return data;
};
