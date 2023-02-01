import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchIcon from "../../assets/icon/SearchIcon";
import useClickOutSide from "../../hooks/useClickOutSide";
import Search from "../item/Search";

const SearchModal = () => {
    // const [coords, setCoords] = useState({});
    const { show, setShow, nodeRef } = useClickOutSide();
    const handleOnSearch = (e) => {
        // const clientRect = e.target.getBoundingClientRect();
        // setCoords(clientRect);
        setShow(!show);
    };
    return (
        <div className="relative w-[150px]">
            <button
                className="w-full flex items-center gap-x-1 cursor-text bg-gray-200 py-2 px-2 rounded-lg text-sm text-gray-500 hover:text-gray-700 leading-6"
                onClick={handleOnSearch}
            >
                <SearchIcon></SearchIcon>
                Search
            </button>
            <SearchContent show={show} ref={nodeRef}></SearchContent>
        </div>
    );
};

const SearchContent = React.forwardRef((props, ref) => {
    if (typeof document === "undefined") return null;
    return ReactDOM.createPortal(
        <div
            className={`absolute top-20 w-[400px] right-5 z-50 bg-white rounded-lg transition-all ${
                props.show ? "block" : "hidden"
            }`}
            ref={ref}
            // style={{
            //     top: coords.top + coords.height * 1.5 + window.scrollY,
            //     right: coords.right - coords.right / 2 - coords.right / 2.1,
            //     width: coords.width * 2.5,
            // }}
        >
            <Search></Search>
        </div>,
        document.querySelector("body")
    );
});

export default SearchModal;
