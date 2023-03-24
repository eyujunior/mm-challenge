import React, { useEffect, useState } from "react";
import EditModalContent from "../containers/EditNodeTitleContent";
import Button from "./Button";
import Input from "./Input";

const Modal = (props) => {
  return (
    <div className="h-screen w-full fixed z-50 top-0 left-0 backdrop-blur-sm bg-black/20 flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-screen"
        onClick={props.onCancel}
      ></div>
      <EditModalContent {...props} />
    </div>
  );
};

export default Modal;
