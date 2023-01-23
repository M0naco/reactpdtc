const saveFavourites = (films, favourites, setFavourites) => {
  const saveThis = [...favourites];
  saveThis.push(films);

  localStorage.setItem("favoritas", JSON.stringify(saveThis));
  setFavourites([...favourites, films]);
};

export const eliminateMovieFromStorage = (films, favourites, setFavourites) => {
  const actualFavourites = favourites;
  console.log(actualFavourites);

  const saveThis = actualFavourites.filter((fav) => {
    return fav.id != films.id;
  });

  localStorage.setItem("favoritas", JSON.stringify(saveThis));
  setFavourites(saveThis);
};

const addFavourite = (favourites, newMovie, setFavourites, isFavourite) => {
  const favourite = favourites.find((movie) => movie.id === newMovie.id);
  if (favourite) {
    console.log(favourites);
    eliminateMovieFromStorage(newMovie, favourites, setFavourites);
  } else {
    saveFavourites(newMovie, favourites, setFavourites);
    return !isFavourite;
  }
};

export default addFavourite;
