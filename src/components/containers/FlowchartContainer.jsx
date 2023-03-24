import React, { useState } from "react";
import Flowchart from "flowchart-react";
import { useSelector, useDispatch } from "react-redux";
import {
  setNodes,
  handleCreateNode,
  editNode,
} from "../../features/nodes/nodeSlice";
import { setConnections } from "../../features/connections/connectionSlice";
import Modal from "../common/Modal";
import EditNodeTitleContent from "./EditNodeTitleContent";
const FlowchartContainer = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedNode, setSelectedNode] = useState({});
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

  // handles changes like moved, disconnected, deleted, connected
  const onChange = (nodes, connections) => {
    dispatch(setNodes(nodes));
    dispatch(setConnections(connections));
  };

  // close modal
  const onCancel = () => setShowModal(false);

  const onSave = () => {
    dispatch(editNode(selectedNode));
    onCancel();
    setSelectedNode({});
  };

  // handles node title update
  const handleNodeDoubleClick = (node) => {
    setShowModal(true);
    setSelectedNode(node);
  };

  // update title from modal input
  const setTitle = (value) => {
    setSelectedNode((prev) => {
      return { ...selectedNode, title: value };
    });
  };

  return (
    <div className="my-16">
      {showModal && (
        <Modal onCancel={onCancel}>
          <EditNodeTitleContent
            type="text"
            label="edit title"
            id="title"
            value={selectedNode.title}
            setValue={setTitle}
            onSave={onSave}
            onCancel={onCancel}
          />
        </Modal>
      )}
      <Flowchart
        onChange={onChange}
        showToolbar={true}
        onDoubleClick={onDoubleClick}
        onNodeDoubleClick={handleNodeDoubleClick}
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
