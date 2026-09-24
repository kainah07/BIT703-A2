function CheckoutSteps({ currentStep = 1 }) {
  return (
    <section className="bg-gray-50 px-5 md:px-10 py-10">
      <div className="grid grid-cols-3 border-b border-gray-300">

        {/* Shopping Cart */}
        <div
          className={`py-5 border-b ${
            currentStep === 1
              ? "border-gray-500 text-gray-700"
              : "border-transparent text-gray-400"
          }`}
        >
          <p className="text-center text-sm md:text-base">
            1. Shopping Cart
          </p>
        </div>

        {/* Shipping Details */}
        <div
          className={`py-5 border-b ${
            currentStep === 2
              ? "border-gray-500 text-gray-700"
              : "border-transparent text-gray-400"
          }`}
        >
          <p className="text-center text-sm md:text-base">
            2. Shipping Details
          </p>
        </div>

        {/* Payment Options */}
        <div
          className={`py-5 border-b ${
            currentStep === 3
              ? "border-gray-500 text-gray-700"
              : "border-transparent text-gray-400"
          }`}
        >
          <p className="text-center text-sm md:text-base">
            3. Payment Options
          </p>
        </div>

      </div>
    </section>
  );
}

export default CheckoutSteps;