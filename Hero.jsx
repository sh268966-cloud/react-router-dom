// src/pages/Home.jsx
import React from 'react';

function Hero() {
  return (
    <div className="grid md:grid-cols-2 items-center gap-8 max-w-5xl max-md:max-w-md mx-auto">
      <div className="max-md:order-1 max-md:text-center">
        <h2 className="md:text-4xl text-3xl md:leading-10 font-bold text-slate-900 mb-4">Savor Every Bite</h2>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          Embark on a gastronomic journey with our curated dishes, delivered promptly to your doorstep. Elevate your dining experience today.
        </p>
        <div className="mt-12 flex flex-wrap max-md:justify-center gap-4">
          <button className="px-6 py-3 text-base font-semibold text-white bg-[#f032e6] rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50">
            Explore Our Menu
          </button>
          <button className="px-6 py-3 text-base font-semibold text-[#f032e6] border border-[#f032e6] rounded-full hover:text-white hover:bg-[#f032e6] transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50">
            Order Now
          </button>
        </div>
      </div>
      <div className="md:h-[450px]">
        <img
          src="https://readymadeui.com/hotel-img.webp"
          className="w-full h-full object-cover rounded-lg shadow-xl"
          alt="hero-img"
        />
      </div>
    </div>
  );
}



export default Hero;