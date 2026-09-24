import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../js/cart";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutSteps from "../components/CheckoutSteps";
import OrderSummary from "../components/OrderSummary";

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

   const shippingCost =
    subtotal > 600
      ? shippingMethod === "next-day"
        ? 5
        : 0
      : shippingMethod === "next-day"
        ? 25
        : 20;

  localStorage.setItem("shippingMethod", shippingMethod);
  localStorage.setItem("shippingCost", shippingCost);

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
                />

                <div>
                  <p className="font-light">
                    {subtotal > 600 ? "Free Shipping" : "Standard Shipping - $20"}
                  </p>
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
                  <p className="font-light">
                    Next Day Delivery - Additional $5
                  </p>
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
          <OrderSummary
            cart={cart}
            subtotal={subtotal}
            discount={discount}
            voucherDiscount={voucherDiscount}
            shippingCost={shippingCost}
            taxes={0}
            showVoucher={showVoucher}
            setShowVoucher={setShowVoucher}
            voucherCode={voucherCode}
            setVoucherCode={setVoucherCode}
            applyVoucher={applyVoucher}
            voucherMessage={voucherMessage}
          />
          

        </section>
      </main>

      <Footer />
    </>
  );
}

export default Shipping;