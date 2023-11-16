import { useEffect, useState } from "react";
import Events from "../../components/Events";
import Navbar from "../../components/Navbar";
import useEvents from "../../hooks/useEvents";
import ReactPaginate from "react-paginate";
import styles from "./styles.module.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const { events, isLoading, error, fetchEvents, pages } = useEvents();
  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSearch = (term) => {
    setSearch(term);
    fetchEvents(`&keyword=${term}`);
  };
  const handlePageClick = ({ selected }) => {
    fetchEvents(`&keyword=${search}&page=${selected}`);
  };

  if (error) return <div>Ha ocurrido un error</div>;

  return (
    <>
      <Navbar setSearch={handleSearch} />
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <>
          <Events search={handleSearch} events={events} />
          <ReactPaginate
            className={styles.pagination}
            activeClassName={styles.active}
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pages}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </>
  );
};

export default Home;
