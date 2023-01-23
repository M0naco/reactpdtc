import { useContext } from "react";
import { Badge } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { AppContext } from "../Store/AppContext";

function Navbar() {
  const { favourites } = useContext(AppContext);

  const favoritos = favourites.length;
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MoviesApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link  ${isActive ? "active" : ""}`
                }
                to="/inicio"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link  ${isActive ? "active" : ""}`
                }
                to="/favoritos"
              >
                Favoritos
                <span> </span>
                <Badge bg="secondary"> {favoritos}</Badge>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link  ${isActive ? "active" : ""}`
                }
                to="/buscar"
              >
                Busqueda
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
