import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../Store/AppContext";

import { Button, Modal } from "react-bootstrap";
import addFavourite from "../helpers/addFavourite";

function MovieCard({ props }) {
  const { setFavourites, favourites, getFavourites } = useContext(AppContext);

  const { title, id, poster_path, vote_average } = props;

  let isFavourite = false;

  console.log(getFavourites);

  if (favourites.filter((fav) => fav.id === id).length > 0) {
    isFavourite = true;
  }

  const toggleFavourite = (newMovie) => {
    addFavourite(
      favourites,
      newMovie,
      setFavourites,
      isFavourite,
      getFavourites
    );
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleOpen = () => {
    setShow(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card mt-3 animate__animated animate__fadeIn">
            <div className="row no-gutters">
              <div className="col-4 d-flex justify-content-center">
                <img
                  src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                  className="card-img"
                  alt={title}
                />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>

                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <b>Calificacion:</b> {vote_average}
                    </li>
                    <li className="list-group-item">
                      <Link to={`/pelicula/${title}`}> Mas informacion</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="col-12 col-md-6 col-lg-4 ">
        <div className="card mt-3 animate__animated animate__fadeIn">
          <div className="row no-gutters">
            <div onClick={() => handleOpen()} className="col-4">
              <img
                src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                className="card-img"
                alt={title}
              />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 onClick={() => handleOpen()} className="card-title">
                  {title}
                </h5>

                <button
                  onClick={() => toggleFavourite(props)}
                  className={`btn ${
                    isFavourite ? "btn-success" : "btn-outline-primary"
                  }`}
                >
                  {`${
                    isFavourite
                      ? " Eliminar de favoritos"
                      : " Añadir a favoritos"
                  }`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
