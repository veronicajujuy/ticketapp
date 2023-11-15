import { useEffect, useState } from "react";
import axios from "axios";
const useEvents = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "https://app.ticketmaster.com/discovery/v2/events.json?apikey=TI1kdhWKrgmAmyOVD0v1jtJ4SZpii47c&countryCode=MX"
      );
      setData(response.data?._embedded?.events);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return { events: data, isLoading, error, fetchEvents };
};

export default useEvents;
