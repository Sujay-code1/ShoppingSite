import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllProducts, selectBestSellers } from "../redux/productsSlice";
import { Link } from "react-router-dom";

function Search() {

  const products = useSelector(selectAllProducts);
  const bestSellers = useSelector(selectBestSellers);

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  // Debounce search
  useEffect(() => {

    const timer = setTimeout(() => {

      if (search.trim() === "") {
        setResults([]);
        return;
      }

      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );

      setResults(filtered);

    }, 300);

    return () => clearTimeout(timer);

  }, [search, products]);

  return (

    <div className="px-6 sm:px-12 py-10">

      {/* Search Input */}
      <div className="max-w-xl mx-auto mb-10">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-3 rounded-full outline-none"
        />

      </div>


      {/* BEST SELLER SECTION */}

      {search === "" ? (

        <>
          <h2 className="text-2xl font-semibold mb-6">
            Best Sellers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">

            {bestSellers.slice(0, 10).map((product) => (

              <Link key={product._id} to={`/product/${product._id}`}>

                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-3 sm:p-5 cursor-pointer">

                  {/* Image */}
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-xl">
                    <img
                      src={product.image?.[0]}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Name */}
                  <h2 className="text-xs sm:text-sm md:text-base font-medium mt-3 text-gray-800 line-clamp-2">
                    {product.name}
                  </h2>

                  {/* Price */}
                  <p className="text-sm sm:text-lg font-bold text-slate-700 mt-1">
                    ₹ {product.price}
                  </p>

                </div>

              </Link>

            ))}

          </div>
        </>

      ) : (

        <>
          <h2 className="text-2xl font-semibold mb-6">
            Search Results
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">

            {results.map((product) => (

              <Link key={product._id} to={`/product/${product._id}`}>

                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-3 sm:p-5 cursor-pointer">

                  {/* Image */}
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-xl">
                    <img
                      src={product.image?.[0]}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Name */}
                  <h2 className="text-xs sm:text-sm md:text-base font-medium mt-3 text-gray-800 line-clamp-2">
                    {product.name}
                  </h2>

                  {/* Price */}
                  <p className="text-sm sm:text-lg font-bold text-slate-700 mt-1">
                    ₹ {product.price}
                  </p>

                </div>

              </Link>

            ))}

          </div>

          {results.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No products found
            </p>
          )}

        </>

      )}

    </div>

  );

}

export default Search;