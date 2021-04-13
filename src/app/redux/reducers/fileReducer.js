import { file_action_types as c } from "../actions/constants";

const initialState = {
  files: [],
  file_detail: {},
  loading: true,
  error: null,
  success: null,
};

export default function fileReducer(state = initialState, action) {
  switch (action.type) {
    case c.SET_FILES:
      return { ...state, files: action.payload, loading: false };

    case c.SET_FILE_DETAIL:
      return { ...state, file_detail: action.payload, loading: false };

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

    case c.REMOVE_FILE_DATA: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
