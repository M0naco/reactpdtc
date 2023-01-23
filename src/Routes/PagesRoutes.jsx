import { Navigate, Route, Routes } from "react-router-dom";
import Favourites from "../../pages/Favourites";
import Movies from "../pages/Movies";
import Navbar from "../../ui/Navbar";

function PagesRoutes() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="inicio" element={<Movies />} />
          <Route path="favoritos" element={<Favourites />} />

          <Route path="/*" element={<Navigate to="/inicio" />} />
        </Routes>
      </div>
    </>
  );
}

export default PagesRoutes;
