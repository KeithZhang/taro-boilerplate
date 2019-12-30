const initState = {
  count: 1
};

export default function goodsReducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case "INIT":
      return state;
    default:
      return state;
  }
}
