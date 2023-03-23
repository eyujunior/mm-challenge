import { createSlice } from "@reduxjs/toolkit";

// get connections from localstorage if available
const getFromLocalstorage = () => {
  return JSON.parse(localStorage.getItem("connections")) || [];
};

const initialState = {
  connections: getFromLocalstorage(),
};

export const connectionSlice = createSlice({
  name: "connections",
  initialState,
  reducers: {
    setConnections: (state, action) => {
      state.connections = action.payload;
      localStorage.setItem("connections", JSON.stringify(action.payload));
    },
  },
});

export const { setConnections } = connectionSlice.actions;

export default connectionSlice.reducer;
