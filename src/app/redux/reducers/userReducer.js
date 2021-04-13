import { user_action_types as c } from "../actions/constants";

const initialState = {
  userInfos: {},
  loading: true,
  error: null,
  success: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case c.SET_USER_DATA:
      return { ...state, userInfos: action.payload, loading: false };

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
    case c.USER_LOGGED_OUT: {
      return state;
    }

    default:
      return state;
  }
}
