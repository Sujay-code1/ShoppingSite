import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../redux/productsSlice";
import Policies from "../components/Policis";


function Product() {

  const { id } = useParams();
  const products = useSelector(selectAllProducts);

  const product = products.find((item) => item._id === id);



  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (

    <>

    <div className="max-w-7xl mx-auto py-16 grid md:grid-cols-2 gap-16 ">

      {/* LEFT SIDE (Images) */}
      <div className="flex flex-col gap-6">

        {/* Main Image */}
        <div className=" rounded-xl overflow-hidden h-[600px] bg-gray-50 flex items-center justify-center">

          <img
            src={product.image?.[0]}
            alt={product.name}
            className="w-full h-full object-contain hover:scale-105 transition duration-300"
          />

        </div>

        {/* Thumbnail Images */}
        <div className="flex gap-4">

          {product.image?.map((img, index) => (

            <img
              key={index}
              src={img}
              alt="thumb"
              className="w-24 h-24 object-cover rounded-lg border cursor-pointer hover:scale-105 transition"
            />

          ))}

        </div>

      </div>


      {/* RIGHT SIDE (Product Info) */}
      <div className="flex flex-col gap-6 justify-center">

        {/* Product Name */}
        <h1 className="text-4xl font-semibold text-gray-800">
          {product.name}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-3 text-yellow-500 text-xl">
          ⭐⭐⭐⭐☆
          <span className="text-gray-600 text-base">(122 reviews)</span>
        </div>

        {/* Price */}
        <p className="text-3xl font-bold text-slate-800">
          ₹ {product.price}
        </p>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
          {product.description}
        </p>

        {/* Size Selection */}
        <div>

          <p className="font-semibold text-lg mb-3">
            Select Size
          </p>

          <div className="flex gap-4">

            {["S", "M", "L", "XL"].map((size) => (

              <button
                key={size}
                className="border px-6 py-2 rounded-md text-lg hover:bg-black hover:text-white transition"
              >
                {size}
              </button>

            ))}

          </div>

        </div>

        {/* Add To Cart */}
        <button className="bg-black text-white py-4 text-lg rounded-lg hover:bg-gray-800 transition mt-4 w-[220px]">
          Add To Cart
        </button>

      </div>

      

    </div>
<Policies/>
</>
  );
}

export default Product;