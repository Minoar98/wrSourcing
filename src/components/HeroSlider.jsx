import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import logo from "../assets/logo.jpeg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600",
      title: "WR SOURCING",
      description:
        "Unparalleled expertise in production and sourcing to bring your textile products to life with precision and excellence.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600",
      title: "QUALITY TEXTILE SOLUTIONS",
      description:
        "From concept to completion, we deliver premium textile products that exceed industry standards.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600",
      title: "GLOBAL SOURCING NETWORK",
      description:
        "Access to world-class manufacturers and suppliers ensuring the highest quality for your business.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
      ))}

      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* <img src={logo} alt="WR Sourcing Logo" className="h-12 w-auto" />; */}
        <h1
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: "'Neuropol', Arial, sans-serif" }}
        >
          <span className="text-white">{slides[currentSlide].title}</span>
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          {slides[currentSlide].description}
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full text-lg font-semibold transition transform hover:scale-105">
          Contact Us
        </button>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-orange-500 w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
export default HeroSlider;
