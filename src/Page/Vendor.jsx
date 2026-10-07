import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    FiArrowLeft,
    FiSearch,
    FiStar,
} from "react-icons/fi";

import vendors from "../Data/Vendors";
import menu from "../Data/Menu";
import ProductCard from "../components/ProductCard";

const Vendor = () => {
    const { id } = useParams();

    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Find the vendor
    const vendor = vendors.find((item) => item.id === id);

    // Get this vendor's products
    const vendorProducts = useMemo(() => {
        if (!vendor) return [];

        return menu.filter(
            (product) => product.vendorId === vendor.id
        );
    }, [vendor]);

    // Create categories automatically from this vendor's products
    const categories = useMemo(() => {
        const uniqueCategories = vendorProducts
            .map((product) => product.subcategory)
            .filter(Boolean);

        return ["All", ...new Set(uniqueCategories)];
    }, [vendorProducts]);

    // Filter products
    const filteredProducts = useMemo(() => {
        const searchValue = search.trim().toLowerCase();

        return vendorProducts.filter((product) => {
            const matchesCategory =
                selectedCategory === "All" ||
                product.subcategory === selectedCategory;

            const matchesSearch =
                !searchValue ||
                product.name.toLowerCase().includes(searchValue) ||
                product.description.toLowerCase().includes(searchValue);

            return matchesCategory && matchesSearch;
        });
    }, [
        vendorProducts,
        selectedCategory,
        search,
    ]);

    // Vendor doesn't exist
    if (!vendor) {
        return (
            <section className="min-h-[70vh] bg-[#FFF8F0] px-4 py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-3xl font-bold text-[#4A2C1A]">
                        Vendor Not Found
                    </h1>

                    <p className="mt-3 text-stone-600">
                        Sorry, we couldn't find the vendor you're looking for.
                    </p>

                    <Link
                        to="/"
                        className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                    >
                        <FiArrowLeft />
                        Back Home
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-[#FFF8F0] py-10 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Back */}
                <Link
                    to="/"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4A2C1A] transition hover:text-orange-500"
                >
                    <FiArrowLeft />
                    Back to Vendors
                </Link>

                {/* Vendor Header */}
                <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                    <div className="grid lg:grid-cols-2">

                        {/* Image */}
                        <div className="h-72 overflow-hidden sm:h-96 lg:h-[420px]">
                            <img
                                src={vendor.image}
                                alt={vendor.name}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Details */}
                        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
                            <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
                                Food Vendor
                            </span>

                            <h1 className="mt-3 text-3xl font-bold text-[#4A2C1A] sm:text-4xl lg:text-5xl">
                                {vendor.name}
                            </h1>

                            <div className="mt-4 flex items-center gap-2">
                                <div className="flex items-center gap-1 text-orange-500">
                                    <FiStar className="fill-current" />
                                    <span className="font-bold">
                                        {vendor.rating}
                                    </span>
                                </div>

                                <span className="text-sm text-stone-500">
                                    Customer rating
                                </span>
                            </div>

                            <p className="mt-6 max-w-xl leading-7 text-stone-600">
                                {vendor.description}
                            </p>

                            <div className="mt-8 rounded-2xl bg-orange-50 p-5">
                                <p className="text-sm font-semibold text-stone-500">
                                    Available meals
                                </p>

                                <p className="mt-1 text-2xl font-bold text-[#4A2C1A]">
                                    {vendorProducts.length}{" "}
                                    {vendorProducts.length === 1
                                        ? "item"
                                        : "items"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu Section */}
                <div className="mt-14">

                    {/* Heading + Search */}
                    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                        <div>
                            <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
                                {vendor.name}
                            </span>

                            <h2 className="mt-2 text-3xl font-bold text-[#4A2C1A]">
                                Our Menu
                            </h2>

                            <p className="mt-2 text-stone-600">
                                Choose from the meals available from this vendor.
                            </p>
                        </div>

                        <div className="relative w-full md:max-w-sm">
                            <FiSearch
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                                size={19}
                            />

                            <input
                                type="text"
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                placeholder="Search this menu..."
                                className="w-full rounded-xl border border-stone-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="mt-8 overflow-x-auto pb-2">
                        <div className="flex min-w-max gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setSelectedCategory(category)}
                                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${selectedCategory === category
                                            ? "bg-orange-500 text-white shadow-sm"
                                            : "bg-white text-stone-600 hover:bg-orange-50 hover:text-orange-500"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    {filteredProducts.length > 0 ? (
                        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="mt-8 rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
                            <h3 className="text-xl font-bold text-[#4A2C1A]">
                                No meals found
                            </h3>

                            <p className="mt-2 text-stone-500">
                                Try another category or search for another meal.
                            </p>

                            <button
                                type="button"
                                onClick={() => {
                                    setSearch("");
                                    setSelectedCategory("All");
                                }}
                                className="mt-5 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Vendor;

