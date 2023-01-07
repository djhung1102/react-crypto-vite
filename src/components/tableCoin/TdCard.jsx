import React from "react";

const TdCard = ({ className, type = "left", children }) => {
    return <td className={`text-${type} ${className}`}>{children}</td>;
};

export default TdCard;
