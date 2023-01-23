import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { GetMovieById } from "../../helpers/getMovieById";

export const MovieInformationPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [movie] = GetMovieById(id);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!movie) {
    return <Navigate to="/inicio" />;
  }

  return (
    <div className="container">
      <div className="row mt-5 animate__animated animate__fadeInLeft">
        <div className="col-4">
          <img
            className="img-thumbnail"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className="col-8 ">
          <h3>{movie.title}</h3>
          <ul className="list-group list-group-flush"></ul>
          <li className="list-group-item">
            <b>Sinopsis:</b> {movie.overview}
          </li>
          <li className="list-group-item">
            <b>Fecha de lanzamiento:</b> {movie.release_date}
          </li>
          <li className="list-group-item">
            <b>Popularidad:</b> {movie.popularity}
          </li>

          <button
            className="btn btn-outline-primary mt-3"
            onClick={onNavigateBack}
          >
            Regresar a la pantalla anterior
          </button>
        </div>
      </div>
    </div>
  );
};
