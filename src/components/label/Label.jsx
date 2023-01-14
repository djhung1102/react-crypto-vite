import React from "react";

const Label = ({ htmlFor = "", children, ...props }) => {
    return (
        <label htmlFor={htmlFor} {...props} className="cursor-pointer text-slate-900 font-medium">
            {children}
        </label>
    );
};

export default Label;
