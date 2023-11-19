import { useState } from "react";
import axios from "axios";
const useEvents = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async (term) => {
    try {
      const response = await axios.get(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${
          import.meta.env.VITE_API_KEY
        }&countryCode=MX${term ? term : ""}`
      );
      setData(response);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  return {
    events: data.data?._embedded?.events,
    isLoading,
    error,
    fetchEvents,
    pages: data.data?.page?.totalPages,
  };
};

export default useEvents;
