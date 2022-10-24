import { useState, useEffect } from "react";

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
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
