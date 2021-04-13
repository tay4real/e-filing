import { admin_action_types as c } from "../actions/constants";

const initialState = {
  allUsers: [],
  activeUsers: [],
  inactiveUsers: [],
  user: {},
  loading: true,
  error: null,
  success: null,
};

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case c.SET_ALL_USERS:
      return { ...state, allUsers: action.payload, loading: false };

    case c.SET_ACTIVE_USERS:
      return { ...state, activeUsers: action.payload, loading: false };

    case c.SET_INACTIVE_USERS:
      return { ...state, user: action.payload, loading: false };

    case c.SET_USER:
      return { ...state, user: action.payload, loading: false };

    case c.SET_ERROR_OPERATION:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case c.SET_SUCCESS_OPERATION:
      return {
        ...state,
        success: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
