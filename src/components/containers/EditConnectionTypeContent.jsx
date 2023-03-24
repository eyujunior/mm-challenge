import React from "react";
import Button from "../common/Button";
import Dropdown from "../common/Dropdown";
import PropTypes from "prop-types";

const EditConnectionTypeContent = (props) => {
  return (
    <div className="p-4 flex flex-col bg-white relative z-40 w-11/12  min-h-[30vh] sm:w-4/5 md:w-1/3 xl:w-1/4 space-y-4 justify-center">
      <Dropdown {...props} />
      <div className="flex gap-4 w-full">
        <Button handleClick={props.onSave} custom="bg-primary text-white w-1/2">
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

EditConnectionTypeContent.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditConnectionTypeContent;
