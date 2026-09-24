import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../js/cart";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutSteps from "../components/CheckoutSteps";

function Shipping() {
   const {
    cart,
    subtotal,
    discount,
    voucherDiscount,
    applyVoucher,
    voucherMessage,
  } = useCart();

   const [shippingMethod, setShippingMethod] = useState(
    subtotal > 600 ? "free" : "next-day"
   );

   const shippingCost = shippingMethod === "free" ? 0 : 20;

   const [showVoucher, setShowVoucher] = useState(false);
   const [voucherCode, setVoucherCode] = useState("");

   const navigate = useNavigate();

   function handleSubmit(event) {
    event.preventDefault();
    navigate("/payment");
  }

  return (
    <>
      <Header />

      <main>
        {/* Checkout steps */}
        <CheckoutSteps currentStep={2} />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-5 md:p-10 items-start">
          {/* Shipping Details */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl md:text-3xl font-light border-b border-gray-300 pb-2 mb-5">
              Shipping Details
            </h1>

            <form id="shipping-form"   onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* First Name */}
              <input
                type="text"
                placeholder="First Name"
                required
                className="border px-4 py-3"
              />

              {/* Last Name */}
              <input
                type="text"
                placeholder="Last Name"
                required
                className="border px-4 py-3"
              />

              {/* Address */}
              <input
                type="text"
                placeholder="Address"
                required
                className="md:col-span-2 border px-4 py-3"
              />

              {/* Address 2 */}
              <input
                type="text"
                placeholder="Address 2"
                className="md:col-span-2 border px-4 py-3"
              />

              {/* Country */}
              <select className="border px-4 py-3" required>
                <option value="">Country</option>
                <option value="nz">New Zealand</option>
              </select>

              {/* City */}
              <input
                type="text"
                placeholder="City"
                list="cities"
                required
                className="border px-4 py-3"
              />

              <datalist id="cities">
                <option value="Auckland" />
                <option value="Christchurch" />
                <option value="Dunedin" />
                <option value="Hamilton" />
                <option value="Queenstown" />
                <option value="Tauranga" />
                <option value="Wellington" />
              </datalist>

              {/* Postal Code */}
              <input
                type="text"
                placeholder="Zip/Postal Code"
                required
                pattern="[0-9]{4}"
                title="Please enter a 4-digit postal code."
                className="border px-4 py-3"
              />

              {/* Phone Number */}
              <input
                type="tel"
                placeholder="Phone Number"
                required
                pattern="(?:0|\+64)[0-9 ]{7,}"
                title="Please enter a valid phone number."
                className="border px-4 py-3"
              />
            </form>

            {/* Shipping Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 border-y border-gray-300">

              {/* Free Shipping */}
              <label className="border p-5 cursor-pointer flex items-center gap-4 my-5">
                <input
                  type="radio"
                  name="shipping"
                  value="free"
                  checked={shippingMethod === "free"}
                  onChange={() => setShippingMethod("free")}
                  disabled={subtotal <= 600}
                />

                <div>
                  <p className="font-light">Free Shipping</p>
                  <p className="text-sm text-gray-400">
                    Between 2 - 5 working days
                  </p>
                </div>
              </label>

              {/* Next Day Delivery */}
              <label className="border p-5 cursor-pointer flex items-center gap-4 my-5">
                <input
                  type="radio"
                  name="shipping"
                  value="next-day"
                  checked={shippingMethod === "next-day"}
                  onChange={() => setShippingMethod("next-day")}
                />

                <div>
                  <p className="font-light">Next Day Delivery - $20</p>
                  <p className="text-sm text-gray-400">
                    24 hours from checkout
                  </p>
                </div>
              </label>

            </div>

            {/* Shipping buttons */}
            <div className="flex gap-3 mt-6">
              <button
                  type="submit"
                  form="shipping-form"
                  className="bg-[#2F4B4D] text-white px-10 py-2 hover:bg-gray-800 transition-colors"
                >
                  Next
                </button>

                <Link
                to="/cart"
                  className="bg-gray-200 px-10 py-2 hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </Link>
            </div>
          </div>

          {/* Summary */}
          <aside className="md:mt-4.5">
            <h2 className="text-2xl md:text-3xl font-light border-b border-gray-300 pb-2 mb-5">
              Summary
            </h2>

            {/* Cart products */}
            <div className="border-b border-gray-300 pb-5 mb-5">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 mb-5 last:mb-0"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />

                  <div className="flex-1">
                    <p className="font-light uppercase">
                      {product.name}
                    </p>

                    <p className="text-sm text-gray-400">
                      Quantity: {product.quantity}
                    </p>
                  </div>

                  <p>
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div className="space-y-4">
              {/* Voucher */}
              <button
                type="button"
                onClick={() => setShowVoucher(!showVoucher)}
                className="w-full flex justify-between items-center border-b border-gray-300 pb-4 mb-4 text-left"
              >
                <span className="text-sm text-gray-500">
                  HAVE A VOUCHER?
                </span>

                <span className="text-gray-500">
                  {showVoucher ? "▲" : "▼"}
                </span>
              </button>

              {showVoucher && (
                <div className="mb-5">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Voucher code"
                      value={voucherCode}
                      onChange={(e) => setVoucherCode(e.target.value)}
                      className="border w-full h-10 px-3"
                    />

                    <button
                      type="button"
                      onClick={() => applyVoucher(voucherCode)}
                      className="bg-[#2F4B4D] text-white px-4 hover:bg-gray-800 transition-colors"
                    >
                      Apply
                    </button>
                  </div>

                  {voucherMessage && (
                    <p
                      className={`text-sm mt-3 ${
                        voucherMessage === "Invalid voucher code."
                          ? "text-red-600"
                          : "text-green-700"
                      }`}
                    >
                      {voucherMessage}
                    </p>
                  )}
                </div>
              )}

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {/* Coupon discount */}
              {discount > 0 && (
                <div className="flex justify-between text-green-700">
                  <span>Coupon Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}

              {/* Voucher discount */}
              {voucherDiscount > 0 && (
                <div className="flex justify-between text-green-700">
                  <span>Voucher Discount</span>
                  <span>-${voucherDiscount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {shippingCost === 0
                    ? "FREE"
                    : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between border-b border-gray-300 pb-5">
                <span>Taxes</span>
                <span>$0.00</span>
              </div>

              <div className="flex justify-between text-xl">
                <span>Total</span>
                <span>
                  ${(subtotal - discount + shippingCost).toFixed(2)}
                </span>
              </div>
            </div>
          </aside>

        </section>
      </main>

      <Footer />
    </>
  );
}

export default Shipping;