import { Link } from "react-router-dom";
import { FiArrowRight, FiMapPin, FiStar } from "react-icons/fi";

import vendors from "../Data/Vendors";

const FoodVendors = () => {
    return (
        <section className="bg-[#FFF8F0] py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
                            Our Food Vendors
                        </span>

                        <h2 className="mt-2 text-3xl font-bold text-[#4A2C1A] sm:text-4xl">
                            Choose a vendor
                        </h2>

                        <p className="mt-3 max-w-2xl leading-7 text-stone-600">
                            Explore trusted food vendors and discover the delicious meals
                            they have available for you.
                        </p>
                    </div>

                    <Link
                        to="/vendors"
                        className="inline-flex items-center gap-2 font-bold text-orange-500 transition hover:text-orange-600"
                    >
                        View all vendors
                        <FiArrowRight />
                    </Link>
                </div>

                {/* Vendor Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {vendors.slice(0, 6).map((vendor) => (
                        <Link
                            key={vendor.id}
                            to={`/vendor/${vendor.id}`}
                            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Vendor Image */}
                            <div className="relative h-56 overflow-hidden bg-orange-50">
                                <img
                                    src={vendor.image}
                                    alt={vendor.name}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                {/* Rating */}
                                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-semibold shadow-sm">
                                    <FiStar className="fill-orange-500 text-orange-500" size={15} />
                                    <span className="text-[#4A2C1A]">{vendor.rating}</span>
                                </div>
                            </div>

                            {/* Vendor Information */}
                            <div className="p-5">
                                <div className="flex items-center gap-2 text-sm text-orange-500">
                                    <FiMapPin size={15} />
                                    <span>{vendor.category}</span>
                                </div>

                                <h3 className="mt-2 text-xl font-bold text-[#4A2C1A] transition group-hover:text-orange-500">
                                    {vendor.name}
                                </h3>

                                <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-500">
                                    {vendor.description}
                                </p>

                                <div className="mt-5 inline-flex items-center gap-2 font-bold text-orange-500">
                                    Explore vendor
                                    <FiArrowRight
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                        size={17}
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FoodVendors;

