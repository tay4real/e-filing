import { fetchBackend } from "../../services";
import { department_action_types as c } from "./constants";

export function setDepartments(departments) {
  return (dispatch) => {
    dispatch({
      type: c.SET_DEPARTMENTS,
      payload: departments,
    });
  };
}

export function setDept(dept) {
  return (dispatch) => {
    dispatch({
      type: c.SET_DEPT_DETAIL,
      payload: dept,
    });
  };
}

export function setError(error) {
  return (dispatch) => {
    dispatch({
      type: c.SET_ERROR_OPERATION,
      payload: error,
    });
  };
}

export function setLoading(loading) {
  return (dispatch) => {
    dispatch({
      type: c.SET_LOADING,
      payload: loading,
    });
  };
}

export function setSuccess(message) {
  return (dispatch) => {
    dispatch({
      type: c.SET_SUCCESS_OPERATION,
      payload: message,
    });
  };
}

export function fetchAllDepartments() {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get("/depts");
      dispatch(setDepartments(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function fetchDeptById(id) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.get(`/depts/${id}`);

      dispatch(setDept(res.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function addNewDept(data) {
  return async (dispatch) => {
    setLoading(true);
    try {
      const res = await fetchBackend.post("/depts/add/new", data);
      if (res.data) {
        setLoading(false);
        dispatch(setSuccess("Department added successfully"));
      }
      await fetchAllDepartments();
    } catch (error) {
      setLoading(false);
      dispatch(setError(error));
    }
  };
}

export function updateDepartmentInfo(deptId, data) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.put(`/depts/${deptId}`, data);
      if (res.data) {
        dispatch(setDept(res.data));
        dispatch(setSuccess("Department Information updated successfully"));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function removeDepartment(deptId) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.put(`/depts/trash/${deptId}`);
      if (res.data) {
        dispatch(setSuccess(res.data));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function restoreDepartment(deptId) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.put(`/depts/restore/${deptId}`);
      if (res.data) {
        dispatch(setSuccess(res.data));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function deleteDepartment(deptId) {
  return async (dispatch) => {
    try {
      const res = await fetchBackend.delete(`/depts/delete/${deptId}`);
      if (res.data) {
        dispatch(setSuccess(res.data));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };
}
