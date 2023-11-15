/* eslint-disable react/prop-types */
import EventItem from "./EventItem";
import { useNavigate } from "react-router-dom";

const Events = ({ events }) => {
  const navigate = useNavigate();
  const handleEventClick = (id) => {
    navigate(`detail/${id}`);
  };

  return (
    <div>
      Eventos
      {events?.map((item) => (
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
