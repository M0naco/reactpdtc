import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { GetMovieById } from "../../helpers/getMovieById";
import FilmList from "../../Components/FilmList";
import { useContext } from "react";
import { AppContext } from "../../Store/AppContext";
import { Button, Modal } from "react-bootstrap";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const { loading } = useContext(AppContext);

  const screenLoading = JSON.stringify(loading);

  const films = GetMovieById(q);

  const showSearch = q.length === 0;

  const showError = q.length > 0 && films.length === 0;

  const { searchText, onInputChange } = useForm({ searchText: "" });

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleOpen = () => {
    setShow(true);
  };

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return handleOpen();

    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Debe buscar una pelicula con al menos dos letras</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container animate__animated animate__fadeIn">
        <h1 className="mt-3">Busqueda</h1>
        <hr />

        <div className="row">
          <div className="col-5">
            <h4>Buscar una pelicula </h4>
            <form onSubmit={onSearchSubmit}>
              <input
                type="text"
                placeholder="Busque una pelicula"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />
              <button className="btn btn-outline-primary mt-2">Buscar</button>
            </form>
          </div>
          <div className="col-7">
            <h4>Resultados</h4>
            <hr />

            <div
              className="alert alert-primary animate__animated animate__fadeIn"
              style={{ display: showSearch ? "" : "none" }}
            >
              {" "}
              Busque una pelicula
            </div>

            <div
              className="alert alert-danger animate__animated animate__fadeIn"
              style={{ display: showError ? "" : "none" }}
            >
              {" "}
              No hay ninguna pelicula con <b>{q}</b>
            </div>

            <FilmList films={films} screenLoading={screenLoading} />
          </div>
        </div>
      </div>
    </>
  );
};
