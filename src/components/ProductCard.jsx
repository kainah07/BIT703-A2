function ProductCard({image, name, price, className}) {
  return (
    <article className={className}>
      <img src={image} 
        alt={name} 
        className="w-full h-94 object-cover rounded-md"
      />
      <h3 className="text-center font-light uppercase mt-4">{name}</h3>
      <p className="text-center font-light">${price}</p>
    </article>
  )
}

export default ProductCard