import {
  READ_DATA,
  DELETE_DATA,
  SELECT_DATA,
} from "../../constants/actionTypes";

const gridState = {
  data: [],
  copydata: [],
  dump: [],
};

// Localedit //
//const LocaleditLeft = (state = gridState, action) => {

const LocaleditLeft = (state = gridState, action) => {
  switch (action.type) {
    case READ_DATA:
      let arrData = [];
      for (let local of action.data) {
        arrData.push({
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
      arrData = arrData.sort(function (a, b) {
        return a.ID - b.ID;
      });
      // for(let index=0; index<action.data.length; index++) {

      // }
      // return Object.assign({}, state, {
      //   ...state,
      //   data: action.data,
      // });
      return {
        ...state,
        data: arrData,
      };

    case DELETE_DATA:
      console.log("Delete Data");
      const datalength = action.data.length;
      for (let i = 0; i < datalength; i++) {
        state.data = state.data.filter((item) => item.ID !== action.data[i]);
      }
      return {
        ...state,
      };
    case SELECT_DATA:
      console.log("SELECT Data");
      return Object.assign({}, state, {
        ...state,
        data: action,
      });
    default:
      return state;
  }
};

export default LocaleditLeft;
