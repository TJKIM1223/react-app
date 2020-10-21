import { combineReducers } from "redux";
import {
  READ_DATA,
  DELETE_DATA,
  COPY_DATA,
  RESET_DATA,
} from "../../constants/actionTypes";

const gridState = {
  data: [],
};
const copygridState = {
  data: [],
  check: "0",
};
// Localedit //
//const LocaleditLeft = (state = gridState, action) => {
const LocaleditLeft = (state = gridState, action) => {
  switch (action.type) {
    case READ_DATA:
      for (let local of action.data) {
        state.data.push({
          ID: local.LOC_ID,
          NAME: local.LOC_NM,
          GRPID: local.GRP_ID,
          LOCTYPE: local.LOC_TYPE,
          LCTYPE: local.LC_TYPE,
          LAMPTYPE: local.LAMP_TYPE,
          NODEID: local.NODE_ID,
          NLAT: local.NODELAT,
          NLON: local.NODELON,
        });
      }

      console.log("statedata : ", state.data);

      // for(let index=0; index<action.data.length; index++) {

      // }
      // return Object.assign({}, state, {
      //   ...state,
      //   data: action.data,
      // });
      return state;

    case DELETE_DATA:
      console.log("Delete Data");
      return Object.assign({}, state, {
        ...state,
        state: "",
      });
    default:
      return state;
  }
};

const LocaleditRight = (state = copygridState, action) => {
  switch (action.type) {
    case COPY_DATA:
      console.log("Copy Data");
      return Object.assign({}, state, {
        ...state,
        data: gridState.data,
        check: "1",
      });
    case RESET_DATA:
      console.log("Copy Data");
      return Object.assign({}, state, {
        ...state,
        data: "",
        check: "0",
      });
    default:
      return state;
  }
};

const LocaleditReducer = combineReducers({ LocaleditLeft, LocaleditRight });

export default LocaleditReducer;
