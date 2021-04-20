import { fetchBackend } from "../../services";
import { user_action_types as c } from "./constants";

export function setUserData(user) {
  return (dispatch) => {
    dispatch({
      type: c.SET_USER_DATA,
      payload: user,
    });
  };
}

export function setUserFailure(error) {
  return (dispatch) => {
    dispatch({
      type: c.SET_ERROR_OPERATION,
      payload: error,
    });
  };
}

export function setUserSuccess(message) {
  return (dispatch) => {
    dispatch({
      type: c.SET_SUCCESS_OPERATION,
      payload: message,
    });
  };
}

export function setUserLogOut() {
  return (dispatch) => {
    dispatch({
      type: c.USER_LOGGED_OUT,
    });
  };
}

export function setUserIsAuthenticated(auth) {
  return (dispatch) => {
    dispatch({
      type: c.SET_IS_AUTH,
      payload: auth,
    });
  };
}

export function fetchUser() {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get("/users/me");
      if (res.statusText === "OK") {
        dispatch(setUserData(res.data));
      }
    } catch (error) {
      if (error.response) {
        dispatch(setUserFailure(error.response.data));
      }
    }
  };
}

export function editUser(data) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.put("/users/me", data);
      if (res.data) {
        dispatch(setUserSuccess("User Record updated successfully"));
      }
    } catch (error) {
      if (error.response) {
        dispatch(setUserFailure(error.response.data));
      }
    }
  };
}

export function logout() {
  return async (dispatch) => {
    localStorage.removeItem("accessToken");
    dispatch(setUserLogOut());
    window.location.replace("/auth/login");
  };
}

export function authUser(auth) {
  return async (dispatch) => {
    dispatch(setUserIsAuthenticated(auth));
  };
}
