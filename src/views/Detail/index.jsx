import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=TI1kdhWKrgmAmyOVD0v1jtJ4SZpii47c`
        );
        setData(response);
        console.log(response);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchEventData();
  }, []);
  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Ha ocurrido un error</div>;
  return <div></div>;
};

export default Detail;
