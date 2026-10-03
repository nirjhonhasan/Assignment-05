// import React from 'react';
import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div className="container mx-auto flex flex-col justify-center items-center gap-4 px-4 mt-16">

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-3 w-full">
                <div className="col-span-1 md:col-span-2">
                    <img src={logo} alt="Logo" className="py-2" />
                    <p className="font-extralight text-gray-500 pr-6">
                        Curated tools, technologies, and resources for developers <br className="hidden md:block" /> building modern software.
                    </p>

                    <ul className="flex space-x-4 mt-4 text-gray-500">
                        <li><a href="#" className="hover:text-gray-700">Github</a></li>
                        <li><a href="#" className="hover:text-gray-700">Twitter</a></li>
                        <li><a href="#" className="hover:text-gray-700">LinkedIn</a></li>
                    </ul>
                </div>

                <div className="hidden md:block md:col-span-1">
                    <h2 className='font-semibold mb-2'>Products</h2>
                    <ul className="font-extralight text-gray-500 space-y-1">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Technologies</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </div>

                <div className="hidden md:block md:col-span-1">
                    <h2 className='font-semibold mb-2'>Company</h2>
                    <ul className="font-extralight text-gray-500 space-y-1">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

                <div className="hidden md:block md:col-span-1">
                    <h2 className='font-semibold mb-2'>Legal</h2>
                    <ul className="font-extralight text-gray-500 space-y-1">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <hr className="w-full border-gray-300 mt-4" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 w-full">
                <h2 className='text-sm font-extralight text-gray-400'>© 2026 DevStack. All rights reserved.</h2>

                <div className="flex flex-row items-center gap-4 text-sm font-extralight text-gray-400">
                    <h2>Privacy</h2>
                    <h2>Terms</h2>
                </div>
            </div>

        </div>
    );
};

export default Footer;