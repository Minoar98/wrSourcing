const ProductCard = ({ title, image }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg cursor-pointer h-80">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold text-orange-500">{title}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
