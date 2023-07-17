import { ShoppingBagIcon } from "@heroicons/react/24/solid";

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

const NavBar = () => {
    const activeStyle = "underline underline-offset-4";
    const context = useContext(ShoppingCartContext);

    return (
        <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">Lend</NavLink>
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
                <li className="text-black/60">customer-service@lend.com</li>
                <li>
                    <NavLink
                        to="/my-orders"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-account"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        {" "}
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-order"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        {" "}
                        My Order
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/sign-in"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        {" "}
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center">
                    <ShoppingBagIcon className="w-6 h-6" />
                    <div>
                        {context.cartProducts.length}
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
