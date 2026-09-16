function Button({ children, type = "button", isPrimary = true }) {

  return (
    <button
      type={type}
      className={`${
        isPrimary ? "bg-primary" : "bg-secondary"
      } text-white px-6 md:px-10 py-2 md:py-3 rounded-md hover:bg-gray-800 transition-colors duration-200`}
    >
      {children}
    </button>
  )
}

export default Button