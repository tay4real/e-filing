import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import routes from "./index";
import Protected from "../layouts/Protected";

const ReactRouter = () => {
  return (
    <Switch>
      {routes.map((route, key) => (
        <Route
          key={key}
          exact={route.exact}
          path={route.path}
          render={(props) => (
            <route.layout {...props}>
              {route.isProtected ? (
                <Protected>
                  <route.component {...props} />
                </Protected>
              ) : (
                <route.component {...props} />
              )}
            </route.layout>
          )}
        />
      ))}
    </Switch>
  );
};

export default ReactRouter;
