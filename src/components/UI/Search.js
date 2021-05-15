import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const inputChangeHandler = (queriedCharacterName) => {
    setText(queriedCharacterName);
    getQuery(queriedCharacterName);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Enter character name"
          value={text}
          onChange={(event) => {
            inputChangeHandler(event.target.value);
          }}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
