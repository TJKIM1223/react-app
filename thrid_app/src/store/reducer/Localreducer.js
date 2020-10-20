import { combineReducers } from "redux";
import {
  READ_DATA,
  DELETE_DATA,
  COPY_DATA,
  RESET_DATA,
} from "../../constants/actionTypes";

const gridState = [];
const copygridState = [];
// Localedit //
//const LocaleditLeft = (state = gridState, action) => {
const LocaleditLeft = (state = gridState, action) => {
  console.log("store data: ", gridState);
  switch (action.type) {
    case READ_DATA:
      for (let local of action.data) {
        state.push({
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
        data: "",
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
        state: gridState,
      });
    case RESET_DATA:
      console.log("Copy Data");
      return Object.assign({}, state, {
        ...state,
        copydata: "",
      });
    default:
      return state;
  }
};

const LocaleditReducer = combineReducers({ LocaleditLeft, LocaleditRight });

export default LocaleditReducer;
