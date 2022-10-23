import { HomeRoutes } from "../features/Home";
import { ProductRoutes } from "../features/Product";

export const protectedRoutes = [
  {
    path: "/h/*",
    element: <HomeRoutes />,
  },
  {
    path: "/p/*",
    element: <ProductRoutes />,
  },
];
