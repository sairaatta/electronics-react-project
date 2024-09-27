import React from 'react';

const PromoCard = ({ imgSrc, discount, description, buttonText, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
      {/* Product Image */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={imgSrc}
          alt="Product"
          className="object-cover w-full h-auto max-w-[150px] md:max-w-none"
        />
      </div>

      {/* Promo Text */}
      <div className="w-full md:w-2/3 flex flex-col justify-between">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-black mb-2">{discount} off</h2>
          <p className="text-lg text-gray-700">
            {description}
          </p>
        </div>
        {/* Conditional rendering for button or price */}
        {buttonText ? (
          <button className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition duration-300">
            {buttonText}
          </button>
        ) : (
          <span className="bg-red-100 text-red-500 px-4 py-2 rounded-full text-lg font-bold">
            ${price}
          </span>
        )}
      </div>
    </div>
  );
};

export default PromoCard;
