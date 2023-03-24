import { configureStore } from "@reduxjs/toolkit";
import nodeReducer from "../features/nodes/nodeSlice";
import connectionReducer from "../features/connections/connectionSlice";

export const store = configureStore({
  reducer: {
    nodes: nodeReducer,
    connections: connectionReducer,
  },
});
