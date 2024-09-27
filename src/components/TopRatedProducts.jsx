import React from 'react';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';
import img6 from '../assets/images/img6.png';
import tv from '../assets/images/tv.png';
import img1 from '../assets/images/img1.png';
import laptop from '../assets/images/laptop.jpg';

const products = [
  {
    id: 1,
    title: 'LED 4k smart TV expo White/Gray/Black',
    price: '$499',
    imageUrl: tv,
  },
  {
    id: 2,
    title: 'GM-2345 closed back wireless Headphones',
    price: '$99',
    imageUrl: img3,
  },
  {
    id: 3,
    title: 'GM-2345 closed back wireless Headphones',
    price: '$99',
    imageUrl: img1,
  },
  {
    id: 4,
    title: 'Laptop 4k smart TV expo White/Gray/Black',
    price: '$599',
    imageUrl: laptop,
  },
  {
    id: 5,
    title: 'Mobile phone accessories',
    price: '$199',
    imageUrl: img6,
  },
  {
    id: 6,
    title: 'Accessories for mobile phone used USB',
    price: '$149',
    imageUrl: img2,
  },
  {
    id: 7,
    title: 'GM-2345 closed back Camera',
    price: '$299',
    imageUrl: img4,
  },
  {
    id: 8,
    title: 'Mobile 4k smart TV expo White/Gray/Black',
    price: '$399',
    imageUrl: img5,
  },
];

const TopRatedProducts = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Top rated product</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4"
          >
            <div className="flex justify-between items-center">
              <button className="text-gray-400 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="h-48"> {/* Set a fixed height for the image container */}
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover my-4" // Make image cover the full container
              />
            </div>
            <h3 className="text-sm font-medium text-gray-700">{product.title}</h3>
            <p className="text-red-500 font-bold mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedProducts;
