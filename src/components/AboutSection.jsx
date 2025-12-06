import logo from "../assets/logo.jpeg";
const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Text column - on small screens this will be below the image */}
          <div className="order-2 md:order-1 p-4 md:p-8 flex flex-col justify-center">
            <h3
              className="font-neuropol text-white text-2xl"
              style={{ fontFamily: "'Neuropol', Arial, sans-serif" }}
            >
              WR Sourcing
            </h3>
            <h1 className="text-white text-3xl">who we are </h1>

            <p className="text-gray-300 mb-6 leading-relaxed">
              is an organization with highly motivated, discipline and
              well-trained team members who constantly serve clients with
              professionalism and respect. Our services touch every aspect of
              textile and garments manufacturing domains. We are amongst the
              fast growing corporate in Bangladesh. Willingness to take on
              challenges and see them through is our hallmark because we know
              that challenges are the steps of the ladder that takes us higher
              and higher and quality and trust are the benchmarks of a good
              working philosophy. Our whole-hearted commitment to serve our
              clients and associates is the booster fuel that propels us
              forward.
            </p>
            <h1 className="text-white text-3xl"> Social responsibilities</h1>
            <h3
              className="font-neuropol text-white text-2xl"
              style={{ fontFamily: "'Neuropol', Arial, sans-serif" }}
            >
              WIDE RANGE SOURCING
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Community responsibility is integral to the way we do business. A
              healthy, vibrant community ensures better standards of living.
              Humans are gregarious by nature and we grow up in our respective
              communities. If our community is stagnant, we stagnate too. With
              our holistic approach towards social, spiritual and intellectual
              well-being of communities around us, we make sure that wherever we
              have, we help the community. We build long-term relationship with
              people who come into our contact. we are committed to helping
              various communities with their basic amenities. We exemplify the
              spirit of corporate responsibility
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition">
              Learn More
            </button>
          </div>

          <div className="order-1 md:order-2 rounded-lg overflow-hidden flex items-center justify-center bg-white p-4">
            <img
              src={logo}
              alt="logo"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
