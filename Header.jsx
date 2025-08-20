import React from 'react'
import { NavLink, Link } from 'react-router-dom';


function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 sm:px-10 h-[60px]">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://readymadeui.com/readymadeui-short.svg"
            alt="Logo"
            className="h-6 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-8 text-sm font-medium text-gray-700 ml-10">
          <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
          <NavLink to="/team" className="hover:text-blue-600">Team</NavLink>
          <NavLink to="/feature" className="hover:text-blue-600">Feature</NavLink>
          <NavLink to="/blog" className="hover:text-blue-600">Blog</NavLink>
          <NavLink to="/about" className="hover:text-blue-600">About</NavLink>
        </nav>

        {/* Search Icon */}
        <button className="ml-10 p-2 hover:bg-gray-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="18"
            height="18"
            className="fill-gray-500"
          >
            <path d="M190.7 180.1l-47.1-47.1c11.7-14.1 18.8-32.1 18.8-51.8C162.4 36.4 126 0 81.2 0 36.4 0 0 36.4 0 81.2s36.4 81.2 81.2 81.2c19.7 0 37.8-7 51.8-18.8l47.1 47.1c2 2 5.3 2 7.3 0 2-2 2-5.3 0-7.3zM15 81.2C15 44.7 44.7 15 81.2 15s66.2 29.7 66.2 66.2-29.7 66.2-66.2 66.2S15 117.7 15 81.2z" />
          </svg>
        </button>

      </div>
    </header>
  );
}

export default Header;
