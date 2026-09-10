function Button({children, type = "button"}) {
  return (
    <button type={type}
      className="bg-gray-700
       text-white px-6 md:px-10 py-2 md:py-3 rounded-md
       hover:bg-gray-800 transition-colors duration-200">
      {children}
    </button>
  )
}

export default Button