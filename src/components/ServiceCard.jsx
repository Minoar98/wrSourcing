import { ChevronRight } from "lucide-react";

const ServiceCard = ({ number, title, description }) => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg hover:transform hover:scale-105 transition duration-300">
      <div className="flex items-start space-x-4">
        <span className="text-5xl font-bold text-orange-500">{number}</span>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <button className="text-orange-500 hover:text-orange-400 flex items-center space-x-2 transition">
            <span>LEARN MORE</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;