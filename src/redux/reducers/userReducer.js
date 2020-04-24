import { SET_USER, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "../types";

const initialState = {
  authenticated: false,
  credentials: {},
  likes: [],
  notifications: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    // login
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    // logout
    case SET_UNAUTHENTICATED:
      return initialState;
    // dispatch from user actions
    case SET_USER:
      return {
        authenticated: true,
        ...action.payload,
      };
    default:
      return state;
  }
}
