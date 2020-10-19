import { combineReducers } from "redux";
import {
  READ_DATA,
  DELETE_DATA,
  COPY_DATA,
  RESET_DATA,
} from "../../constants/actionTypes";

const gridState = {
  data: {},
};
const copygridState = {
  copydata: {},
};
// Localedit //
const LocaleditLeft = (state = gridState, action) => {
  console.log(state.data);
  switch (action.type) {
    case READ_DATA:
      console.log("Read data: ", action);
      return Object.assign({}, state, {
        ...state,
        data: action.promise.data,
      });

    case DELETE_DATA:
      console.log("Delete Data");
      return Object.assign({}, state, {
        ...state,
        data: "",
      });
    default:
      return state;
  }
};

const LocaleditRight = (state = copygridState, action) => {
  console.log(state.copydata);
  switch (action.type) {
    case COPY_DATA:
      console.log("Copy Data");
      return Object.assign({}, state, {
        ...state,
        copydata: gridState.data,
      });
    case RESET_DATA:
      console.log("Copy Data");
      return Object.assign({}, state, {
        ...state,
        copydata: "",
      });
  }
};

export default combineReducers({ LocaleditLeft, LocaleditRight });
