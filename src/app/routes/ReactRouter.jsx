import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import routes from "./index";
import Protected from "../layouts/LoadPage";

import Login from "../view/auth/Login";
import BlankLayout from "../layouts/BlankLayout";
import ProtectedRoute from "../layouts/ProtectedRoute";
import NotFound from "../view/NotFound";
import Unauthorized from "../view/Unauthorized";
import { useSelector } from "react-redux";
import ForgotPassword from "../view/users/profile/ForgotPassword";

const ReactRouter = () => {
  let { user, loading, error } = useSelector((state) => state.user);
  return (
    <Switch>
      <Route path="/auth/login" exact>
        {user ? <Redirect to="/" /> : <Login />}
      </Route>
      {routes.map((route, key) => (
        <ProtectedRoute
          key={key}
          exact
          user={user}
          loading={loading}
          path={route.path}
          Component={route.component}
        />
      ))}
      <Route path="/auth/forgotpassword" exact component={ForgotPassword} />
      <Route path="/unauthorized" exact component={Unauthorized} />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default ReactRouter;
