import { ActionTypes } from "../constants/actionTypes";

const initialState = {
};
export const userLoginReducer = (
  state = { initialState },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_USER_LOGIN:
      return { state: payload };
    case ActionTypes.REMOVE_USER_LOGIN:
      return { state:{} };
    default:
      return state;
  }
};
