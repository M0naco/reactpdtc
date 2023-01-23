import MovieCard from "./MovieCard";
import Spinner from "react-bootstrap/Spinner";

function FilmList({ films, screenLoading }) {
  return (
    <div className="row">
      {screenLoading == "true" ? (
        films && films.map((film) => <MovieCard key={film.id} props={film} />)
      ) : (
        <Spinner animation="border" role="status" />
      )}
    </div>
  );
}

export default FilmList;
