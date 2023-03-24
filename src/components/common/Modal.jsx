import PropTypes from "prop-types";
const Modal = ({ onCancel, children }) => {
  return (
    <div className="h-screen w-full fixed z-50 top-0 left-0 backdrop-blur-sm bg-black/20 flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-screen"
        onClick={onCancel}
      ></div>
      {children}
    </div>
  );
};

Modal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
