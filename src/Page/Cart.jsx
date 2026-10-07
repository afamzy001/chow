import { Link } from "react-router-dom";
import {
    FiArrowLeft,
    FiMinus,
    FiPlus,
    FiShoppingBag,
    FiTrash2,
} from "react-icons/fi";

import { useCart } from "../Context/CartContext";

const Cart = () => {
    const {
        cartItems,
        cartTotal,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    const deliveryFee = cartItems.length > 0 ? 1500 : 0;
    const grandTotal = cartTotal + deliveryFee;

    const formatPrice = (price) =>
        new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
            maximumFractionDigits: 0,
        }).format(price);

    // Empty cart
    if (cartItems.length === 0) {
        return (
            <section className="min-h-[70vh] bg-[#FFF8F0] px-4 py-16">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                        <FiShoppingBag size={34} />
                    </div>

                    <h1 className="mt-6 text-3xl font-bold text-[#4A2C1A]">
                        Your cart is empty
                    </h1>

                    <p className="mt-3 text-stone-600">
                        Looks like you haven't added anything to your cart yet.
                    </p>

                    <Link
                        to="/menu"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
                    >
                        <FiArrowLeft />
                        Browse Menu
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-[#FFF8F0] py-10 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-10">
                    <Link
                        to="/menu"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A2C1A] transition hover:text-orange-500"
                    >
                        <FiArrowLeft />
                        Continue Shopping
                    </Link>

                    <h1 className="mt-5 text-3xl font-bold text-[#4A2C1A] sm:text-4xl">
                        Your Cart
                    </h1>

                    <p className="mt-2 text-stone-600">
                        {cartItems.length}{" "}
                        {cartItems.length === 1 ? "item" : "different items"} in your
                        cart.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
                    {/* Cart Items */}
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={`${item.id}-${item.protein || ""}-${item.swallow || ""}`}
                                className="rounded-2xl bg-white p-4 shadow-sm sm:p-5"
                            >
                                <div className="flex gap-4">
                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-32 sm:w-32"
                                    />

                                    {/* Information */}
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <h2 className="font-bold text-[#4A2C1A] sm:text-lg">
                                                    {item.name}
                                                </h2>

                                                {item.protein && (
                                                    <p className="mt-1 text-sm text-stone-500">
                                                        Protein: {item.protein}
                                                    </p>
                                                )}

                                                {item.swallow && (
                                                    <p className="text-sm text-stone-500">
                                                        Swallow: {item.swallow}
                                                    </p>
                                                )}
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeFromCart(
                                                        item.id,
                                                        item.protein || "",
                                                        item.swallow || ""
                                                    )
                                                }
                                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-red-500 transition hover:bg-red-50"
                                                aria-label={`Remove ${item.name}`}
                                            >
                                                <FiTrash2 />
                                            </button>
                                        </div>

                                        {/* Price + Quantity */}
                                        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                                            <p className="font-bold text-orange-500">
                                                {formatPrice(item.price * item.quantity)}
                                            </p>

                                            <div className="flex items-center overflow-hidden rounded-xl border border-stone-200">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        decreaseQuantity(
                                                            item.id,
                                                            item.protein || "",
                                                            item.swallow || ""
                                                        )
                                                    }
                                                    className="flex h-10 w-10 items-center justify-center text-[#4A2C1A] transition hover:bg-orange-50"
                                                    aria-label="Decrease quantity"
                                                >
                                                    <FiMinus size={16} />
                                                </button>

                                                <span className="flex h-10 w-12 items-center justify-center border-x border-stone-200 text-sm font-bold text-[#4A2C1A]">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        increaseQuantity(
                                                            item.id,
                                                            item.protein || "",
                                                            item.swallow || ""
                                                        )
                                                    }
                                                    className="flex h-10 w-10 items-center justify-center text-[#4A2C1A] transition hover:bg-orange-50"
                                                    aria-label="Increase quantity"
                                                >
                                                    <FiPlus size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <div className="rounded-2xl bg-white p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-[#4A2C1A]">
                                Order Summary
                            </h2>

                            <div className="mt-6 space-y-4">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-stone-500">
                                        Subtotal
                                    </span>

                                    <span className="font-semibold text-[#4A2C1A]">
                                        {formatPrice(cartTotal)}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-stone-500">
                                        Delivery
                                    </span>

                                    <span className="font-semibold text-[#4A2C1A]">
                                        {formatPrice(deliveryFee)}
                                    </span>
                                </div>

                                <div className="h-px bg-stone-200" />

                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-[#4A2C1A]">
                                        Total
                                    </span>

                                    <span className="text-xl font-bold text-orange-500">
                                        {formatPrice(grandTotal)}
                                    </span>
                                </div>
                            </div>

                            <Link
                                to="/checkout"
                                className="mt-7 flex w-full items-center justify-center rounded-xl bg-orange-500 px-5 py-4 font-bold text-white transition hover:bg-orange-600"
                            >
                                Proceed to Checkout
                            </Link>

                            <p className="mt-4 text-center text-xs leading-5 text-stone-500">
                                Secure payment will be handled through Paystack at checkout.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;

