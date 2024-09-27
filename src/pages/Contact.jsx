// src/pages/Contact.jsx

import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <section className="flex flex-col lg:flex-row items-start justify-center p-8 mb-24 bg-gradient-to-r from-blue-200 to-blue-300">
            <div className="max-w-md p-8 bg-white shadow-md rounded-lg mr-4 lg:mr-8">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h1>
                <p className="mb-6 text-gray-700">
                    It is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="flex items-center mb-4">
                    <span className="mr-2 text-lg">📧</span>
                    <h1 className="text-lg font-semibold text-gray-800">kashifhurmat893@gmail.com</h1>
                </div>

                <div className="flex items-center mb-4">
                    <span className="mr-2 text-lg">📞</span>
                    <h1 className="text-lg font-semibold text-gray-800">+92 302 5058 413</h1>
                </div>
            </div>

            {/* ContactForm component on the right side */}
            <div className="max-w-md p-8 bg-white shadow-md rounded-lg">
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
