import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import Search from "./components/SearchBox/SearchBox";

function App() {
  const [monsters, setMonster] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const handleSearch = async (e) => {
    const searchValue = e.target.value.toLocaleLowerCase();
    console.log(searchValue);
    return setSearchField(searchValue);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const results = await response.json();
      setMonster(results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <Search handleSearch={handleSearch} placeholder="Search Monsters" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
