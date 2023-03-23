import React, { useEffect, useState } from "react";
import Flowchart from "flowchart-react";
import { useSelector, useDispatch } from "react-redux";
import {
  setNodes,
  handleCreateNode,
  editNode,
} from "../../features/nodes/nodeSlice";
import { setConnections } from "../../features/connections/connectionSlice";
import Modal from "../common/Modal";

const FlowchartContainer = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [selectedNode, setSelectedNode] = useState("");
  const { nodes } = useSelector((state) => state.nodes);
  const { connections } = useSelector((state) => state.connections);

  useEffect(() => {
    if (title) {
      dispatch(editNode(selectedNode));
    }
  }, [selectedNode]);

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

  const onCancel = () => setShowModal(false);

  const onSave = () => {
    setSelectedNode((prev) => {
      return { ...prev, title };
    });
    onCancel();
  };

  const handleDoubleClick = (node) => {
    setShowModal(true);
    setSelectedNode(node);
    setTitle(node.title);
  };
  return (
    <div className="my-16">
      {showModal && (
        <Modal
          type="text"
          label="edit title"
          id="title"
          value={title}
          setValue={setTitle}
          onSave={onSave}
          onCancel={onCancel}
        />
      )}
      <Flowchart
        onChange={onChange}
        showToolbar={true}
        onDoubleClick={onDoubleClick}
        onNodeDoubleClick={handleDoubleClick}
        style={{
          width: window?.innerWidth * 0.8, // 80% of the viewport width
          height: window?.innerHeight * 0.8, // 80% of the viewport height
          margin: "0 auto",
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
