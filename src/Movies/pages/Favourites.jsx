import { useContext } from "react";
import { AppContext } from "../../Store/AppContext";
import FilmList from "../../Components/FilmList";
import { Badge } from "react-bootstrap";

function Favourites() {
  const { favourites, loading } = useContext(AppContext);
  const films = favourites;
  const favoritos = favourites.length;

  const screenLoading = JSON.stringify(loading);
  return (
    <div className="container animate__animated animate__fadeIn">
      <h1 className="mt-3">
        Favoritas <Badge bg="secondary">{favoritos}</Badge>
      </h1>
      <hr />

      {films.length == 0 ? (
        <h6 className="animate__animated animate__fadeIn">
          No tienes peliculas favoritas aun
        </h6>
      ) : (
        <FilmList films={films} screenLoading={screenLoading} />
      )}
    </div>
  );
}

export default Favourites;
