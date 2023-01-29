import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchIcon from "../../assets/icon/SearchIcon";
import Search from "../item/Search";

const SearchModal = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [coords, setCoords] = useState({});
    const handleOnSearch = (e) => {
        const clientRect = e.target.getBoundingClientRect();
        setCoords(clientRect);
        setShowSearch(!showSearch);
    };
    return (
        <div className="relative w-[150px]">
            <div
                className="w-full flex items-center gap-x-1 bg-gray-200 py-2 px-2 rounded-lg text-sm text-gray-500 cursor-text hover:text-gray-700 leading-6"
                onClick={handleOnSearch}
            >
                <SearchIcon></SearchIcon>
            </div>
            {showSearch && <SearchContent coords={coords}></SearchContent>}
        </div>
    );
};

function SearchContent({ coords }) {
    if (typeof document === "undefined") return null;
    return ReactDOM.createPortal(
        <div
            className="absolute top-20 right-0 z-50 bg-white rounded-lg"
            style={{
                top: coords.top + coords.height * 1.5 + window.scrollY,
                right: coords.right - coords.right / 2 - coords.right / 2.1,
                width: coords.width * 2.5,
            }}
        >
            <Search></Search>
        </div>,
        document.querySelector("body")
    );
}

export default SearchModal;
