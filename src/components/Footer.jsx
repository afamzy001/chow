import { Link } from "react-router-dom";
import {
    FiFacebook,
    FiInstagram,
    FiTwitter,
    FiMail,
    FiPhone,
    FiMapPin,
    FiArrowRight,
} from "react-icons/fi";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#4A2C1A] text-white">

            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link to="/" className="inline-flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-extrabold">
                                F
                            </div>

                            <div>
                                <h2 className="text-xl font-extrabold leading-none">
                                    Foodie
                                </h2>
                                <span className="text-xs text-orange-200">
                                    Food & Treats
                                </span>
                            </div>
                        </Link>

                        <p className="mt-5 max-w-xs text-sm leading-6 text-orange-100/75">
                            Delicious meals, beautiful cakes, and tasty cookies made with
                            care and delivered straight to your doorstep.
                        </p>

                        {/* Social icons */}
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-orange-500"
                            >
                                <FiFacebook size={18} />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-orange-500"
                            >
                                <FiInstagram size={18} />
                            </a>

                            <a
                                href="#"
                                aria-label="Twitter"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-orange-500"
                            >
                                <FiTwitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base font-bold">Quick Links</h3>

                        <ul className="mt-5 space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="text-sm text-orange-100/75 transition hover:text-orange-300"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/menu"
                                    className="text-sm text-orange-100/75 transition hover:text-orange-300"
                                >
                                    Menu
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/cakes"
                                    className="text-sm text-orange-100/75 transition hover:text-orange-300"
                                >
                                    Cakes
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/cookies"
                                    className="text-sm text-orange-100/75 transition hover:text-orange-300"
                                >
                                    Cookies
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="text-sm text-orange-100/75 transition hover:text-orange-300"
                                >
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Support */}
                    <div>
                        <h3 className="text-base font-bold">Customer Support</h3>

                        <ul className="mt-5 space-y-3">
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-sm text-orange-100/75 transition hover:text-orange-300"
                                >
                                    Contact Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/cart"
                                    className="text-sm text-orange-100/75 transition hover:text-orange-300"
                                >
                                    My Cart
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/delivery"
                                    className="text-sm text-orange-100/75 transition hover:text-orange-300"
                                >
                                    Delivery Information
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/terms"
                                    className="text-sm text-orange-100/75 transition hover:text-orange-300"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/privacy"
                                    className="text-sm text-orange-100/75 transition hover:text-orange-300"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-base font-bold">Get In Touch</h3>

                        <ul className="mt-5 space-y-4">
                            <li className="flex items-start gap-3">
                                <FiMapPin className="mt-1 shrink-0 text-orange-400" size={18} />

                                <span className="text-sm leading-6 text-orange-100/75">
                                    Nigeria
                                </span>
                            </li>

                            <li className="flex items-center gap-3">
                                <FiPhone className="shrink-0 text-orange-400" size={18} />

                                <a
                                    href="tel:+2340000000000"
                                    className="text-sm text-orange-100/75 transition hover:text-orange-300"
                                >
                                    +234 000 000 0000
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <FiMail className="shrink-0 text-orange-400" size={18} />

                                <a
                                    href="mailto:hello@example.com"
                                    className="break-all text-sm text-orange-100/75 transition hover:text-orange-300"
                                >
                                    hello@example.com
                                </a>
                            </li>
                        </ul>

                        {/* Newsletter */}
                        <div className="mt-6">
                            <p className="mb-3 text-sm font-semibold">
                                Get special offers
                            </p>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition hover:text-orange-200"
                            >
                                Subscribe to updates
                                <FiArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
                    <p className="text-xs text-orange-100/60 sm:text-sm">
                        © {currentYear} Foodie Food & Treats. All rights reserved.
                    </p>

                    <p className="text-xs text-orange-100/60 sm:text-sm">
                        Fresh food. Sweet moments. ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

