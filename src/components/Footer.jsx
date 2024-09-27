import React from 'react';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <section className="bg-[#BCCDE0] text-black py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h1 className="text-xl font-bold mb-4">Here!</h1>
            <p className="text-gray-900">hello@helloflow.com</p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4">Demo (Sales)</h1>
            <ul className="space-y-2">
              <li>
                <Link to='/' className="hover:text-red-400">Home</Link>
              </li>
              <li>
                <Link to='/Services' className="hover:text-red-400">Services</Link>
              </li>
              <li>
                <Link to='/About' className="hover:text-red-400">About</Link>
              </li>
              <li>
                <Link to='/Blog' className="hover:text-red-400">Blog</Link>
              </li>
              <li>
                <Link to='/Work' className="hover:text-red-400">Work</Link>
              </li>
              <li>
                <Link to='/Shop' className="hover:text-red-400">Shop</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4">404</h1>
            <ul className="space-y-2">
              <li>
                <Link to='/password' className="hover:text-red-400">Password</Link>
              </li>
              <li>
                <Link to='/checkout' className="hover:text-red-400">Checkout</Link>
              </li>
              <li>
                <Link to='/blogdetails' className="hover:text-red-400">Blog Details</Link>
              </li>
              <li>
                <Link to='/workdetails' className="hover:text-red-400">Work Details</Link>
              </li>
              <li>
                <Link to='/shopdetails' className="hover:text-red-400">Shop Details</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4">Style Guide</h1>
            <ul className="space-y-2">
              <li>
                <Link to='/licencing' className="hover:text-red-400">Licencing</Link>
              </li>
              <li>
                <Link to='/changelog' className="hover:text-red-400">Change log</Link>
              </li>
              <li>
                <Link to='/instructions' className="hover:text-red-400">Instructions</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 text-gray-400">
          <p>© {new Date().getFullYear()} 2024 Powered by Webflow With.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
