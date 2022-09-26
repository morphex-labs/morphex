import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SomeState {
  some: string;
}

const initialState: SomeState = {
  some: '',
};

export const someSlice = createSlice({
  name: 'some',
  initialState,
  reducers: {
    setSome: (state, action: PayloadAction) => {},
  },
});

// Action creators are generated for each case reducer function
export const { setSome } = someSlice.actions;

export default someSlice.reducer;
