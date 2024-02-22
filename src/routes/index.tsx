import React from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const isAuthenticated = false;
  const loading = false;
  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;