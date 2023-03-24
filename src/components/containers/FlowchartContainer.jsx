import React, { useState } from "react";
import Flowchart from "flowchart-react";
import { useSelector, useDispatch } from "react-redux";
import {
  setNodes,
  handleCreateNode,
  editNode,
} from "../../features/nodes/nodeSlice";
import {
  editConnection,
  setConnections,
} from "../../features/connections/connectionSlice";
import Modal from "../common/Modal";
import EditNodeTitleContent from "./EditNodeTitleContent";
import EditConnectionTypeContent from "./EditConnectionTypeContent";
const FlowchartContainer = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState({ show: false, type: "" });
  const [selectedNode, setSelectedNode] = useState({});
  const [selectedConnection, setSelectedConnection] = useState({});
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
  const onCancel = () => setModal({ ...modal, show: false });

  const onNodeSave = () => {
    dispatch(editNode(selectedNode));
    onCancel();
    setSelectedNode({});
  };
  const onConnectionSave = () => {
    console.log(selectedConnection);
    dispatch(editConnection(selectedConnection));
    onCancel();
    setSelectedConnection({});
  };

  // handles node title update
  const handleNodeDoubleClick = (node) => {
    setModal({
      show: true,
      type: "NODE",
    });
    setSelectedNode(node);
  };
  // handles connection type on decision
  const handleConnectionDoubleClick = (node) => {
    const getSourceNode = nodes.find((item) => item.id === node.source.id);
    if (getSourceNode.type === "decision") {
      setModal({ show: true, type: "CONNECTION" });
      setSelectedConnection(node);
    }
  };

  // update title from modal input
  const setTitle = (value) => {
    setSelectedNode({ ...selectedNode, title: value });
  };
  // update type from modal input
  const setType = (value) => {
    setSelectedConnection({ ...selectedConnection, type: value });
  };

  return (
    <div className="my-16">
      {modal.show && (
        <Modal onCancel={onCancel}>
          {modal.type === "NODE" ? (
            <EditNodeTitleContent
              type="text"
              label="edit title"
              id="title"
              value={selectedNode.title}
              setValue={setTitle}
              onSave={onNodeSave}
              onCancel={onCancel}
            />
          ) : (
            <EditConnectionTypeContent
              items={["fail", "success"]}
              selected={selectedConnection.type}
              setSelected={setType}
              onSave={onConnectionSave}
              onCancel={onCancel}
            />
          )}
        </Modal>
      )}j
      <Flowchart
        onChange={onChange}
        showToolbar={true}
        onDoubleClick={onDoubleClick}
        onNodeDoubleClick={handleNodeDoubleClick}
        onConnectionDoubleClick={handleConnectionDoubleClick}
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
