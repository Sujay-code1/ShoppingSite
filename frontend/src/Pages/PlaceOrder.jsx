import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

const PlaceOrder = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    street: "", city: "", state: "", pin: "", country: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [orderSummary, setOrderSummary] = useState({ total: 0, email: "", name: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const subTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = 0;
  const gst = Math.round(subTotal * 0.18);
  const total = subTotal - discount + gst;

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderSummary({ total, email: form.email, name: form.name });
    dispatch(clearCart());
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate("/");
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />

      <div className="font-[DM_Sans] max-w-6xl mx-auto mt-10 px-6 pb-12">

        <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-1.5">
          Checkout
        </p>
        <h1 className="font-[DM_Serif_Display] text-3xl sm:text-4xl font-normal text-gray-900 mb-10 leading-tight">
          Place your order
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start">

          {/* ── Order Summary (mobile first) ── */}
          <div className="lg:hidden">
            <OrderSummary cart={cart} subTotal={subTotal} discount={discount} gst={gst} total={total} />
          </div>

          {/* ── LEFT: Delivery Form ── */}
          <form onSubmit={handleSubmit}>

            <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3 pb-2 border-b border-gray-100">
              Personal info
            </p>

            <Field label="Full name">
              <input
                className="w-full px-4 py-3.5 border border-gray-400 rounded-lg text-base text-gray-900 outline-none bg-white focus:border-gray-600 transition-colors placeholder:text-gray-500"
                name="name" type="text" placeholder="Jane Smith"
                value={form.name} onChange={handleChange} required
              />
            </Field>

            <Field label="Email address">
              <input
                className="w-full px-4 py-3.5 border border-gray-400 rounded-lg text-base text-gray-900 outline-none bg-white focus:border-gray-600 transition-colors placeholder:text-gray-500"
                name="email" type="email" placeholder="jane@example.com"
                value={form.email} onChange={handleChange} required
              />
            </Field>

            <Field label="Phone number">
              <input
                className="w-full px-4 py-3.5 border border-gray-400 rounded-lg text-base text-gray-900 outline-none bg-white focus:border-gray-600 transition-colors placeholder:text-gray-500"
                name="phone" type="tel" placeholder="+91 98765 43210"
                value={form.phone} onChange={handleChange} required
              />
            </Field>

            <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mt-8 mb-3 pb-2 border-b border-gray-100">
              Shipping address
            </p>

            <Field label="Street / landmark">
              <input
                className="w-full px-4 py-3.5 border border-gray-400 rounded-lg text-base text-gray-900 outline-none bg-white focus:border-gray-400 transition-colors placeholder:text-gray-500"
                name="street" type="text" placeholder="12 MG Road, near City Mall"
                value={form.street} onChange={handleChange} required
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="City">
                <input
                  className="w-full px-4 py-3.5 border border-gray-400 rounded-lg text-base text-gray-900 outline-none bg-white focus:border-gray-400 transition-colors placeholder:text-gray-500"
                  name="city" type="text" placeholder="Bhubaneswar"
                  value={form.city} onChange={handleChange} required
                />
              </Field>
              <Field label="State">
                <input
                  className="w-full px-4 py-3.5 border border-gray-400 rounded-lg text-base text-gray-900 outline-none bg-white focus:border-gray-400 transition-colors placeholder:text-gray-500"
                  name="state" type="text" placeholder="Odisha"
                  value={form.state} onChange={handleChange} required
                />
              </Field>
              <Field label="Pin code">
                <input
                  className="w-full px-4 py-3.5 border border-gray-400 rounded-lg text-base text-gray-900 outline-none bg-white focus:border-gray-400 transition-colors placeholder:text-gray-500"
                  name="pin" type="number" placeholder="751001"
                  value={form.pin} onChange={handleChange} required
                />
              </Field>
              <Field label="Country">
                <input
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg text-base text-gray-900 outline-none bg-white focus:border-gray-400 transition-colors placeholder:text-gray-500"
                  name="country" type="text" placeholder="India"
                  value={form.country} onChange={handleChange} required
                />
              </Field>
            </div>

            <button
              type="submit"
              className="w-full mt-8 py-4 bg-gray-900 text-white text-base font-medium rounded-lg tracking-wide hover:opacity-85 transition-opacity cursor-pointer"
            >
              Place order
            </button>

            <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-gray-400">
              <LockIcon />
              Secured with 256-bit SSL encryption
            </div>

          </form>

          {/* ── RIGHT: Order Summary (desktop) ── */}
          <div className="hidden lg:block sticky top-6">
            <OrderSummary cart={cart} subTotal={subTotal} discount={discount} gst={gst} total={total} />
          </div>

        </div>
      </div>

      {/* ── Success Popup ── */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/45 flex items-center justify-center z-50 p-4 animate-[fadeIn_0.2s_ease]">
          <div className="bg-white rounded-2xl p-8 sm:p-10 max-w-sm w-full text-center animate-[slideUp_0.25s_ease]">

            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22a06b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h2 className="font-[DM_Serif_Display] text-2xl sm:text-3xl font-normal text-gray-900 mb-2">
              Order placed!
            </h2>

            <p className="text-base text-gray-400 mb-7 leading-relaxed">
              Thank you, <strong className="text-gray-900">{orderSummary.name || "there"}</strong>. Your order has been confirmed and will be delivered soon.
            </p>

            <div className="bg-gray-50 rounded-xl px-4 py-3 mb-6 text-base space-y-2">
              <div className="flex justify-between text-gray-400">
                <span>Order total</span>
                <span className="text-gray-900 font-medium">₹{orderSummary.total}</span>
              </div>
              <div className="flex justify-between gap-3 text-gray-400">
                <span className="shrink-0">Confirmation sent to</span>
                <span className="text-gray-900 font-medium truncate">{orderSummary.email || "your email"}</span>
              </div>
            </div>

            <button
              onClick={handlePopupClose}
              className="w-full py-4 bg-gray-900 text-white text-base font-medium rounded-lg tracking-wide hover:opacity-85 transition-opacity cursor-pointer"
            >
              Back to home
            </button>
          </div>

          <style>{`
            @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
            @keyframes slideUp { from { transform: translateY(20px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
          `}</style>
        </div>
      )}
    </>
  );
};

