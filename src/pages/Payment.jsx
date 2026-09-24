import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutSteps from "../components/CheckoutSteps";
import OrderSummary from "../components/OrderSummary";
import paypal from "../assets/paypal-logo.png"

import { useCart } from "../js/cart";

function Payment() {
  const {
    cart,
    subtotal,
    discount,
    voucherDiscount,
    applyVoucher,
    voucherMessage,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Voucher
  const [showVoucher, setShowVoucher] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");

  // Shipping cost selected on Shipping page
  const shippingCost = Number(
    localStorage.getItem("shippingCost") || 0
  );

  // Payment success popup
  const [showSuccess, setShowSuccess] = useState(false);

  // Payment form submission
  function handleSubmit(event) {
    event.preventDefault();

    clearCart();
    setShowSuccess(true);
  }

  return (
    <>
      <Header />

      <main>
        {/* Checkout steps */}
        <CheckoutSteps currentStep={3} />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-5 md:p-10 items-start">

          {/* Payment Method */}
          <div className="lg:col-span-2">

            <h1 className="text-2xl md:text-3xl font-light border-b border-gray-300 pb-2 mb-5">
              Payment Method
            </h1>

            <form
              id="payment-form"
              onSubmit={handleSubmit}
            >

              {/* Credit Card */}
              <div className="border border-gray-300 p-5 mb-5">

                <label className="flex items-start gap-4 cursor-pointer">

                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="mt-1"
                  />

                  <div className="flex-1">

                    <p className="font-light text-lg">
                      Credit Card
                    </p>

                    <p className="text-sm text-gray-400 mb-5">
                      Pay securely using your credit card.
                    </p>

                    {/* Card Number */}
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        required={paymentMethod === "card"}
                        pattern="[0-9 ]{16,19}"
                        title="Please enter a valid card number."
                        className="border w-full px-4 py-3"
                      />
                    </div>

                    {/* Expiry + CVV */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">

                      <input
                        type="text"
                        placeholder="MM / YY"
                        required={paymentMethod === "card"}
                        pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                        title="Please enter a valid expiry date, for example 12/27."
                        className="border px-4 py-3"
                      />

                      <input
                        type="text"
                        placeholder="CVV"
                        required={paymentMethod === "card"}
                        pattern="[0-9]{3,4}"
                        title="Please enter a valid 3 or 4 digit CVV."
                        className="border px-4 py-3"
                      />

                    </div>

                    {/* Card Holder Name */}
                    <input
                      type="text"
                      placeholder="Card Holder Name"
                      required={paymentMethod === "card"}
                      className="border w-full px-4 py-3"
                    />

                  </div>
                </label>
              </div>

              {/* PayPal */}
              <div className="border border-gray-300 p-5">
                <label className="flex items-center gap-4 cursor-pointer">

                  {/* Radio button */}
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                  />

                  {/* PayPal information */}
                  <div className="flex-1">
                    <p className="font-light text-lg">
                      PayPal
                    </p>

                    <p className="text-sm text-gray-400">
                      Pay securely using your PayPal account.
                    </p>
                  </div>

                  {/* PayPal logo */}
                  <div className="flex items-center justify-center me-5">
                    <img
                      src={paypal}
                      alt="PayPal"
                      className="w-25 h-25"
                    />
                  </div>

                </label>
              </div>

              {/* Payment Buttons */}
              <div className="flex gap-3 mt-6">

                <button
                  type="submit"
                  className="bg-[#2F4B4D] text-white px-10 py-2 hover:bg-gray-800 transition-colors"
                >
                  Pay Now
                </button>

                <Link
                  to="/shipping"
                  className="bg-gray-200 px-10 py-2 hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </Link>

              </div>

            </form>
          </div>

          {/* Order Summary */}
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

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5">
          <div className="bg-white w-full max-w-md p-8 text-center shadow-xl">

            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl text-green-700">
                  ✓
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-light mb-3">
              Payment Successful
            </h2>

            <p className="text-gray-500 mb-6">
              Thank you for your purchase! Your order has been successfully placed.
            </p>

            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="bg-[#2F4B4D] text-white px-10 py-2 hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </button>

          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Payment;