import { useContext } from "react";
import { AppContext } from "../Store/AppContext";

export const GetMovieById = (title) => {
  title = title.toLowerCase().trim();
  const { films } = useContext(AppContext);

  if (title.length === 0) return [];

  return films.filter((movie) =>
    movie.title.toLowerCase().trim().includes(title)
  );
};
