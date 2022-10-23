import { Route, Routes } from "react-router-dom";

import Donation from "./donation";
import Product from "./product";

export const ProductRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Product />} />
      <Route path="new" element={<Donation />} />
    </Routes>
  );
};
