import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Search from "./components/Search";

function App() {
  const [monsters, setMonster] = useState([]);
  const [searchField, setSearchField] = useState("");

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

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  const handleSearch = async (e) => {
    const searchValue = e.target.value.toLocaleLowerCase();
    console.log(searchValue);
    return setSearchField(searchValue);
  };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((users) => setMonster(users));
  // }, []);
  return (
    <div className="App">
      {/* {filteredMonsters.map((monster, index) => {
        return (
          <div key={index}>
            <h1>{monster.name}</h1>
            <p>{monster.email}</p>
          </div>
        );
      })} */}
      <Search onChangeHandler={handleSearch} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
