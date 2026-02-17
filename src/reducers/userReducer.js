import { ADDUSER, DELETEUSER } from "../actions/userActions";

const initialState = { users: [] };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case DELETEUSER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
};
