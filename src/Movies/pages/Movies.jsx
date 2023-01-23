import { useContext } from "react";
import FilmList from "../../Components/FilmList";
import { AppContext } from "../../Store/AppContext";
import moviesApp from "../../img/movies-app.jpg";
import imageninicio from "../../img/imageninicio.png";
function Movies() {
  const { films, loading } = useContext(AppContext);
  const screenLoading = JSON.stringify(loading);

  const styles = {
    height: "55vh",
    width: "100%",
  };

  return (
    <>
      <img
        id="imagen-inicio"
        className="card img-top animate__animated animate__fadeIn"
        src={imageninicio}
        style={styles}
        alt=""
      />

      <img
        id="moviesapp"
        className="card img-top animate__animated animate__fadeIn"
        src={moviesApp}
        style={styles}
        alt=""
      />

      <div className="container">
        <h1 className="mt-3">Peliculas Disponibles</h1>
        <hr />
        <FilmList films={films} screenLoading={screenLoading} />;
      </div>
    </>
  );
}

export default Movies;
