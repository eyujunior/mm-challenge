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
    editConnection: (state, action) => {
      const selectedConnection = state.connections.find(
        (item) => item.destination.id === action.payload.destination.id
      );
      selectedConnection.type = action.payload.type;
    },
    setConnections: (state, action) => {
      state.connections = action.payload;
    },
  },
});

export const { setConnections, editConnection } = connectionSlice.actions;

export default connectionSlice.reducer;
