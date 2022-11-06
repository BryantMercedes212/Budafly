import { useState, useEffect } from "react";
import "./Search.css";

const Search = ({ setInput, input }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  console.log(input);
  // return
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="search for a strain"
          value={input}
        ></input>{" "}
      </form>
    </div>
  );
};

export default Search;
