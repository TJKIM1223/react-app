const agestate = {
  age: 20,
};

const reducer = (state = agestate, action) => {
  const oldState = { ...state };
  console.log("action: ", action);
  switch (action.type) {
    case "AGE_UP_NOW":
      oldState.age += action.value;
      break;
    case "AGE_DOWN_NOW":
      oldState.age -= action.value;
      break;
  }
  return oldState;
};

export default reducer;
