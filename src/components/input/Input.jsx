import React from "react";
import { useController } from "react-hook-form";

const Input = ({ name = "", type = "text", children, control, ...props }) => {
    const { field } = useController({
        name,
        control,
        defaultValue: "",
    });
    return (
        <div className="relative w-full">
            <input
                type={type}
                id={name}
                {...field}
                {...props}
                hasicon={children ? "true" : "false"}
                className={`p-4 w-full text-slate-900 text-base border border-slate-900 rounded-lg bg-white outline-none transition-all focus:border-[#8DC647] ${
                    children ? "pr-12" : ""
                }`}
            />
            {children}
        </div>
    );
};

export default Input;