/* ── Order Summary Sub-component ── */
const OrderSummary = ({ cart, subTotal, discount, gst, total }) => (
  <div>
    <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3 pb-2 border-b border-gray-100">
      Order summary
    </p>

    <div className="mb-4">
      {cart.map((item) => (
        <div key={item.id} className="flex gap-4 items-center py-3 border-b border-gray-100">
          <img
            src={item.image}
            alt={item.name}
            className="rounded-lg object-cover bg-gray-100 shrink-0"
            style={{ width: 64, height: 64 }}
          />
          <div className="flex-1 min-w-0">
            <p className="text-base font-medium text-gray-900 truncate">{item.name}</p>
            <p className="text-sm text-gray-400 mt-0.5">Size: {item.size} · Qty: {item.qty}</p>
          </div>
          <p className="text-base font-medium text-gray-900 shrink-0">₹{item.price * item.qty}</p>
        </div>
      ))}
    </div>

    <div className="bg-gray-50 rounded-xl px-5 py-5 space-y-2">
      <SummaryRow label={`Subtotal (${cart.length} item${cart.length !== 1 ? "s" : ""})`} value={`₹${subTotal}`} />
      <SummaryRow label="Discount" value={`- ₹${discount}`} valueClass="text-emerald-600" />
      <SummaryRow label="Delivery" value="Free" valueClass="text-emerald-600" />
      <SummaryRow label="GST (18%)" value={`₹${gst}`} />
      <div className="flex justify-between text-lg font-semibold text-gray-900 border-t border-gray-200 pt-3 mt-2">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
    </div>
  </div>
);

/* ── Sub-components ── */
const Field = ({ label, children }) => (
  <div className="flex flex-col gap-2 mb-4">
    <label className="text-sm font-medium text-gray-500">{label}</label>
    {children}
  </div>
);

const SummaryRow = ({ label, value, valueClass = "text-gray-600" }) => (
  <div className="flex justify-between text-base text-gray-400 py-0.5">
    <span>{label}</span>
    <span className={valueClass}>{value}</span>
  </div>
);

const LockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

export default PlaceOrder;