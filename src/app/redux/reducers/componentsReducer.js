import { components_action_types as c } from "../actions/constants";

const initialState = {
  showSidebar: false,
};

export default function componentsReducer(state = initialState, action) {
  switch (action.type) {
    case c.TOGGLE_SIDEBAR:
      return { ...state, showInfoSidebar: !state.showInfoSidebar };

    default:
      return state;
  }
}
