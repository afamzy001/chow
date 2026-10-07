import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const getCartItemKey = (item) => {
        return `${item.id}-${item.protein || ""}-${item.swallow || ""}`;
    };

    const addToCart = (product) => {
        setCartItems((currentItems) => {
            const quantityToAdd = product.quantity || 1;
            const newItemKey = getCartItemKey(product);

            const existingItem = currentItems.find(
                (item) => getCartItemKey(item) === newItemKey
            );

            if (existingItem) {
                return currentItems.map((item) =>
                    getCartItemKey(item) === newItemKey
                        ? {
                            ...item,
                            quantity: item.quantity + quantityToAdd,
                        }
                        : item
                );
            }

            return [
                ...currentItems,
                {
                    ...product,
                    quantity: quantityToAdd,
                },
            ];
        });
    };

    const increaseQuantity = (id, protein = "", swallow = "") => {
        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === id &&
                    (item.protein || "") === protein &&
                    (item.swallow || "") === swallow
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            )
        );
    };

    const decreaseQuantity = (id, protein = "", swallow = "") => {
        setCartItems((currentItems) =>
            currentItems
                .map((item) =>
                    item.id === id &&
                        (item.protein || "") === protein &&
                        (item.swallow || "") === swallow
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (id, protein = "", swallow = "") => {
        setCartItems((currentItems) =>
            currentItems.filter(
                (item) =>
                    !(
                        item.id === id &&
                        (item.protein || "") === protein &&
                        (item.swallow || "") === swallow
                    )
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = useMemo(() => {
        return cartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );
    }, [cartItems]);

    const cartTotal = useMemo(() => {
        return cartItems.reduce(
            (total, item) =>
                total + Number(item.price || 0) * item.quantity,
            0
        );
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                cartCount,
                cartTotal,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used inside a CartProvider");
    }

    return context;
};