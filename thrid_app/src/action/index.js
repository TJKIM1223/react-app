import {
  READ_DATA,
  DELETE_DATA,
  COPY_DATA,
  RESET_DATA,
} from "../constants/actionTypes";
// Localedit //
export function readdata(data) {
  return {
    type: READ_DATA,
    data: data,
  };
}

export function deletedata() {
  return {
    type: DELETE_DATA,
  };
}

export function copydata() {
  return {
    type: COPY_DATA,
  };
}

export function resetdata() {
  return {
    type: RESET_DATA,
  };
}
