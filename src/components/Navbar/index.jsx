import { useState } from "react";

const Navbar = ({ setSearch }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      setSearch(value);
    }
  };
  return (
    <div>
      <p>Busqueda</p>
      <input
        placeholder="Busca tu evento favorito"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
      />
    </div>
  );
};

export default Navbar;
