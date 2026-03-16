import React from "react";
import Subscription from "../components/Subscription";
import Policies from "../components/Policis";

function About() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-wide text-gray-800">
          ABOUT US
        </h1>
        <div className="w-20 h-[3px] bg-black mx-auto mt-3"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            className="rounded-xl shadow-lg object-cover w-full h-[420px]"
            src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&auto=format&fit=crop&q=60"
            alt="aboutimg"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 space-y-6 text-gray-700 leading-relaxed">

          <p className="text-lg">
            <span className="font-semibold text-gray-900">Nobero</span> was born
            out of a passion for innovation and a desire to revolutionize the
            way people shop online. Our journey began with a simple idea: to
            provide a platform where customers can easily discover, explore,
            and purchase a wide range of products from the comfort of their
            homes.
          </p>

          <p className="text-lg">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>

        </div>
      </div>

      {/* Policies */}
      <div className="mt-16">
        <Policies />
      </div>

      {/* Subscription */}
      <div className="mt-16">
        <Subscription />
      </div>

    </div>
  );
}

export default About;