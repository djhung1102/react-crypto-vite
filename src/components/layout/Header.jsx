import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import SearchModal from "./SearchModal";

const Header = () => {
    return (
        <Fragment>
            <header className="flex items-center justify-between py-3 px-5">
                <div className="flex gap-x-5 font-semibold">
                    <img src="/logo1.png" alt="" />
                    <NavLink to="/" className="flex items-center no-underline">
                        Cryptocurrencies
                    </NavLink>
                    <NavLink to="/exchanges" className="flex items-center no-underline">
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
