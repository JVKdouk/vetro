import { matchRoutes, useLocation, useRoutes } from "react-router-dom";

import { protectedRoutes } from "./protected";
import React from "react";
import ProtectedLayout from "../components/ProtectedLayout";

export type RouteAttributes = {
  title: string;
  subtitle?: string;
  showBackArrow?: boolean;
  key?: string;
  showSidebar?: boolean;
};

export const AppRoutes = () => {
  const routes = protectedRoutes;
  let element = useRoutes(routes);

  return <ProtectedLayout>{element}</ProtectedLayout>;
};
