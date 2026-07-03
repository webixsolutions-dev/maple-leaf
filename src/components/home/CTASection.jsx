const CTASection = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
          Ready to Meet <span className="text-pink-700">Maple Leaf Montessori</span>?
        </h2>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          We'd love to welcome your family. Book a tour and see our beautiful environment in person.
        </p>
        <div className="mt-6">
          <button className="bg-pink-700 text-white px-10 py-4 rounded-full font-semibold hover:bg-pink-800 transition-all shadow-lg hover:shadow-xl text-lg">
            Book a Tour Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;