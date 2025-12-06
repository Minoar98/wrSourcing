import { ChevronRight } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    "Export Team",
    "Dedicated Live Support",
    "Customer Satisfaction",
    "Reasonable Pricing",
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Unique Advantages</h3>
            <p className="text-gray-300 mb-8">
              We provide quality, timely delivery, and a personalized approach
              to meet your textile needs effectively.
            </p>
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <ChevronRight className="text-orange-500" size={20} />
                  <span className="text-gray-300">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800"
              alt="Fashion Workplace"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdvantagesSection;
