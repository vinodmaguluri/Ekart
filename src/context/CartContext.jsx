import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      // If exists, increase qty
      const idx = prev.findIndex((x) => x.id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const decreaseQty = (productId) => {
    setCartItems((prev) => {
      const idx = prev.findIndex((x) => x.id === productId);
      if (idx < 0) return prev;
      const copy = [...prev];
      const item = copy[idx];
      if (item.qty <= 1) return copy.filter((x) => x.id !== productId);
      copy[idx] = { ...item, qty: item.qty - 1 };
      return copy;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((x) => x.id !== productId));
  };

  const clearCart = () => setCartItems([]);

  const totals = useMemo(() => {
    const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
    const items = cartItems.reduce((sum, i) => sum + i.qty, 0);
    return { subtotal, items };
  }, [cartItems]);

  const value = { cartItems, addToCart, decreaseQty, removeFromCart, clearCart, totals };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
