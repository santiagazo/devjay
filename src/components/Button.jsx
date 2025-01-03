import { PropTypes } from "prop-types";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="text-gray-100 dark:text-gray-300 hover:text-gray-300 hover:border-gray-600 border-spacing-x-16 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
