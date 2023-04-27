import React, { useState } from "react";
import Axios from "axios";

const SearchAnime = () => {
  const [searchText, setSearchText] = useState("");
  const [films, setFilms] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchText) {
      alert("Please enter anime or manga title");
      return;
    }
    Axios.get(`${process.env.REACT_APP_BASE_URL}/anime/search?q=${searchText}`).then((response) => {
        console.log(response.data);
        setFilms(response.data.Search);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          placeholder={"Search anime or manga"}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button>Search</button>
      </form>

      {films.map((data) => (
        <div>
          <img src={data.animeImage["Poster"]} alt={data.animeTitle["Title"]} width={100} />
          <p>{data.animeTitle["Title"]}</p>
          <p>{data.type["Type"]}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchAnime