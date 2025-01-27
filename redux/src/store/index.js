// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const INITIAL_STATE = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increse(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});



const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;

// const counterReducer = (state = INITIAL_STATE, action) => {
//   if (action.type === "increment") {
  //     return {
    //       ...state,
    //       counter: state.counter + 1,
    //     };
    //   }
    
//   if (action.type === "increse") {
//     return {
  //       ...state,
//       counter: state.counter + action.amount,
//     };
//   }

//   if (action.type === "decrement") {
  //     return {
    //       ...state,
    //       counter: state.counter - 1,
    //     };
    //   }

//   if (action.type === "toggle") {
//     return {
  //       ...state,
  //       showCounter: !state.showCounter,
  //     };
  //   }
  
  //   return state;
  // };
  
  // const store = createStore(counterReducer);