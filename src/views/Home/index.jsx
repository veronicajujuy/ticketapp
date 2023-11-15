import { useEffect, useState } from "react";
import Events from "../../components/Events";
import Navbar from "../../components/Navbar";
import useEvents from "../../hooks/useEvents";

const Home = () => {
  const [search, setSearch] = useState("");
  const { events, isLoading, error, fetchEvents } = useEvents();
  useEffect(() => {
    fetchEvents();
  }, []);
  const eventsFiltered = search
    ? events.filter((item) => item.name.toLowerCase().includes(search))
    : events;
  if (error) return <div>Ha ocurrido un error</div>;

  return (
    <>
      <Navbar setSearch={setSearch} />
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <Events search={search} events={eventsFiltered} />
      )}
    </>
  );
};

export default Home;
