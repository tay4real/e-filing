import { fetchBackend } from "../../services";
import { admin_action_types as c } from "./constants";

export const setAllUsers = (users) => ({
  type: c.SET_ALL_USERS,
  payload: users,
});

export const setActiveUsers = (active_users) => ({
  type: c.SET_ACTIVE_USERS,
  payload: active_users,
});

export const setUser = (user) => ({
  type: c.SET_USER,
  payload: user,
});

export const setInactiveUsers = (inactive_users) => ({
  type: c.SET_INACTIVE_USERS,
  payload: inactive_users,
});

export const setError = (error) => ({
  type: c.SET_ERROR_OPERATION,
  payload: error,
});

export const setSuccess = (message) => ({
  type: c.setSuccess,
  payload: message,
});

export function fetchAllUsers() {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get("/admin/users");
      dispatch(setAllUsers(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function fetchActiveUsers() {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get("/admin/users/active");
      dispatch(setActiveUsers(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function fetchInActiveUsers() {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get("/admin/users/trashed");
      dispatch(setInactiveUsers(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function addNewUser(userInfo) {
  return async (dispatch) => {
    dispatch(setSuccess(null));
    try {
      const res = await fetchBackend.get("/auth/register", userInfo);
      if (res.data) {
        dispatch(setSuccess("User Added Successfully"));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function fetchUserByID(userID) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get(`/admin/user/${userID}`);
      dispatch(setUser(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function updateUserRecord(userInfo, userId) {
  return async (dispatch) => {
    dispatch(setSuccess(null));
    try {
      const res = await fetchBackend.get(`/admin/user/${userId}`, userInfo);

      dispatch(setUser(res.data));
      dispatch(setSuccess("User Record Updated Successfully"));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function deactivatedUser(userId) {
  return async (dispatch) => {
    dispatch(setSuccess(null));
    try {
      const res = await fetchBackend.put(`/admin/users/trash/${userId}`);
      dispatch(setSuccess(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function reactivateUser(userId) {
  return async (dispatch) => {
    dispatch(setSuccess(null));
    try {
      const res = await fetchBackend.put(`/admin/users/restore/${userId}`);
      dispatch(setSuccess(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function deleteUser(userId) {
  return async (dispatch) => {
    dispatch(setSuccess(null));
    try {
      const res = await fetchBackend.delete(`/admin/users/delete/${userId}`);
      dispatch(setSuccess(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}
