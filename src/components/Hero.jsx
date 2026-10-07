
import { Link } from "react-router-dom";
import {
    FiArrowRight,
    FiCheckCircle,
    FiStar,
} from "react-icons/fi";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-[#FFF8F0]">
            {/* Decorative background shapes */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* =========================
              LEFT CONTENT
          ========================== */}
                    <div className="max-w-2xl">

                        {/* Small badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 shadow-sm">
                            <FiStar
                                className="fill-orange-400 text-orange-400"
                                size={16}
                            />

                            <span className="text-sm font-semibold text-[#4A2C1A]">
                                Freshly made with love
                            </span>
                        </div>

                        {/* Main heading */}
                        <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#4A2C1A] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                            Delicious food.
                            <span className="block text-orange-500">
                                Sweet moments.
                            </span>
                            <span className="block">
                                Delivered to you.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
                            Enjoy freshly prepared meals, beautiful cakes, and delicious
                            cookies made with quality ingredients and delivered straight
                            to your doorstep.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                            <Link
                                to="/menu"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl"
                            >
                                Order Now
                                <FiArrowRight size={18} />
                            </Link>

                            <Link
                                to="/cakes"
                                className="inline-flex items-center justify-center rounded-full border-2 border-[#4A2C1A]/10 bg-white px-7 py-3.5 text-sm font-bold text-[#4A2C1A] transition duration-300 hover:border-orange-300 hover:bg-orange-50"
                            >
                                Explore Cakes
                            </Link>

                        </div>

                        {/* Trust points */}
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                            <div className="flex items-center gap-2">
                                <FiCheckCircle
                                    className="text-orange-500"
                                    size={18}
                                />

                                <span className="text-sm font-medium text-stone-600">
                                    Fresh ingredients
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <FiCheckCircle
                                    className="text-orange-500"
                                    size={18}
                                />

                                <span className="text-sm font-medium text-stone-600">
                                    Secure payment
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <FiCheckCircle
                                    className="text-orange-500"
                                    size={18}
                                />

                                <span className="text-sm font-medium text-stone-600">
                                    Fast delivery
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* =========================
              RIGHT IMAGE
          ========================== */}
                    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

                        {/* Main image container */}
                        <div className="relative overflow-hidden rounded-[2rem] bg-orange-100 shadow-2xl shadow-orange-900/10">

                            <img
                                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85"
                                alt="Freshly prepared food served on a table"
                                className="h-[380px] w-full object-cover sm:h-[480px] lg:h-[560px]"
                            />

                            {/* Image overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C1A]/35 via-transparent to-transparent" />
                        </div>

                        {/* Rating card */}
                        <div className="absolute left-3 top-5 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-xl sm:left-5 sm:top-8 sm:p-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                                <FiStar
                                    className="fill-orange-400"
                                    size={19}
                                />
                            </div>

                            <div>
                                <p className="text-sm font-bold text-[#4A2C1A]">
                                    4.9 / 5
                                </p>

                                <p className="text-xs text-stone-500">
                                    Happy customers
                                </p>
                            </div>
                        </div>

                        {/* Delivery card */}
                        <div className="absolute bottom-5 right-3 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-xl sm:bottom-8 sm:right-5 sm:p-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
                                <FiCheckCircle size={19} />
                            </div>

                            <div>
                                <p className="text-sm font-bold text-[#4A2C1A]">
                                    Fresh & Ready
                                </p>

                                <p className="text-xs text-stone-500">
                                    Made for your order
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
