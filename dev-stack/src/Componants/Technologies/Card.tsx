import React from 'react';
import type { Itypes } from '../../Types/Itypes';


const Card = ({tech}: {tech: Itypes}) => {

    return (

            <div className="max-w-sm bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
            {/* Header: React Logo & Popular Badge */}
            <div className="flex justify-between items-start mb-4">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                <span className="bg-sky-50 text-sky-500 font-medium text-sm px-3 py-1 rounded-full border border-sky-100">
                    {tech.badge}
                </span>
            </div>


            {/* Title & Description */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {tech.name}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                    {tech.description}
                </p>
            </div>

            {/* Tags & Rating Section */}
            <div className="flex items-center justify-between text-xs font-medium text-slate-600 mb-6 pt-4 border-t border-slate-100">
                <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-md">
                    {tech.category}
                </span>
                
                <span className="text-slate-500">
                    {tech.difficulty}
                </span>

                <div className="flex items-center gap-1 font-semibold text-slate-800">
                    <span className="text-amber-400 text-base">★</span>
                    <span>{tech.rating}</span>
                </div>
            </div>




            {/* Action Button */}
            <button className="w-full bg-[#070b14] hover:bg-slate-800 text-white font-medium py-3 rounded-xl transition-colors duration-200">
                Add to Stack
            </button>



        </div>
    );
};

export default Card;