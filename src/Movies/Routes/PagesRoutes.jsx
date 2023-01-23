import { Navigate, Route, Routes } from "react-router-dom";
import Favourites from "../pages/Favourites";
import Movies from "../pages/Movies";
import Navbar from "../../ui/Navbar";
import { MovieInformationPage } from "../pages/MovieInformationPage";
import { SearchPage } from "../pages/SearchPage";

function PagesRoutes() {
  return (
    <>
      <Navbar />
      <>
        <Routes>
          <Route path="inicio" element={<Movies />} />
          <Route path="favoritos" element={<Favourites />} />\
          <Route path="buscar" element={<SearchPage />} />\
          <Route path="pelicula/:id" element={<MovieInformationPage />} />
          <Route path="/*" element={<Navigate to="/inicio" />} />
        </Routes>
      </>
    </>
  );
}

export default PagesRoutes;
