import { motion } from "framer-motion";

const advantages = [
  "10+ Years of Experience",
  "Strict Quality Control",
  "On-Time Shipment",
  "Global Supply Chain Network",
];

export default function Advantages() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Us?</h2>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="list-disc list-inside text-lg space-y-3"
      >
        {advantages.map((adv, i) => (
          <motion.li
            key={i}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            {adv}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
