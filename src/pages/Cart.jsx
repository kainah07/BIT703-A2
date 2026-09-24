import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutSteps from "../components/CheckoutSteps";
import { useCart } from "../js/cart";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    applyCoupon,
    couponMessage,
    subtotal,
    discount,
    shipping,
    taxes,
    total,
  } = useCart();

  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);
  

  const [couponCode, setCouponCode] = useState("");

  // Confirm item removal
  function handleDecrease(product) {
    if (product.quantity === 1) {
      setProductToRemove(product);
      setShowRemoveConfirm(true);
    } else {
      decreaseQuantity(product.id);
    }
  }

  return (
    <>
      <Header />

      <main>

        {/* Checkout steps */}
        <CheckoutSteps currentStep={1} />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-5 md:p-10">

          {/* Shopping cart */}
          <div className="lg:col-span-2">

            <h1 className="text-2xl md:text-3xl font-light border-b pb-2 mb-5">
              Shopping Cart
            </h1>

            {/* Cart products */}
            {cart.map((product) => (
              <article
                key={product.id}
                className="grid grid-cols-1 md:grid-cols-4 gap-5 border-b py-5"
              >

                {/* Product image */}
                <div>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-42 md:h-32 object-cover rounded-md"
                  />
                </div>

                {/* Product information */}
                <div className="md:col-span-2">

                  <h2 className="font-light uppercase">
                    {product.name}
                  </h2>

                  <p className="text-sm text-gray-400 mt-2">
                    {product.description}
                  </p>

                  <p className="mt-2">
                    ${product.price.toFixed(2)}
                  </p>

                </div>

                {/* Quantity */}
                <div className="flex items-center md:justify-end">

                  <div className="flex items-center border">

                    {/* Decrease quantity */}
                    <button
                      type="button"
                      onClick={() => handleDecrease(product)}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      −
                    </button>

                    {/* Quantity */}
                    <span className="px-4">
                      {product.quantity}
                    </span>

                    {/* Increase quantity */}
                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(product.id)
                      }
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      +
                    </button>

                  </div>

                </div>

              </article>
            ))}

            {/* Empty cart */}
            {cart.length === 0 && (
              <p className="text-gray-400 py-10">
                Your cart is empty.
              </p>
            )}

            {/* Cart buttons */}
            {cart.length > 0 && (
              <div className="hidden md:flex gap-3 mt-6">

                <Link
                  to="/shipping"
                  className="bg-[#2F4B4D] text-white px-10 py-2 hover:bg-gray-800 transition-colors"
                >
                  Next
                </Link>

                <Link
                  to="/shop"
                  className="bg-gray-200 px-10 py-2 hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </Link>

              </div>
            )}

          </div>

          {/* Summary */}
          <aside className="md:m-4.5">

            <h2 className="text-2xl md:text-3xl font-light border-b pb-2 mb-5">
              Summary
            </h2>

            {/* Coupon */}
            <div className="border-b pb-5 mb-5">
              <h3 className="font-semibold text-sm mb-3">
                ENTER COUPON CODE
              </h3>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="border w-full h-10 px-3"
                />

                <button
                  type="button"
                  onClick={() => applyCoupon(couponCode)}
                  className="bg-[#2F4B4D] text-white px-4 hover:bg-gray-800 transition-colors"
                >
                  Apply
                </button>
              </div>

              {couponMessage && (
                <p
                  className={`text-sm mt-3 ${
                    couponMessage === "Invalid coupon code."
                      ? "text-red-600"
                      : "text-green-700"
                  }`}
                >
                  {couponMessage}
                </p>
              )}
              
            </div>

            {/* Subtotal */}
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {/* Coupon discount */}
            {discount > 0 && (
              <div className="flex justify-between mb-4 text-green-700">
                <span>Coupon Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}

            {/* Shipping */}
            <div className="flex justify-between mb-4">
              <span>Shipping</span>

              <span>
                {cart.length === 0
                  ? "$0.00"
                  : shipping === 0
                    ? "FREE"
                    : `$${shipping.toFixed(2)}`}
              </span>
            </div>

            {/* Taxes */}
            <div className="flex justify-between border-b pb-5 mb-5">
              <span>Taxes</span>
              <span>${taxes.toFixed(2)}</span>
            </div>

            {/* Total */}
            <div className="flex justify-between text-xl">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* Cart buttons mobile */}
            {cart.length > 0 && (
              <div className="flex justify-end md:hidden gap-3 mt-6">

                <Link
                  to="/shipping"
                  className="bg-[#2F4B4D] text-white px-10 py-2 hover:bg-gray-800 transition-colors"
                >
                  Next
                </Link>

                <Link
                to="/shop"
                  className="bg-gray-200 px-10 py-2 hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </Link>

              </div>
            )}

          </aside>

        </section>

      </main>

      {/* Remove item confirmation */}
      {showRemoveConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">

          <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-md shadow-lg">

            <h2 className="text-2xl font-light mb-3">
              Remove this item?
            </h2>

            <p className="text-gray-500 mb-6">
              Are you sure you want to remove{" "}
              <span className="font-medium uppercase">
                {productToRemove?.name}
              </span>{" "}
              from your cart?
            </p>

            <div className="flex justify-end gap-3">

              <button
                type="button"
                onClick={() => {
                  setShowRemoveConfirm(false);
                  setProductToRemove(null);
                }}
                className="px-6 py-2 border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                No, Keep Item
              </button>

              <button
                type="button"
                onClick={() => {
                  decreaseQuantity(productToRemove.id);
                  setShowRemoveConfirm(false);
                  setProductToRemove(null);
                }}
                className="bg-[#2F4B4D] text-white px-6 py-2 hover:bg-gray-800 transition-colors"
              >
                Yes, Remove
              </button>

            </div>

          </div>

        </div>
      )}
      <Footer />
    </>
  );
}

export default Cart;