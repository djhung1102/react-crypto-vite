import React, { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom = "button") {
    const [show, setShow] = useState(false);
    const nodeRef = useRef(null);
    useEffect(() => {
        function handleClickOut(e) {
            if (nodeRef.current && !nodeRef.current.contains(e.target) && !e.target.matches(dom)) {
                setShow(false);
            }
        }
        document.addEventListener("click", handleClickOut);
        // clean up code
        return () => {
            document.removeEventListener("click", handleClickOut);
        };
    }, []);
    return {
        show,
        setShow,
        nodeRef,
    };
}
