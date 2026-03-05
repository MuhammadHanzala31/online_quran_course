'use client'

import Image from 'next/image'
import { useState } from 'react'
import img from '@/../public/registration.png'

export default function page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: '',
        agreed: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you for registering!')
    }

    return (
        <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Steps */}
                    <div className="space-y-3">
                        <div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-4 font-jakarta">Registration</h1>
                            <p className="text-lg text-gray-600 font-sans">
                                Kindly fill the registration form for a free trial and submit. We will contact you soon after registration.
                            </p>
                        </div>

                        {/* Steps Visualization */}
                        <Image src={img} alt='regis'/>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white rounded-none w-[90%]  shadow-lg p-8 border border-[#098A46]">
                        <h2 className="text-2xl text-center font-sans font-bold text-[#098A46] mb-4">
                            Start Your Free Trial Lesson Now.
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-2">
                            {/* Name */}
                            <div>
                             
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:outline-none focus:border-[#098A46] transition-colors"
                                />
                            </div>

                            {/* Email */}
                            <div>
                              
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:outline-none focus:border-[#098A46] transition-colors"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                             
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter Your Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:outline-none focus:border-[#098A46] transition-colors"
                                />
                            </div>

                            {/* City & Country */}
                            <div>
                            
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Enter Your City & Country"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:outline-none focus:border-[#098A46] transition-colors"
                                />
                            </div>

                            {/* Message */}
                            <div>

                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-none focus:outline-none focus:border-[#098A46] transition-colors resize-none"
                                />
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    name="agreed"
                                    checked={formData.agreed}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-5 h-5 accent-[#098A46] cursor-pointer"
                                />
                                <label className="text-sm text-gray-700">
                                    By submitting you agree to our{' '}
                                    <a href="#" className="text-[#098A46] font-semibold hover:underline">
                                        Terms & Policy.
                                    </a>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#098A46] hover:bg-[#077a3d] text-white font-bold py-3 px-6 rounded-none transition-colors duration-200"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
