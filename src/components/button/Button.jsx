import React from "react";

const Button = ({
    children,
    type = "button",
    selected,
    onClick = () => {},
    className = "",
    ...props
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`${className} ${selected ? "bg-blue-300" : ""}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
