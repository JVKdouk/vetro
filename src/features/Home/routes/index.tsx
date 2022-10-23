import { Route, Routes } from "react-router-dom";

import Home from "./home";

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
    </Routes>
  );
};
