import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=TI1kdhWKrgmAmyOVD0v1jtJ4SZpii47c`
        );
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchEventData();
  }, []);
  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Ha ocurrido un error {error.message}</div>;
  return (
    <div>
      <img src={data?.images[0].url} alt="" />
      <h1>{data?.name}</h1>
      <p>{data?.info}</p>
      <p>
        {format(new Date(data?.dates?.start?.dateTime), "d MMMM uuuu H:mm", {
          locale: es,
        })}{" "}
        hs.
      </p>
    </div>
  );
};

export default Detail;
