import React, { useCallback, useState } from "react";
import Flowchart from "flowchart-react";
import { useSelector, useDispatch } from "react-redux";
import { setNodes, handleCreateNode } from "../../features/nodes/nodeSlice";
import { setConnections } from "../../features/connections/connectionSlice";

const FlowchartContainer = () => {
  const dispatch = useDispatch();
  const { nodes } = useSelector((state) => state.nodes);
  const { connections } = useSelector((state) => state.connections);

  // handle node creation on background double click
  const onDoubleClick = (event, zoom) => {
    // to avoid sending non-serializable value to action
    const serializable = {
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
    };
    dispatch(handleCreateNode({ serializable, zoom }));
  };

  const onChange = (nodes, connections) => {
    dispatch(setNodes(nodes));
    dispatch(setConnections(connections));
  };
  return (
    <div className="my-16">
      <Flowchart
        onChange={onChange}
        showToolbar={true}
        onDoubleClick={onDoubleClick}
        onNodeDoubleClick={(data) => console.log(data)}
        style={{
          width: window?.innerWidth * 0.8, // 80% of the viewport width
          height: window?.innerHeight * 0.8, // 80% of the viewport height
          margin: "0 auto ",
          backgroundColor: "#5D21D1",
          borderRadius: "1rem",
        }}
        nodes={nodes}
        connections={connections}
      />
    </div>
  );
};

export default FlowchartContainer;
