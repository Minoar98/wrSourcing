import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      number: "01",
      title: "Merchandising and Marketing",
      description:
        "From trend forecasting and design development to sample production, we ensure your vision comes to life with precision and quality.",
    },
    {
      number: "02",
      title: "Quality Control",
      description:
        "Maintaining the highest standards is our priority. Our rigorous quality control processes ensure that every product meets your specifications and standards.",
    },
    {
      number: "03",
      title: "Factory Sourcing",
      description:
        "With strong partnerships globally, we connect you with the right factories that match your production needs and quality standards.",
    },
    {
      number: "04",
      title: "Product Development",
      description:
        "Assisting in the design and prototyping of garments to bring your ideas from concept to reality with innovative solutions.",
    },
    {
      number: "05",
      title: "Textile and Accessories",
      description:
        "Expert sourcing solutions for quality textiles and accessories that meet your brand specifications and budget.",
    },
    {
      number: "06",
      title: "Pricing and Costing",
      description:
        "Transparent and competitive pricing structures that maximize value while maintaining production excellence and standards.",
    },
    {
      number: "07",
      title: "Logistics and Shipping",
      description:
        "Managing the entire shipping process, from packaging of your finished products to delivery, ensuring on-time and safe arrival of inventory at your warehouse.",
    },
    {
      number: "08",
      title: "Communication and Coordination",
      description:
        "Serving as the vital link between you and your manufacturers, we facilitate seamless communication to ensure your requirements are understood and met.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
