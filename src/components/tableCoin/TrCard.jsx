import React from "react";

const TrCard = ({ className = "", children, ...props }) => {
    return (
        <tr className={className} {...props}>
            {children}
        </tr>
    );
};

export default TrCard;
