const Footer = () => {
  return (
    <footer className="w-full text-gray-700 px-8 sm:px-20 py-16">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-black">Nobero.</h1>
          <p className="text-lg leading-relaxed text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-6">COMPANY</h2>
          <ul className="space-y-4 text-lg">
            <li className="hover:text-black cursor-pointer transition">Home</li>
            <li className="hover:text-black cursor-pointer transition">About us</li>
            <li className="hover:text-black cursor-pointer transition">Delivery</li>
            <li className="hover:text-black cursor-pointer transition">Privacy policy</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-6">GET IN TOUCH</h2>
          <ul className="space-y-4 text-lg">
            <li>+91-7077339066</li>
            <li className="break-all">alexsujay111@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t mt-14 pt-8 text-center text-lg text-gray-500">
        Copyright 2026 © Nobero - All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;