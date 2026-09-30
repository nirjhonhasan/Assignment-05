import React from 'react';
import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <div className="flex justify-between items-center container mx-auto py-4 index-10">
            
                <img src={logo} alt="Dev Stack" />
            
            <ul className="flex justify-between items-center gap-8 cursor-pointer">
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
    );
};

export default Nav;