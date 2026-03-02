import { useSelector } from 'react-redux'
import { selectLatestProducts } from '../redux/productsSlice'

const LatestCollection = () => {
  const latestProducts = useSelector(selectLatestProducts);

  return (
    <>
      {/* Header Section */}
      <div className='container sm:mt-[80px] mx-auto py-5 flex justify-center items-center mt-[110px] flex-col gap-5'>
        <h1 className='text-l md:text-5xl text-slate-800 font-semibold font-sans'>
          LATEST COLLECTION------
        </h1>

        <p className='ml-5 text-xl md:text-2xl mt-7 text-gray-500 text-center max-w-3xl'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-[100%] mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">
          
          {latestProducts.map((product) => (
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
          ))}

        </div>
      </div>
    </>
  );
};

export default LatestCollection;