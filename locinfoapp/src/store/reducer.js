import { READ_TABLE_DATA, REFER_DATA } from "../constant/actiontypes";

const tableState = {
  data: [],
};
// // // // // // // //
const Tableedit = (state = tableState, action) => {
  switch (action.type) {
    case READ_TABLE_DATA:
      let arrdata = [];
      let arrLocal = Object.values(action.data);
      for (let local of arrLocal) {
        arrdata.push({
          LOC_ID: local.id,
          NODE_ID: local.node_id,
          LOC_NM: local.name,
          LOC_TYPE: local.locType,
          LC_TYPE: local.lcType,
          LAMP_TYPE: local.lamp,
          MCUFW_ID: local.MCUFW_ID,
          SCUFW_ID: local.SCUFW_ID,
          DELTA: local.delta,
          TRANS_CYC: local.trsCyc,
          AUTO_CORR: local.aCorrect,
          AUTO_CNTMOD: local.AUTO_CNTMOD,
          COMM_TYPE: local.comType,
          IPADDR: local.ip,
          PORT_NUM: local.PORT_NUM,
          MAIN_LOC: local.MAIN_LOC,
          GRP_ID: local.grpId,
          GRP_ORD: local.GRP_ORD,
          USE_YN: local.aOnYn,
        });
      }
      arrdata = arrdata.sort(function (a, b) {
        return a.ID - b.ID;
      });
      return {
        ...state,
        data: arrdata,
      };

    case REFER_DATA:
      return state;
    default:
      return state;
  }
};

export default Tableedit;
