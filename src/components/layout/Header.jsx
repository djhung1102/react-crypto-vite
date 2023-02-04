import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "../../assets/icon/MenuIcon";
import XMarkIcon from "../../assets/icon/XMarkIcon";
import SearchModal from "./SearchModal";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <Fragment>
            <header className="flex items-center justify-between py-3 px-3 lg:px-5 select-none">
                <div className="flex gap-x-5 font-semibold">
                    <NavLink to="/">
                        <img
                            src="/logo-2.png"
                            alt=""
                            className="h-[35px] cursor-pointer flex items-center"
                        />
                    </NavLink>
                    <div className="hidden lg:flex lg:gap-x-5">
                        <NavLink to="/" className="flex items-end no-underline">
                            Cryptocurrencies
                        </NavLink>
                        <NavLink to="/exchanges" className="flex items-end no-underline">
                            Exchanges
                        </NavLink>
                    </div>
                </div>

                <div className="">
                    {openMenu ? (
                        <span onClick={handleMenu} className="lg:hidden">
                            <XMarkIcon></XMarkIcon>
                        </span>
                    ) : (
                        <span onClick={handleMenu} className="lg:hidden">
                            <MenuIcon></MenuIcon>
                        </span>
                    )}
                    {openMenu && (
                        <div className="absolute right-8 py-4 px-8 bg-gray-200 text-center text-black text-base flex flex-col gap-3 select-none font-medium rounded-lg z-50">
                            <NavLink to="/" className="flex items-end no-underline">
                                Cryptocurrencies
                            </NavLink>
                            <NavLink to="/exchanges" className="flex items-end no-underline">
                                Exchanges
                            </NavLink>
                            <NavLink to="/sign-in" className="flex items-center">
                                Login
                            </NavLink>
                            <NavLink to="/sign-up" className="flex items-center">
                                Sign Up
                            </NavLink>
                        </div>
                    )}

                    <div className="hidden font-semibold lg:flex items-center gap-x-5">
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
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
