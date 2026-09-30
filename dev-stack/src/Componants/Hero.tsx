import React from 'react';
import heroImg from '../assets/banner-stack.png';

const Hero = () => {
    return (
        <div className="container mx-auto py-8">


            <div className="flex justify-between items-center">

                <div className="flex flex-col gap-4 w-[60%] pr-4">
                    <h1 className="text-7xl font-bold">
                        Build Your Ideal
                        <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-indigo-700  bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>
                    <p className="text-gray-400  font-extralight text-2xl ">
                        Explore frontend, backend, database, and tooling options,<br />
                        compare them side by side, and put together the stack that fits your<br />
                        next project.
                    </p>



                    <div className="flex gap-4 mt-8">
                        <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-2 px-4 rounded cursor-pointer">
                            Explore Technologies
                        </button>
                        <button className=" hover:bg-gray-100  font-bold py-2 px-4 rounded border-gray-200 border-1 cursor-pointer">
                            Learn More
                        </button>
                    </div>



                </div>
                <img src={heroImg} alt="Hero" className='w-[40%]' />
            </div>


        </div>
    );
};

export default Hero;