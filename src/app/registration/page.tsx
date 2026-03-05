'use client'

import { useState } from 'react'

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
                        <div className="relative h-screen flex items-center justify-between gap-8   ">
                            {/* STEP 01 */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="px-4 py-2 border-2 w-fit rounded-3xl border-[#7AC043] font-sans text-[#098A46] font-bold">
                                    STEP 01
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" height={100} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_2_step_01" x="0px" y="0px" viewBox="0 0 511.3 700.6" xmlSpace="preserve">
                                    <path fill="#098A46" d="M7.4,110.2v506.7l189,71.4c27.6,10.4,58,10.5,85.7,0.3L506,606.1V100.7l-203.9,86  c-29.2,12.3-61.9,12.8-91.5,1.5L7.4,110.2L7.4,110.2z"></path>
                                    <path fill="#7AC043" d="M206.7,16.4L7.4,110.2l203.3,78c29.5,11.3,62.3,10.8,91.5-1.5l203.9-86L307.4,14.9  C275.1,0.9,238.5,1.5,206.7,16.4L206.7,16.4z"></path>
                                </svg>
                                <p className="text-sm font-semibold text-gray-800 text-center">Get register yourself by submitting the form.</p>
                            </div>

                            {/* STEP 02 */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="px-4 py-2 w-fit border-2 rounded-3xl border-[#7AC043] font-sans text-[#098A46] font-bold">
                                    STEP 02
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" height={200} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_2_step_02" x="0px" y="0px" viewBox="0 0 511.3 700.6" xmlSpace="preserve">
                                    <path fill="#098A46" d="M7.4,110.2v506.7l189,71.4c27.6,10.4,58,10.5,85.7,0.3L506,606.1V100.7l-203.9,86  c-29.2,12.3-61.9,12.8-91.5,1.5L7.4,110.2L7.4,110.2z"></path>
                                    <path fill="#7AC043" d="M206.7,16.4L7.4,110.2l203.3,78c29.5,11.3,62.3,10.8,91.5-1.5l203.9-86L307.4,14.9  C275.1,0.9,238.5,1.5,206.7,16.4L206.7,16.4z"></path>
                                </svg>
                                <p className="text-sm font-semibold text-gray-800 text-center">Experience our one-week free trial classes online.</p>
                            </div>

                            {/* STEP 03 */}
                            <div className="flex flex-col justify-center items-center gap-3">
                                <div className="px-4 py-2 border-2 w-fit  rounded-3xl border-[#7AC043] font-sans text-[#098A46] font-bold">
                                    STEP 03
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" height={280} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_2_step_03" x="0px" y="0px" viewBox="0 0 511.3 700.6" xmlSpace="preserve">
                                    <path fill="#098A46" d="M7.4,110.2v506.7l189,71.4c27.6,10.4,58,10.5,85.7,0.3L506,606.1V100.7l-203.9,86  c-29.2,12.3-61.9,12.8-91.5,1.5L7.4,110.2L7.4,110.2z"></path>
                                    <path fill="#7AC043" d="M206.7,16.4L7.4,110.2l203.3,78c29.5,11.3,62.3,10.8,91.5-1.5l203.9-86L307.4,14.9  C275.1,0.9,238.5,1.5,206.7,16.4L206.7,16.4z"></path>
                                </svg>
                                <p className="text-sm font-semibold text-gray-800 text-center">Once satisfied, enroll in regular classes.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white rounded-3xl w-[90%]  shadow-lg p-8 border border-gray-200">
                        <h2 className="text-2xl text-center font-sans font-bold text-[#098A46] mb-4">
                            Start Your Free Trial Lesson Now.
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-2">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Name <span className="text-red-500">*</span>
                                </label>
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
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
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
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Enter Your Phone <span className="text-red-500">*</span>
                                </label>
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
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Enter Your City & Country <span className="text-red-500">*</span>
                                </label>
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
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    How can we help you? (optional)
                                </label>
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
                                className="w-full bg-[#098A46] hover:bg-[#077a3d] text-white font-bold py-3 px-6 rounded-full transition-colors duration-200"
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
