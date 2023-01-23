import React from "react";
import { Route, Routes } from "react-router-dom";
import PagesRoutes from "../Movies/Routes/PagesRoutes";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PagesRoutes />} />
      </Routes>
      ;
    </>
  );
}

export default AppRouter;
