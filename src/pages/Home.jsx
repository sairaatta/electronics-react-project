import React from 'react';
import headphones from '../assets/images/headphones.jpg';
import iphone from '../assets/images/iphone.png';
import laptop from '../assets/images/laptop.jpg';
import speaker from '../assets/images/speaker.jpg';
import NewArrivals from '../components/NewArrival'
import tablet from '../assets/images/tablet.jpg'
import img1 from '../assets/images/img1.png'
import PromoCard from '../components/PromoCard';
import TopRatedProducts from '../components/TopRatedProducts';
const Home = () => {

    const categories = [
        { name: 'Iphone', img: iphone },
        { name: 'Speaker', img: speaker },
        { name: 'Tablet', img: tablet },
        { name: 'Laptop', img: laptop },
        { name: 'Headphone', img: img1 },
    ];
    return (
        <>
            <section className="bg-white py-16">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between ">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center bg-[#BCCDE0] rounded-r-3xl rounded-b-3xl p-9">
                        <img
                            src={headphones}
                            alt="Headphone"
                            className="w-2/3 md:w-full rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
                        <p className="text-sm text-red-400 uppercase">In the spotlight</p>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                            Your sound best for your life
                        </h2>
                        <p className="text-gray-500 mb-6">
                            These have large ear cups that encompass the ears, providing good sound isolation
                            and often better sound quality.
                        </p>
                        <button className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center space-x-2 hover:bg-red-600 transition duration-300">
                            <span>Shop now</span>
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-6">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full mx-1"></span>
                    <span className="inline-block w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
                    <span className="inline-block w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-8">Feature's</h2>
                </div>
                <div className="bg-blue-100 flex flex-col md:flex-row justify-center items-center px-8 py-12">
                    {/* Left Section: Vertical Text */}
                    <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center">
                        {/* Headphones Image */}
                        <img
                            src={headphones}
                            alt="Headphones"
                            className="w-64 md:w-80 relative z-10"
                        />
                    </div>

                    {/* Right Section: Features */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-black text-4xl font-bold mb-4">Amazing feature</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold">Touch Controls</h3>
                                <p className="text-gray-600">Some headphones have touch-sensitive surfaces for controlling playback.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Sound Quality</h3>
                                <p className="text-gray-600">This includes considerations like bass response, clarity, and overall audio fidelity.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Microphone</h3>
                                <p className="text-gray-600">Built-in microphones enable hands-free calling and voice commands.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section >

            <section>
                <div className="bg-white py-8">
                    <div className="text-center mb-6">
                        <h2 className="text-red-500 text-lg font-bold mb-8">Category</h2>
                        <h3 className="text-2xl font-semibold mb-10">Can we help you pick a headphone</h3>
                    </div>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {categories.map((category, index) => (
                                <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                                    <img
                                        src={category.img}
                                        alt={category.name}
                                        className="w-20 h-20 object-contain mb-4"
                                    />
                                    <h4 className="text-center text-lg font-semibold">{category.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-white py-16">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">Special Offers</h2>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <PromoCard
                        imgSrc={iphone}
                        discount="20%"
                        description="Get the latest iPhone at an amazing price!"
                        buttonText="Shop Now"
                    />
                    <PromoCard
                        imgSrc={laptop}
                        discount="15%"
                        description="Exclusive discounts on top-rated laptops."
                        buttonText="Buy Now"
                    />
                    <PromoCard
                        imgSrc={speaker}
                        discount="30%"
                        description="Best quality speakers with huge savings."
                        price="129.99"
                    />
                </div>
            </section>

            {/* Top Rated Products Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Top Rated Products</h2>
                    <TopRatedProducts />
                </div>
            </section>


            <section className="flex flex-col md:flex-row items-center bg-blue-200 p-6 rounded-lg shadow-lg">
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src={img1} // Use your image path here
                        alt="Product"
                        className="w-72 h-auto md:w-96" // Adjust width as needed
                    />
                </div>
                <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
                    <h2 className="text-lg font-bold">Define yourself be different</h2>
                    <p className="text-gray-700 mt-2">
                        These have large ear cups that encompass the ears, providing good sound isolation and often better sound quality.
                    </p>
                    <button className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition">
                        Shop now &rarr;
                    </button>
                </div>
            </section>


            <section className="bg-gray-100 py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>
                    <NewArrivals/>
                </div>
            </section>
        </>

    );
};

export default Home;
