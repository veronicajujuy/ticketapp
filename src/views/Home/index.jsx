import { useState } from "react";
import Events from "../../components/Events";
import Navbar from "../../components/Navbar";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar setSearch={setSearch} />
      <Events search={search} />
    </>
  );
};

export default Home;
