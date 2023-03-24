import React, { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Modal = (props) => {
  const handleSave = () => {
    // saves only if input is not empty
    if (props.value !== "") {
      props.onSave();
    }
  };
  return (
    <div className="h-screen w-full fixed z-50 top-0 left-0 backdrop-blur-sm bg-black/20 flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-screen"
        onClick={props.onCancel}
      ></div>
      <div className="p-4 bg-white relative z-40 w-11/12 sm:w-4/5 md:w-1/3 xl:w-1/4 space-y-4">
        <Input {...props} />
        <div className="flex gap-4 w-full">
          <Button handleClick={handleSave} custom="bg-primary text-white w-1/2">
            save
          </Button>
          <Button
            handleClick={props.onCancel}
            custom="bg-red-500 text-white w-1/2"
          >
            cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
