function OrderSummary({
  cart,
  subtotal,
  discount,
  voucherDiscount,
  shippingCost,
  taxes = 0,
  showVoucher,
  setShowVoucher,
  voucherCode,
  setVoucherCode,
  applyVoucher,
  voucherMessage,
}) {
  const total =
    subtotal - discount - voucherDiscount + shippingCost + taxes;

  return (
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
        {voucherDiscount === 0 && (
          <>
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
          </>
        )}

        {/* Subtotal */}
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

        {/* Shipping */}
        <div className="flex justify-between">
          <span>Shipping</span>

          <span>
            {cart.length === 0
              ? "$0.00"
              : shippingCost === 0
                ? "FREE"
                : `$${shippingCost.toFixed(2)}`}
          </span>
        </div>

        {/* Taxes */}
        <div className="flex justify-between border-b border-gray-300 pb-5">
          <span>Taxes</span>
          <span>${taxes.toFixed(2)}</span>
        </div>

        {/* Total */}
        <div className="flex justify-between text-xl">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

      </div>
    </aside>
  );
}

export default OrderSummary;