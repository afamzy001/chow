
import { useMemo, useState } from "react";
import { FiSearch, FiSliders } from "react-icons/fi";
import ProductCard from "../components/ProductCard";
import products from "../Data/products";
import categories from "../Data/categories.js";



const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory =
                activeCategory === "all" ||
                product.category === activeCategory;

            const searchText = searchTerm.trim().toLowerCase();

            const matchesSearch =
                searchText === "" ||
                product.name.toLowerCase().includes(searchText) ||
                product.description.toLowerCase().includes(searchText);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    return (
        <main className="min-h-screen bg-[#FFF8F0]">

            {/* =========================
          PAGE HEADER
      ========================== */}
            <section className="border-b border-orange-100 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 md:py-16 lg:px-8">

                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                        <FiSliders size={15} />
                        Our Menu
                    </span>

                    <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#4A2C1A] sm:text-5xl">
                        Something Delicious
                        <span className="text-orange-500"> Awaits You</span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
                        Explore our selection of freshly prepared meals, beautiful cakes,
                        and delicious cookies made for every occasion.
                    </p>
                </div>
            </section>

            {/* =========================
          FILTER AREA
      ========================== */}
            <section className="sticky top-20 z-30 border-b border-orange-100 bg-[#FFF8F0]/95 py-4 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

                    {/* Categories */}
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {categories.map((category) => {
                            const isActive = activeCategory === category.id;

                            return (
                                <button
                                    key={category.id}
                                    type="button"
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${isActive
                                        ? "bg-orange-500 text-white shadow-md"
                                        : "bg-white text-stone-600 hover:bg-orange-100 hover:text-orange-600"
                                        }`}
                                >
                                    {category.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:max-w-xs">
                        <FiSearch
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                            size={18}
                        />

                        <input
                            type="search"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            placeholder="Search food, cakes..."
                            className="w-full rounded-full border border-orange-100 bg-white py-3 pl-11 pr-4 text-sm text-stone-700 outline-none transition placeholder:text-stone-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                        />
                    </div>
                </div>
            </section>

            {/* =========================
          PRODUCTS
      ========================== */}
            <section className="py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* Results heading */}
                    <div className="mb-8 flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold text-[#4A2C1A]">
                                {activeCategory === "all"
                                    ? "All Products"
                                    : categories.find(
                                        (category) => category.id === activeCategory
                                    )?.label}
                            </h2>

                            <p className="mt-1 text-sm text-stone-500">
                                {filteredProducts.length}{" "}
                                {filteredProducts.length === 1
                                    ? "item"
                                    : "items"}{" "}
                                available
                            </p>
                        </div>
                    </div>

                    {/* Product grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    ) : (
                        /* Empty state */
                        <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                                <FiSearch size={26} />
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-[#4A2C1A]">
                                No products found
                            </h3>

                            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-stone-500">
                                We couldn't find anything matching your search. Try another
                                search term or select a different category.
                            </p>

                            <button
                                type="button"
                                onClick={() => {
                                    setSearchTerm("");
                                    setActiveCategory("all");
                                }}
                                className="mt-6 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                            >
                                View All Products
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};
export default Menu;

