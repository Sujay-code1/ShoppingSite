import { assets } from '../assets/assets'

const Policies = () => {
  return (
    <section className=" py-16 mt-10">
      
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          
          {/* Exchange Policy */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <img
              src={assets.exchange_icon}
              alt="exchange"
              className="mx-auto w-14 h-14 mb-5"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              Easy Exchange Policy
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              We offer hassle free exchange policy
            </p>
          </div>

          {/* Return Policy */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <img
              src={assets.quality_icon}
              alt="return"
              className="mx-auto w-14 h-14 mb-5"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              7 Days Return Policy
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              We provide 7 days free return policy
            </p>
          </div>

          {/* Customer Support */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <img
              src={assets.support_img}
              alt="support"
              className="mx-auto w-14 h-14 mb-5"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              Customer Support
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              We provide 24/7 customer support
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Policies