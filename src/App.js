import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { createContext, useEffect, useState } from "react";
import { getMovieList } from "./functions/GetMovieList";
import Moviedetails from "./Pages/MovieDetails/Moviedetails";
import Movielist from "./Components/MovieList/Movielist";

export const globalData = createContext();

function App() {
  const [popularMoviesFromApi, setPopularMoviesFromApi] = useState([]);
  const [upcomingMoviesFromApi, setUpcomingMoviesFromApi] = useState([]);
  const [topRatedMoviesFromApi, setTopRatedMoviesFromApi] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    getMovieList(setPopularMoviesFromApi, "popular");
    getMovieList(setTopRatedMoviesFromApi, "top_rated");
    getMovieList(setUpcomingMoviesFromApi, "upcoming");
  }, []);

  return (
    <globalData.Provider
      value={{
        popularMoviesFromApi: popularMoviesFromApi,
        topRatedMoviesFromApi: topRatedMoviesFromApi,
        upcomingMoviesFromApi: upcomingMoviesFromApi,
        state, setState
      }}
    >
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Home />}></Route>
            <Route path="movie/:id" element={<Moviedetails />}></Route>
            <Route path="movies/:category" element={<Movielist />}></Route>
            <Route path="/*" element={<h1>Page Not Found</h1>}></Route>


         
        </Routes>
      </div>
    </globalData.Provider>
  );
}

export default App;
