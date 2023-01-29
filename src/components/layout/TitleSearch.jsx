import React from "react";

const TitleSearch = ({ children }) => {
    return (
        <div className="flex flex-col">
            <span className="px-3 text-xs text-gray-400">{children}</span>
            <span className="w-full h-[1px] bg-gray-200 mt-1"></span>
        </div>
    );
};

export default TitleSearch;
