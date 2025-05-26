"use-client";

import axios from "axios";

const useUrlShortner =  () => {
  const createSortUrl = async ({ url }: { url: string }) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/url`, { url });
    return response;
  };
  return {
    createSortUrl,
  };
};

export default useUrlShortner;
