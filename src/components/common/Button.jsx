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

export default Button;
