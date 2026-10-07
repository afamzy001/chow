import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../Data/products.js";

const PopularProducts = () => {
    const popularProducts = products
        .filter((product) => product.popular)
        .slice(0, 6);

    return (
        <section className="bg-[#FFF8F0] py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                    <div className="max-w-2xl">
                        <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                            Customer Favorites
                        </span>

                        <h2 className="mt-4 text-3xl font-bold text-[#4A2C1A] sm:text-4xl">
                            Popular Picks
                        </h2>

                        <p className="mt-3 text-base leading-7 text-stone-600">
                            Discover some of our most loved meals, cakes and freshly baked
                            treats.
                        </p>
                    </div>

                    <Link
                        to="/menu"
                        className="inline-flex w-fit items-center rounded-full border border-orange-500 px-5 py-2.5 text-sm font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
                    >
                        View Full Menu
                    </Link>
                </div>

                {/* Products */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {popularProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PopularProducts;

