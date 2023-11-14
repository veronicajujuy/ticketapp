import EventItem from "./EventItem";
import useEvents from "../../hooks/useEvents";
import { useNavigate } from "react-router-dom";

const Events = ({ search }) => {
  const navigate = useNavigate();
  const { events, isLoading, error } = useEvents();
  const handleEventClick = (id) => {
    navigate(`detail/${id}`);
  };
  const eventsFiltered = search
    ? events.filter((item) => item.name.toLowerCase().includes(search))
    : events;
  if (error) return <div>Ha ocurrido un error</div>;
  if (isLoading) return <div>Cargando...</div>;

  return (
    <div>
      Eventos
      {eventsFiltered?.map((item) => (
        <EventItem
          key={item.id}
          info={item.info}
          image={item.images[0].url}
          name={item.name}
          id={item.id}
          onClick={handleEventClick}
        />
      ))}
    </div>
  );
};

export default Events;
