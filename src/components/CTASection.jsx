const CtaSection = () => {
  return (
    <section
      className="py-20 px-4 relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1558769132-cb1aea1c6e8e?w=1600)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/75"></div>
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Contact us today to discover how we can meet your textile sourcing
          needs!
        </h2>
        <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition transform hover:scale-105">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
