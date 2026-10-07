import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    FiMenu,
    FiX,
    FiShoppingCart,
    FiUser,
} from "react-icons/fi";
import logoimg from "../assets/logo.png";

import { useCart } from "../Context/CartContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { cartCount } = useCart();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/menu" },
        { name: "Cakes", path: "/cakes" },
        { name: "Cookies", path: "/cookies" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-orange-500">
                            <img
                                src={logoimg}
                                alt="Foodie Logo"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <div className="hidden sm:block">
                            <p className="text-lg font-bold leading-none text-[#4A2C1A]">
                                Foodie
                            </p>

                            <p className="mt-1 text-xs text-stone-500">
                                Food & Treats
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-7 lg:flex">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-semibold transition ${isActive
                                        ? "text-orange-500"
                                        : "text-stone-600 hover:text-orange-500"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-3 sm:flex">
                        {/* Cart */}
                        <Link
                            to="/cart"
                            className="relative flex h-11 w-11 items-center justify-center rounded-full text-[#4A2C1A] transition hover:bg-orange-50 hover:text-orange-500"
                            aria-label="Shopping cart"
                        >
                            <FiShoppingCart size={21} />

                            {cartCount > 0 && (
                                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[11px] font-bold text-white">
                                    {cartCount > 99 ? "99+" : cartCount}
                                </span>
                            )}
                        </Link>

                        {/* Login */}
                        <Link
                            to="/login"
                            className="flex items-center gap-2 rounded-full border border-orange-200 px-4 py-2.5 text-sm font-semibold text-[#4A2C1A] transition hover:bg-orange-50"
                        >
                            <FiUser size={17} />
                            Login
                        </Link>

                        {/* Order Now */}
                        <Link
                            to="/menu"
                            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
                        >
                            Order Now
                        </Link>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex items-center gap-2 sm:hidden">
                        <Link
                            to="/cart"
                            className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#4A2C1A]"
                            aria-label="Shopping cart"
                        >
                            <FiShoppingCart size={21} />

                            {cartCount > 0 && (
                                <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                                    {cartCount > 99 ? "99+" : cartCount}
                                </span>
                            )}
                        </Link>

                        <button
                            type="button"
                            onClick={() => setIsOpen((current) => !current)}
                            className="flex h-10 w-10 items-center justify-center rounded-full text-[#4A2C1A]"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="border-t border-orange-100 py-5 lg:hidden">
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        `rounded-xl px-4 py-3 text-sm font-semibold transition ${isActive
                                            ? "bg-orange-50 text-orange-500"
                                            : "text-stone-600 hover:bg-orange-50 hover:text-orange-500"
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}

                            <Link
                                to="/login"
                                onClick={closeMenu}
                                className="mt-2 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-[#4A2C1A] hover:bg-orange-50"
                            >
                                <FiUser />
                                Login
                            </Link>

                            <Link
                                to="/menu"
                                onClick={closeMenu}
                                className="mt-1 rounded-xl bg-orange-500 px-4 py-3 text-center text-sm font-bold text-white hover:bg-orange-600"
                            >
                                Order Now
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;

