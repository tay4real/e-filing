import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { fetchUser, authUser } from "../redux/actions/userActions";

import { useHistory } from "react-router-dom";

const useAuth = () => {
  const history = useHistory();
  let { user, loading, isAuth, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    getUserData();
    authhenticateUser(user);
    if (error) {
      history.push("/auth/login");
    }
  }, [user]);

  const authhenticateUser = async (user) => {
    if (user) {
      if (Object.entries(user).length !== 0) {
        authUser(true);
      } else {
        authUser(false);
      }
    }
  };

  const getUserData = () => {
    dispatch(fetchUser());
  };
  return [user, loading, isAuth];
};

export default useAuth;
