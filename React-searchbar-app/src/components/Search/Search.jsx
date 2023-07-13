import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import axios from "axios";
import "./Search.css";
import { useEffect, useState } from "react";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=a4844028199f745212a37cd0a1d65311";
//"https://api.themoviedb.org/3/discover/movie?api_key=a4844028199f745212a37cd0a1d65311&language=en-US&page=1&with_genres=99";
// "https://jsonplaceholder.typicode.com/todos";
//"http://www.omdbapi.com/?i=tt3896198&apikey=8e6cbaae";
// "https://api.themoviedb.org/3/movie/popular?api_key=a4844028199f745212a37cd0a1d65311/language=en-US&page=1";

export const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const [searchList, setSearchList] = useState([]);
  const [filterListValue, setFilterListValue] = useState([]);

  const handleChange = (event) => {
    setSearchInputValue(event.target.value);

    const newSearchValue = searchList.filter((data) => {
      return data.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setFilterListValue(newSearchValue);
  };

  const clearSearch = () => {
    setSearchInputValue("");
    setFilterListValue([]);
  };

  const fetchData = async () => {
    const response = await axios(API_URL, {
      params: {
        query: "movie,"
      }
    });
    setSearchList(response.data.results);
    setFilterListValue(response.data.results);
    console.log(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="search-container">
      <div className="heading-section">
        <img
          src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
          alt="
          "
        />
        <h1>Looking for a movie?</h1>
      </div>
      <SearchInput
        searchInputValue={searchInputValue}
        handleChange={handleChange}
        clearSearch={clearSearch}
      />
      <SearchList searchList={filterListValue} />
    </div>
  );
};
