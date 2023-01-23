import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [films, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);

  const saveData = (films) => {
    const saveThis = films.map((e) => e);
    localStorage.setItem("peliculas", JSON.stringify(saveThis));
  };

  const getFavourites = () => {
    return localStorage.getItem("favoritas");
  };

  const getData = () => {
    return localStorage.getItem("peliculas");
  };

  useEffect(() => {
    const listMovies = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/popular?api_key=3f201358e5207ff08e14581f00223b79";

      const result = await axios.get(url).then((res) => {
        setLoading(!loading);
        return res;
      });
      if (!getData()) {
        setMovies(result.data.results);
        saveData(result.data.results);
      } else {
        setMovies(JSON.parse(getData()));
      }
    };
    listMovies();
  }, []);

  useEffect(() => {
    if (getFavourites()) {
      setFavourites(JSON.parse(getFavourites()));
      console.log("Mostrando favoritos", favourites);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ films, setFavourites, favourites, loading, getFavourites }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
