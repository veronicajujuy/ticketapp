import { useEffect, useState } from "react";
import eventsInfo from "../data/events.json";
const useEvents = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setData(eventsInfo._embedded.events);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  }, []);

  return { events: data, isLoading, error };
};

export default useEvents;
