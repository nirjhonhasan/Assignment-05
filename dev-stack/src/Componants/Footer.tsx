import React from 'react';
import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div className="md:container md:mx-auto mt-16 min-h-[400px] flex flex-col justify-center text-center md:text-start md:items-center items-start">
            
            <div className="grid grid-cols-5 gap-4 p-3">
                <div className="col-span-2">
                    <img src={logo} alt="Logo" className="py-2"/>
                    <p className="font-extralight text-gray-500 pr-6">Curated tools, technologies, and resources for developers <br /> building
                        modern software.</p>

                    <ul className="flex space-x-4 mt-4 text-gray-500 ">
                        <li><a href="#" className=" hover:text-gray-700">Github</a></li>
                        <li><a href="#" className="hover:text-gray-700">Twitter</a></li>
                        <li><a href="#" className="hover:text-gray-700">LinkedIn</a></li>
                    </ul>
                </div>

                <div className="hidden md:block col-span-1">
                    <h2 className='font-semibold'>Products</h2>
                    <ul className="font-extralight text-gray-500">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Technologies</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </div>

                <div className="hidden md:block col-span-1">
                    <h2 className='font-semibold'>Company</h2>
                    <ul className="font-extralight text-gray-500">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

                <div className="hidden md:block col-span-1">
                    <h2 className='font-semibold'>Legal</h2>
                    <ul className="font-extralight text-gray-500">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <hr className="border-gray-300 mt-4"/>

            <div>
            <h2 className='font-extralight text-gray-500 text-sm text-start mt-4'>© 2026 DevStack. All rights reserved.</h2>
            <div className="flex justify-end gap-4 font-extralight text-[12px] text-gray-500">
                <h2>Privacy</h2>
                <h2>Terms</h2>
            </div>
            </div>

        </div>
    );
};

export default Footer;