import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  redirectTo,
  isAuth,
  path,
  ...props
}) => {
  if (!isAuth) {
    return <Navigate to={redirectTo} />;
  }
  return <Route path={path} {...props} element={<Component />} />;
};

export default PrivateRoute;
