import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IncrementQty, DecrementQty, RemoveItem } from "../redux/cartSlice";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // Subtotal
  const subTotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  }, [cart]);

  // Discount (currently 0)
  const discount = 0;

  // Final Total
  const totalAmount = subTotal - discount;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <h1 className="text-3xl font-semibold mb-10">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          Your cart is empty
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">

          {/* CART ITEMS */}
          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 border rounded-xl p-5 hover:shadow-md transition"
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />

                {/* PRODUCT INFO */}
                <div className="flex flex-col flex-1 justify-between">

                  <div>
                    <h2 className="text-lg font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 text-sm mt-1">
                      Size: {item.size}
                    </p>

                    <p className="text-lg font-medium mt-2">
                      ₹{item.price}
                    </p>
                  </div>

                  {/* QTY CONTROLS */}
                  <div className="flex items-center justify-between mt-4">

                    <div className="flex items-center border rounded-md overflow-hidden">

                      <button
                        onClick={() => dispatch(DecrementQty(item.id))}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        -
                      </button>

                      <span className="px-4">{item.qty}</span>

                      <button
                        onClick={() => dispatch(IncrementQty(item.id))}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>

                    </div>

                    <button
                      onClick={() => dispatch(RemoveItem(item.id))}
                      className="text-red-500 text-sm hover:underline"
                    >
                      <RiDeleteBinLine className="w-20 text-2xl text-black"/>
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* ORDER SUMMARY */}
          <div className="border rounded-xl p-6 h-fit shadow-sm bg-gray-50">

            <h2 className="text-xl font-semibold mb-6">
              Price Details
            </h2>

            <div className="space-y-3 text-gray-700">

              <div className="flex justify-between">
                <span>Items ({cart.length})</span>
                <span>₹{subTotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">
                  - ₹{discount}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-600">
                  FREE
                </span>
              </div>

              <hr />

              <div className="flex justify-between font-semibold text-lg">
                <span>Total Amount</span>
                <span>₹{totalAmount}</span>
              </div>

            </div>

            <button  onClick={()=>navigate("/place-order")} className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800 transition">
              Proceed To Checkout
            </button>

          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;