import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

export const PrivateRoute=({ path, children })=> {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return isAuth ? (
    <Route exact path={path}>
      {children}
    </Route>
  ) : (
    <Redirect to="/auth/login" />
  );
}

export const AntiPrivateRoute=({ path, children })=> {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return !isAuth ? (
    <Route exact path={path}>
      {children}
    </Route>
  ) : (
    <Redirect path="/" />
  );
}
