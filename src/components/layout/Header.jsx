import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import SearchModal from "./SearchModal";

const Header = () => {
    return (
        <Fragment>
            <header className="flex items-center justify-between py-3 px-5 select-none">
                <div className="flex gap-x-5 font-semibold">
                    <NavLink to="/">
                        <img
                            src="/logo-2.png"
                            alt=""
                            className="h-[35px] cursor-pointer flex items-center"
                        />
                    </NavLink>
                    <NavLink to="/" className="flex items-end no-underline">
                        Cryptocurrencies
                    </NavLink>
                    <NavLink to="/exchanges" className="flex items-end no-underline">
                        Exchanges
                    </NavLink>
                </div>
                <div className="font-semibold flex items-center gap-x-5">
                    <NavLink to="/sign-in">
                        <button className="text-white px-5 py-2 bg-[#69A235] rounded-lg">
                            Login
                        </button>
                    </NavLink>
                    <NavLink to="/sign-up">
                        <button className="text-white px-5 py-2 bg-[#69A235] rounded-lg">
                            Sign up
                        </button>
                    </NavLink>
                    <div>
                        <SearchModal></SearchModal>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
