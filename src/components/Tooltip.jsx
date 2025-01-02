import React, { useState } from "react";
import PropTypes from "prop-types";

const Tooltip = ({ position, children, content, trigger = "hover" }) => {
    const [isVisible, setIsVisible] = useState(false);

    const positionClasses = {
        top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
        left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
        right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
    };

    const carrotClasses = {
        top: "top-full left-1/2 transform -translate-x-1/2 border-t-gray-800 dark:border-t-gray-200",
        bottom: "bottom-full left-1/2 transform -translate-x-1/2 border-b-gray-800 dark:border-b-gray-200",
        left: "left-full top-1/2 transform -translate-y-1/2 border-l-gray-800 dark:border-l-gray-200",
        right: "right-full top-1/2 transform -translate-y-1/2 border-r-gray-800 dark:border-r-gray-200",
    };

    return (
        <div
            className="relative block"
            onMouseEnter={() => trigger === "hover" && setIsVisible(true)}
            onMouseLeave={() => trigger === "hover" && setIsVisible(false)}
            onClick={() => trigger === "click" && setIsVisible((prev) => !prev)}
        >
            {children}
            {isVisible && (
                <div
                    className={`absolute ${positionClasses[position]} 
                    bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 
                    text-sm px-3 py-2 rounded shadow-lg z-10 max-w-xl w-auto
                    transition-opacity duration-300`}
                >
                    {typeof content === "string" ? (
                        <p>{content}</p> // Render string as plain text
                    ) : (
                        React.isValidElement(content) && content // Render the React component
                    )}
                    <div
                        className={`absolute w-0 h-0 border-8 border-transparent ${carrotClasses[position]}`}
                    ></div>
                </div>
            )}
        </div>
    );
};

Tooltip.propTypes = {
    position: PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
    children: PropTypes.node.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string, // Allow strings
        PropTypes.element, // Allow React components
    ]).isRequired,
    trigger: PropTypes.oneOf(["hover", "click"]),
};

export default Tooltip;
