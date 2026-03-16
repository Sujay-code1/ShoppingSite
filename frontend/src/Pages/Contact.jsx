import React from "react";
import Subscription from "../components/Subscription";

function Contact() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <div className="w-20 h-[3px] bg-black mx-auto mt-3"></div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-10 items-center">

        {/* Image */}
        <div className="md:w-1/2">
          <img
            className="w-full h-[420px] object-cover rounded-xl shadow-lg"
            src="https://images.unsplash.com/photo-1654785419449-7f0a9383a4fe?w=600&auto=format&fit=crop&q=60"
            alt="contactimg"
          />
        </div>

        {/* Contact Details */}
        <div className="md:w-1/2 space-y-6 text-gray-700">

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Our Store
            </h2>
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
          </div>

          <div>
            <p className="mt-4">Tel: (415) 555-0132</p>
            <p>Email: admin@forever.com</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-6">
              Careers at Nobero
            </h2>
            <p className="mt-2">
              Learn more about our teams and job openings.
            </p>
          </div>

          <button className="mt-4 px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white transition duration-300">
            Explore Jobs
          </button>

        </div>
      </div>

      {/* Subscription */}
      <div className="mt-16">
        <Subscription />
      </div>

    </div>
  );
}

export default Contact;