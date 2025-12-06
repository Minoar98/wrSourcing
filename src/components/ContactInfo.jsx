import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-6 text-orange-500">
          Contact Information
        </h3>
        <p className="text-gray-400 mb-8">
          Reach out to us and we'll respond as soon as possible. We're here to
          help with all your textile sourcing needs.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="bg-orange-500 p-3 rounded-lg">
            <Phone size={24} />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Phone</h4>
            <p className="text-gray-400">+88 01715 254277</p>
            <p className="text-gray-400">+27 76 101 7314</p>
            <p className="text-gray-400">+88 01913 286550</p>
            <p className="text-gray-400">+88 01773 425022</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-orange-500 p-3 rounded-lg">
            <Mail size={24} />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Email</h4>
            <p className="text-gray-400">doza@wrsourcing.com</p>
            <p className="text-gray-400">nelisa@wrsourcing.com</p>
            <p className="text-gray-400">abir@wrsourcing.com</p>
            <p className="text-gray-400">sweety@wrsourcing.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-orange-500 p-3 rounded-lg">
            <MapPin size={24} />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Address</h4>
            <p className="text-gray-400">
              HOUSE - 100, ROAD-15, SECTOR -14, UTTARA, <br />
              DHAKA-1230, BANGLADESH
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h4 className="font-semibold mb-2">Business Hours</h4>
        <p className="text-gray-400 text-sm">
          Monday - Friday: 9:00 AM - 6:00 PM
        </p>
        <p className="text-gray-400 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
        <p className="text-gray-400 text-sm">Sunday: Closed</p>
      </div>
    </div>
  );
};
export default ContactInfo;
