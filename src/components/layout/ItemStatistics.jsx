import React from "react";

const ItemStatistics = ({ children, title = "", className = "" }) => {
    return (
        <div
            className={`${className} flex items-center justify-between relative info-line text-sm mb-8`}
        >
            <span className="capitalize">{title}</span>
            <span className="font-semibold">{children}</span>
        </div>
    );
};

export default ItemStatistics;
