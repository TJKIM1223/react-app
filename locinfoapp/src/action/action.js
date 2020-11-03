import { READ_TABLE_DATA, REFER_DATA } from "../constant/actiontypes";
// // // // // // //
export function readTableData(data) {
  return {
    type: READ_TABLE_DATA,
    data: data,
  };
}
export function referData() {
  return {
    type: REFER_DATA,
  };
}
