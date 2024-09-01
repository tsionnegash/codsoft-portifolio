import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#20252a] text-[#f8f8f2]">
      <div className="relative z-20">
        <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Link className="text-2xl font-bold text-[#f39c12]" to="/">
              Tsion negash.
            </Link>
            <button className="text-[#f8f8f2] ml-4 lg:hidden" aria-label="Menu">
              <span>Menu</span>
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex flex-grow items-center justify-center">
            <ul className="flex space-x-8">
              <li>
                <Link className="hover:text-[#f8f8f2]" to="/about">About</Link>
              </li>
              <li>
                <Link className="hover:text-[#f8f8f2]" to="/services">Services</Link>
              </li>
              <li>
                <Link className="hover:text-[#f8f8f2]" to="/journal">Journal</Link>
              </li>
              <li>
                <Link className="hover:text-[#f8f8f2]" to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          
          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-[#f9a826] text-white py-4 px-6 rounded hover:bg-[#f39c12]"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
