import { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3333/products/search/${input}`
      );
      console.log(res.data);
      setItem(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    fetchProducts();
  };
  console.log(input);

  return (
    <div className="search">
      <form onSubmit={HandleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="search for a strain"
          value={input}
        ></input>{" "}
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
