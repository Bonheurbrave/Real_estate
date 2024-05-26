import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
            <h2 className="text-lg font-semibold mb-2">Bobo E-State</h2>
            <p>A premier destination for finding your dream home.</p>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
            <h2 className="text-lg font-semibold mb-2">Explore</h2>
            <ul>
              <li><a href="#">Properties</a></li>
              <li><a href="#">Agents</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p>kn24 Gatuna Road St, Kigali</p>
            <p>info@boboestate.com</p>
            <p>+250 794082154</p>
          </div>
        </div>
        <div className="mt-8">
          <p>&copy; {new Date().getFullYear()} Bobo E-State. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
