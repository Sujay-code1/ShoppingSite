const Subscription = () => {
  return (
    <div className="w-full flex justify-center items-center py-20 px-4 ">
      
      {/* Full Width Container */}
      <div className="w-full max-w-[100%] text-center space-y-6">
        
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Subscribe Now and get 20% off
        </h1>

        <p className="text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Input with Button Inside */}
        <div className="relative max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-4 pl-5 pr-32 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            className="absolute right-1 top-1 bottom-1 px-6 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            Subscribe
          </button>
        </div>

      </div>
    </div>
  );
};

export default Subscription;