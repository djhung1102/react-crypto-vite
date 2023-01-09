import React from "react";

const Introduce = ({ children, title = "", tag = "" }) => {
    return (
        <div className="title-intro">
            <h2 className="font-bold text-2xl mb-4">{title}</h2>
            <h3 className="mb-4 text-sm text-gray-500">{children}</h3>
            <div className="flex items-center justify-between mb-4">
                <span className="capitalize px-3 py-2 border border-gray-400 rounded-3xl text-sm font-medium select-none">
                    {tag}
                </span>
            </div>
        </div>
    );
};

export default Introduce;
