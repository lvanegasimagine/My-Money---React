import { LOGIN } from "../types/Types";


export default (state, action) => {
    switch (action.type) {
    case LOGIN: return {...state, user: action.payload}
      default:
        return state;
    }
  };