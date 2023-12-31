import { ShoppingBagIcon } from "@heroicons/react/24/solid";

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import ShoppingCart from "../ShoppingCart";

const NavBar = () => {
    const activeStyle = "underline underline-offset-4";
    const context = useContext(ShoppingCartContext);

    // * sign out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    //* Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)

    // * Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length == 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignOut = () => {
        const stringfiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringfiedSignOut)
        context.setSignOut(true)
    }

    const renderView = () => {
        if (hasUserAnAccount && !isUserSignOut) {
            return (
                <>
                    <li className="text-black/60">{parsedAccount?.email}</li>
                    <li>
                        <NavLink
                            to="/my-orders"
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/my-account"
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            My Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/my-order"
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            My Order
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/sign-in"
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </NavLink>
                    </li>
                </>
            )
        } else {
            return (
                <li>
                    <NavLink
                        to="/sign-in"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => handleSignOut()}
                    >
                        Sign In
                    </NavLink>
                </li>
            )
        }
    }
    return (
        <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to={isUserSignOut ? '/sign-in' : '/'}>Lend</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/furnitures"
                        onClick={() => context.setSearchByCategory('furniture')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/others"
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                {renderView()}
                <li className="flex items-center">
                    <ShoppingCart />
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
