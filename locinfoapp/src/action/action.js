import { READ_TABLE_DATA, GROUP_DATA } from "../constant/actiontypes";
// // // // // // //
export function readTableData(data) {
  return {
    type: READ_TABLE_DATA,
    data: data,
  };
}
export function groupData(data) {
  return {
    type: GROUP_DATA,
    data: data,
  };
}
