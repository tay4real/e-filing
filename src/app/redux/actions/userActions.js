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

export function fetchUser() {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get("/users/me");
      dispatch(setUserData(res.data));
    } catch (error) {
      dispatch(setUserFailure(error));
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
      dispatch(setUserFailure(error));
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.post("/auth/logout");
      if (res.data) {
        dispatch(setUserSuccess(res.data.message));
      }
    } catch (error) {
      dispatch(setUserFailure(error));
    }
  };
}
