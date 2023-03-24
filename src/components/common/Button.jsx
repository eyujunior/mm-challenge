import PropTypes from "prop-types";
const Button = ({ children, custom, handleClick, type, onBlur }) => {
  return (
    <button
      onBlur={onBlur}
      type={type}
      onClick={handleClick}
      className={`${custom} px-4 sm:px-6 py-2.5 shadow-sm capitalize rounded-sm`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  custom: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  onBlur: PropTypes.func,
};

export default Button;
