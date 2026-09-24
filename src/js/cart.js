import { useEffect, useState } from "react";

export function useCart() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [couponApplied, setCouponApplied] = useState(() => {
    return localStorage.getItem("couponApplied") === "true";
  });

  const [couponMessage, setCouponMessage] = useState(() => {
    return localStorage.getItem("couponMessage") || "";
  });

  const [voucherApplied, setVoucherApplied] = useState(() => {
    return localStorage.getItem("voucherApplied") === "true";
  });

  const [voucherMessage, setVoucherMessage] = useState(() => {
    return localStorage.getItem("voucherMessage") || "";
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to cart
  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  // Increase quantity
  function increaseQuantity(id) {
    setCart((currentCart) =>
      currentCart.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product
      )
    );
  }

  // Decrease Quantity
  function decreaseQuantity(id) {
    setCart((currentCart) =>
      currentCart
        .map((product) =>
          product.id === id
            ? {
                ...product,
                quantity: product.quantity - 1,
              }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  }

  // Apply coupon
  function applyCoupon(code) {
    const normalizedCode = code.trim().toUpperCase();

    if (normalizedCode === "ADVENTURE10") {
    setCouponApplied(true);
    setCouponMessage("10% discount applied.");

    localStorage.setItem("couponApplied", "true");
    localStorage.setItem("couponMessage", "10% discount applied.");
    } else {
      setCouponApplied(false);
      setCouponMessage("Invalid coupon code.");

      localStorage.removeItem("couponApplied");
      localStorage.setItem("couponMessage", "Invalid coupon code.");
    }
  }


  // Apply voucher
  function applyVoucher(code) {
    const normalizedCode = code.trim().toUpperCase();

    if (normalizedCode === "GEAR20") {
      setVoucherApplied(true);
      setVoucherMessage("Voucher applied: $20 off.");

      localStorage.setItem("voucherApplied", "true");
      localStorage.setItem("voucherMessage", "Voucher applied: $20 off.");
    } else {
      setVoucherApplied(false);
      setVoucherMessage("Invalid voucher code.");

      localStorage.removeItem("voucherApplied");
      localStorage.setItem(
        "voucherMessage",
        "Invalid voucher code."
      );
    }
  }

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );

  // Calculate coupon discount
  const couponDiscount = couponApplied ? subtotal * 0.10 : 0;

  // Calculate voucher discount
  const voucherDiscount = voucherApplied ? 20 : 0;

  // Calculate total discount
  const discount = couponDiscount + voucherDiscount;

  // Free shipping for orders over $600
  const shipping = subtotal > 600 ? 0 : 20;

  const taxes = 0;

  const total = subtotal - discount + shipping + taxes;

  return {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    applyCoupon,
    couponMessage,
    applyVoucher,
    voucherApplied,
    voucherMessage,
    voucherDiscount,
    subtotal,
    discount,
    shipping,
    taxes,
    total,
  };
}