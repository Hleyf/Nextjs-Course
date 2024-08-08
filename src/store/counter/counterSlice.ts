import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  initialised: boolean;
}

const initialState: CounterState = {
  count: 5,
  initialised: false
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count === 0) return;
      state.count -= 1;
    },
    setCount: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) action.payload = 0;
      state.count = action.payload;
    },
    initialise(state,  action: PayloadAction<number>) {
      if (state.initialised) return;
      state.initialised = true;
      state.count = action.payload;
    }
  },
});

export const { increment, decrement, setCount, initialise } = counterSlice.actions;

export default counterSlice.reducer;
