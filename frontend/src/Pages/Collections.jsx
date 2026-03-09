import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllProducts } from '../redux/productsSlice'
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function Collections() {

  const allCollections = useSelector(selectAllProducts);
  const [loading, setLoading] = useState(true);

  // filter / sort state
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortOrder, setSortOrder] = useState('relevant'); // 'relevant' | 'low-high' | 'high-low'

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000) // 1 second fake loader

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500"></div>
      </div>
    );
  }

  // apply filters
  let filtered = allCollections;
  if (selectedCategories.length) {
    filtered = filtered.filter((p) => selectedCategories.includes(p.category));
  }
  if (selectedTypes.length) {
    filtered = filtered.filter((p) => selectedTypes.includes(p.subCategory));
  }
  // apply sort
  if (sortOrder === 'low-high') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'high-low') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-center py-6">
          ALL COLLECTIONS ------
        </h2>

        <div className="max-w-[100%] mx-auto px-4 sm:px-6 py-10 flex flex-col lg:flex-row">
          {/* filters sidebar or topbar */}
          <aside className="w-full lg:w-1/4 pr-0 lg:pr-6 mb-6 lg:mb-0">
            <div className="p-4  rounded-lg bg-white space-y-6">
              <div className="border p-3 rounded">
                <h3 className="font-semibold mb-2 text-xl">Category</h3>
                {['Men', 'Women', 'Kids'].map((cat) => (
                  <label key={cat} className="flex items-center mb-2 text-base">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4"
                      checked={selectedCategories.includes(cat)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedCategories((prev) => [...prev, cat]);
                        } else {
                          setSelectedCategories((prev) => prev.filter((c) => c !== cat));
                        }
                      }}
                    />
                    {cat}
                  </label>
                ))}
              </div>

              <div className="border p-3 rounded">
                <h3 className="font-semibold mb-2 text-lg">Type</h3>
                {['Top Wear', 'Bottom Wear', 'Winter Wear'].map((type) => (
                  <label key={type} className="flex items-center mb-2 text-base">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4"
                      checked={selectedTypes.includes(type)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedTypes((prev) => [...prev, type]);
                        } else {
                          setSelectedTypes((prev) => prev.filter((t) => t !== type));
                        }
                      }}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">
                {filtered.length} item{filtered.length !== 1 ? 's' : ''}
              </p>
              <div>
                <label className="mr-2 font-medium">Sort by:</label>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  <option value="relevant">Relevant</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="max-w-[100%] mx-auto px-0 py-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
                {filtered.map((product) => (
                  <Link key={product._id} to={`/product/${product._id}`}>
                  <div
                    key={product._id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-3 sm:p-5 cursor-pointer"
                  >
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collections