import { useState, useEffect } from "react";

const SearchBar = () => {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // return
  return (
    <div className="search">
      <form>
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
