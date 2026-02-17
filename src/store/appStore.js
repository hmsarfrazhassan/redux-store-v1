// import { createStore } from "redux";
// import { userReducer } from "../reducers/userReducer";
// import { counterReducer } from "../reducers/counterReducer";

// const store = createStore(userReducer);

// export default store;

import { createStore, combineReducers } from "redux";
import { userReducer } from "../reducers/userReducer";
import { counterReducer } from "../reducers/counterReducer";

const rootReducer = combineReducers({
  users: userReducer,
  counter: counterReducer,
});

const store = createStore(rootReducer);

export default store;
