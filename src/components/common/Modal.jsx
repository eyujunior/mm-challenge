import PropTypes from "prop-types";
import ModalPortal from "../containers/ModalPortal";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
const Modal = ({ onCancel, children, isOpen }) => {
  useDisableBodyScroll(isOpen);
  if (!isOpen) return null;

  return (
    <ModalPortal wrapperId="modal-portal-container">
      <div className="h-screen w-full fixed z-50 top-0 left-0 backdrop-blur-sm bg-black/20 flex items-center justify-center">
        <div
          className="absolute top-0 left-0 w-full h-screen"
          onClick={onCancel}
        ></div>
        {children}
      </div>
    </ModalPortal>
  );
};

Modal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Modal;
