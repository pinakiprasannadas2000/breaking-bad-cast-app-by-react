import { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";
import { Header } from "./components/Header/Header";
import CharacterGrid from "./components/Characters/CharacterGrid";
import Search from "./components/UI/Search";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search
        getQuery={(queriedCharacterName) => {
          setQuery(queriedCharacterName);
        }}
      />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
