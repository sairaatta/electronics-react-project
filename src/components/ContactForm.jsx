// src/components/ContactForm.jsx

import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        user: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Handle form submission logic here (e.g., API call)
    };

    return (
        <section className="flex items-center justify-center p-6">
            <form onSubmit={handleSubmit} className="max-w-md w-full bg-white shadow-md rounded p-6">
                <h2 className="text-2xl font-bold mb-4">We’d love to hear from you! Let's get in touch</h2>
                
                {/* Name and User in one line */}
                <div className="flex space-x-4 mb-4">
                    <div className="w-full">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 p-3 border border-gray-300 rounded w-full"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="user" className="block text-gray-700">User</label>
                        <input
                            type="text"
                            id="user"
                            name="user"
                            value={formData.user}
                            onChange={handleChange}
                            className="mt-1 p-3 border border-gray-300 rounded w-full"
                            required
                        />
                    </div>
                </div>

                {/* Email and Phone in one line */}
                <div className="flex space-x-4 mb-4">
                    <div className="w-full">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-3 border border-gray-300 rounded w-full"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 p-3 border border-gray-300 rounded w-full"
                            required
                        />
                    </div>
                </div>

                {/* Password and Message below */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 p-3 border border-gray-300 rounded w-full"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 p-3 border border-gray-300 rounded w-full"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
