import ProductCard from "./ProductCard";

const GallerySection = () => {
  const productCategories = [
    {
      title: "Gents Collection",
      image:
        "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600",
    },
    {
      title: "Ladies Collection",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
    },
    {
      title: "Boys Collection",
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600",
    },
    {
      title: "Girls Collection",
      image:
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600",
    },
    {
      title: "Children Collection",
      image:
        "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600",
    },
    {
      title: "Home Textiles Collection",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600",
    },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">
          Products Category
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <ProductCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
