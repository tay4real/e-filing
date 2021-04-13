import { department_action_types as c } from "../actions/constants";

const initialState = {
  departments: [],
  dept_detail: {},
  loading: true,
  error: null,
  success: null,
};

export default function deptReducer(state = initialState, action) {
  switch (action.type) {
    case c.SET_DEPARTMENTS:
      return { ...state, departments: action.payload, loading: false };

    case c.SET_DEPT_DETAIL:
      return { ...state, dept_detail: action.payload, loading: false };

    case c.SET_ERROR_OPERATION:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case c.SET_LOADER:
      return {
        ...state,
        success: action.payload,
        loading: false,
      };

    case c.SET_SUCCESS_OPERATION:
      return {
        ...state,
        success: action.payload,
        loading: false,
      };

    case c.REMOVE_DEPT_DATA: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
