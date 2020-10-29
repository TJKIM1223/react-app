import { all, put, takeEvery } from "redux-saga/effects";

//병렬 task 실행 : page render시에 실행됨
export default function* Saga() {
  yield all([helloSaga(), ControlAge()]);
}
//렌더시에 실행.
export function* helloSaga() {
  console.log("Welcome");
}

function* ageUPSync(data) {
  console.log("Age UP!", data, data.type);
  yield put({ type: "AGE_UP_NOW", value: 1 });
}
function* ageDOWNSync(data) {
  console.log("Age DOWN!", data, data.type);
  yield put({ type: "AGE_DOWN_NOW", value: 1 });
}

function* getTest(data) {
  alert("TEST");
  console.log("Testing! :", data);
}

export function* ControlAge(data) {
  console.log("Your age is ", data);
  yield takeEvery("AGE_UP", ageUPSync);
  yield takeEvery("AGE_DOWN", ageDOWNSync);
  yield takeEvery("GET_TEST", getTest);
}
