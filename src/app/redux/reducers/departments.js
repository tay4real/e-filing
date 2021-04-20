import { department_action_types as c } from "../actions/constants";

const initialState = [];

function departmentReducer(departments = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case c.CREATE_DEPARTMENTS:
      return [...departments, payload];

    case c.RETRIEVE_DEPARTMENTS:
      return payload;

    case c.UPDATE_DEPARTMENT:
      return departments.map((department) => {
        if (department._id === payload._id) {
          return {
            ...department,
            ...payload,
          };
        } else {
          return department;
        }
      });
    case c.REMOVE_DEPARTMENT:
      return payload;

    case c.RESTORE_DEPARTMENT:
      return payload;

    case c.DELETE_DEPARTMENT:
      return departments.filter(({ id }) => id !== payload.id);

    case c.DELETE_ALL_DEPARTMENTS:
      return [];

    default:
      return departments;
  }
}

export default departmentReducer;
