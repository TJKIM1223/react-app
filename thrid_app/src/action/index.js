import { READ_DATA, DELETE_DATA, SELECT_DATA } from "../constants/actionTypes";
// Localedit //
export function readdata(data) {
  return {
    type: READ_DATA,
    data: data,
  };
}
export function deletedata(data) {
  return {
    type: DELETE_DATA,
    data: data,
  };
}

export function selectdata() {
  return {
    type: SELECT_DATA,
  };
}
