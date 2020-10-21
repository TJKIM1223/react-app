import { READ_DATA, DELETE_DATA } from "../../constants/actionTypes";

const gridState = {
  data: [],
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
      return Object.assign({}, state, {
        ...state,
        data: [],
      });
    default:
      return state;
  }
};

export default LocaleditLeft;
