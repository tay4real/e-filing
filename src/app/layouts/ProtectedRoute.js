import React from "react";
import { Route, Redirect } from "react-router-dom";
import MainLayout from "./MainLayout";
import LoadPage from "./LoadPage";

const ProtectedRoute = ({ Component: Component, user, loading, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return (
            <>
              <MainLayout user={user} {...props}>
                <LoadPage {...props} loading={loading}>
                  <Component {...props} user={user} />
                </LoadPage>
              </MainLayout>
            </>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/auth/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
