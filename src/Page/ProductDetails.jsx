import { Link } from "react-router-dom";
import { FiShoppingCart, FiStar } from "react-icons/fi";

import { useCart } from "../Context/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const formatPrice = (price) => {
        return new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
            maximumFractionDigits: 0,
        }).format(price);
    };

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            protein: "",
            swallow: "",
        });
    };

    return (
        <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Product Image */}
            <Link to={`/product/${product.id}`} className="block">
                <div className="relative h-60 overflow-hidden bg-orange-50">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {product.popular && (
                        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-bold text-white">
                            Popular
                        </span>
                    )}
                </div>
            </Link>

            {/* Product Information */}
            <div className="p-5">
                {/* Category + Rating */}
                <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                        {product.category}
                    </span>

                    <div className="flex items-center gap-1 text-sm text-orange-500">
                        <FiStar className="fill-current" size={14} />
                        <span className="font-semibold">{product.rating}</span>
                    </div>
                </div>

                {/* Product Name */}
                <Link to={`/product/${product.id}`}>
                    <h3 className="mt-2 text-lg font-bold text-[#4A2C1A] transition hover:text-orange-500">
                        {product.name}
                    </h3>
                </Link>

                {/* Description */}
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-500">
                    {product.description}
                </p>

                {/* Price + Cart */}
                <div className="mt-5 flex items-center justify-between gap-3">
                    <p className="text-lg font-bold text-orange-500">
                        {formatPrice(product.price)}
                    </p>

                    <button
                        type="button"
                        onClick={handleAddToCart}
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white transition hover:bg-orange-600"
                        aria-label={`Add ${product.name} to cart`}
                    >
                        <FiShoppingCart size={19} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

