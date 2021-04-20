import { user_action_types as c } from "../actions/constants";

const initialState = {
  user: null,
  loading: true,
  error: null,
  success: null,
  isAuth: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case c.SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

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

    case c.REMOVE_USER_DATA: {
      return {
        ...state,
      };
    }

    case c.SET_IS_AUTH: {
      return { ...state, isAuth: action.payload };
    }

    default:
      return state;
  }
}
