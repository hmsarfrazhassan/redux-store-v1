import { INCREMENT, DECREMENT, RESET } from "../actions/counterActions";

const initialState = { count: 0 };

export const counterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case INCREMENT:
      return { count: state.count + 1 };

    case DECREMENT:
      return { count: state.count - 1 };

    case RESET:
      return { count: 0 };

    default:
      return state;
  }
};
