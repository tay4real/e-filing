import DepartmentDataService from "../../services/DepartmentService";
import { department_action_types as c } from "./constants";

export const createDepartment = (data) => async (dispatch) => {
  try {
    const res = await DepartmentDataService.create(data);

    dispatch({
      type: c.CREATE_DEPARTMENTS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveDepartments = () => async (dispatch) => {
  try {
    const res = await DepartmentDataService.getAll();

    dispatch({
      type: c.RETRIEVE_DEPARTMENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateDepartment = (id, data) => async (dispatch) => {
  try {
    const res = await DepartmentDataService.update(id, data);

    dispatch({
      type: c.UPDATE_DEPARTMENT,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const removeDepartment = (id) => async (dispatch) => {
  try {
    await DepartmentDataService.remove(id);

    dispatch({
      type: c.REMOVE_DEPARTMENT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const restoreDepartment = (id) => async (dispatch) => {
  try {
    await DepartmentDataService.restoreDepartment(id);

    dispatch({
      type: c.RESTORE_DEPARTMENT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteDepartment = (id) => async (dispatch) => {
  try {
    await DepartmentDataService.deleteDepartment(id);

    dispatch({
      type: c.DELETE_DEPARTMENT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllDepartments = () => async (dispatch) => {
  try {
    const res = await DepartmentDataService.deleteAll();

    dispatch({
      type: c.DELETE_ALL_DEPARTMENTS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findDepartmentsByName = (name) => async (dispatch) => {
  try {
    const res = await DepartmentDataService.findByName(name);

    dispatch({
      type: c.RETRIEVE_DEPARTMENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
