import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

const EditNodeTitleContent = (props) => {
  const [error, setError] = useState(false);

  const handleSave = () => {
    // saves only if input is not empty
    if (props.value !== "") {
      props.onSave();
      return;
    }

    setError(true);
  };
  return (
    <div className="p-4 bg-white relative z-40 w-11/12 sm:w-4/5 md:w-1/3 xl:w-1/4 space-y-4">
      <Input {...props} error={error} />
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
  );
};

export default EditNodeTitleContent;
