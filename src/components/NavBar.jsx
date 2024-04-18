
import React from 'react';
import './NavBar.css'
export default function NavBar() {
  return (
    <div className="flex items-center justify-between">
      <h2 className='HooBank-logo text-white text-4xl mt-10 ml-32 font-serif'>Hoo<span className='text-teal-400'>Bank</span></h2>

      <ul className='navbar-menu flex text-white text-2xl mt-4 mr-4'>
        <li className='mx-5 menu'><a href="/" className="hover:text-teal-400">Home</a></li>
        <li className='mx-5 menu'><a href="/" className="hover:text-teal-400">About Us</a></li>
        <li className='mx-5 menu'><a href="/" className="hover:text-teal-400">Features</a></li>
        <li className='mx-5 menu'><a href="/" className="hover:text-teal-400">Solutions</a></li>
      </ul>
    </div>
  );
}