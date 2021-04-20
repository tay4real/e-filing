import { combineReducers } from "redux";
import user from "./userReducer";
import admin from "./adminReducer";
import depts from "./departments";
import files from "./fileReducer";
import mails from "./mailReducer";
import componentsReducer from "./componentsReducer";

const rootReducer = combineReducers({
  user,
  admin,
  depts,
  files,
  mails,
  components: componentsReducer,
});

export default rootReducer;
