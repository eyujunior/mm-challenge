import { createSlice, current } from "@reduxjs/toolkit";

// get nodes from localstorage if available
const getFromLocalstorage = () => {
  return (
    JSON.parse(localStorage.getItem("nodes")) || [
      {
        type: "start",
        title: "Begin",
        x: 800,
        y: 50,
        id: 1604410569920,
      },
    ]
  );
};

const initialState = {
  nodes: getFromLocalstorage(),
};

export const nodeSlice = createSlice({
  name: "nodes",
  initialState,
  reducers: {
    setNodes: (state, action) => {
      state.nodes = action.payload;
      localStorage.setItem("nodes", JSON.stringify(action.payload));
    },
    handleCreateNode: (state, { payload }) => {
      const point = {
        x: payload.serializable.x / payload.zoom,
        y: payload.serializable.y / payload.zoom,
        id: +new Date(),
      };
      let nodeData;
      if (!state.nodes.find((item) => item.type === "start")) {
        nodeData = {
          type: "start",
          title: "Start",
          ...point,
        };
      } else if (!state.nodes.find((item) => item.type === "end")) {
        nodeData = {
          type: "end",
          title: "End",
          ...point,
        };
      } else {
        nodeData = {
          ...point,
          title: "New",
          type: "operation",
        };
      }
      state.nodes.push(nodeData);
      localStorage.setItem("nodes", JSON.stringify(current(state.nodes)));
    },
  },
});

export const { setNodes, handleCreateNode } = nodeSlice.actions;
export default nodeSlice.reducer;