import React, { useState } from 'react';
import logo from '../assets/logo-text.png'
import { FaXmark, FaBars } from 'react-icons/fa6';

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);


    return (

        <div className="bg-white shadow-sm sticky top-0 z-10">



            <div className="flex justify-between items-center container mx-auto py-4 ">




                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-2xl cursor-pointer pl-3">{isOpen ? <FaXmark /> : <FaBars />}
                </button>





                <img src={logo} alt="Dev Stack" />

                <ul className="hidden md:flex justify-between items-center gap-8 cursor-pointer">
                    <li><a href="#" className="text-purple-500 hover:text-purple-700 font-light ">Home</a></li>
                    <li><a href="#" className=" hover:text-purple-700 font-light ">Technologies</a></li>
                    <li><a href="#" className=" hover:text-purple-700 font-light ">Project</a></li>
                    <li><a href="#" className=" hover:text-purple-700  font-light">About</a></li>
                    <li><a href="#" className=" hover:text-purple-700  font-light">Contact</a></li>
                </ul>

                <div className="flex justify-between items-center gap-2">
                    <button className=" cursor-pointer">Sign In</button>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-4xl hover:bg-pink-700 cursor-pointer">Sign Up</button>
                </div>
            </div>




            {isOpen && (
                <div className="absolute left-0 top-full w-full bg-white shadow-lg md:hidden pl-3">

                    <ul className="flex flex-col gap-4">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Technologies</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                </div>
            )}


        </div>

    );
};

export default Nav;