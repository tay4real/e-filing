import { mail_action_types as c } from "../actions/constants";

const initialState = {
  allMails: [],
  incomingMails: [],
  outgoingMails: [],
  mail_details: {},
  uploadedImagePath: null,
  loading: true,
  error: null,
  success: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case c.SET_ALL_MAILS:
      return { ...state, allMails: action.payload, loading: false };

    case c.SET_INCOMING_MAILS:
      return { ...state, incomingMails: action.payload, loading: false };

    case c.SET_OUTGOING_MAILS:
      return { ...state, outgoingMails: action.payload, loading: false };

    case c.SET_FILEIMAGE_PATH:
      return { ...state, uploadedImagePath: action.payload, loading: false };

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
