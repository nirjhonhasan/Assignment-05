import React, { useState } from 'react';
import TechCard from './TechCard';
import SelectedCard from './SelectedCard';
import { type Itypes } from '../../Types/Itypes.ts';



const Technologies = ({ techPromise }: { techPromise: Promise<Itypes[]> }) => {

    const [selectedTech, setSelectedTech] = useState<Itypes[]>([]);



    return (
        <div >

            <div className="container mx-auto flex justify-center items-center flex-col gap-2 mt-10 md:justify-start md:items-start ">
                <h2 className="text-3xl md:text-4xl font-bold items-center">Explore the <span className="text-pink-500">Technologies</span></h2>
                <p className="text-gray-400 font-light">Pick one technology per category to build your ideal stack.</p>
            </div>




            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-3 ">
                    <TechCard techPromise={techPromise} selectedTech={selectedTech} setSelectedTech={setSelectedTech}/>
                </div>

                <div className="md:col-span-1">
                    <SelectedCard selectedTech={selectedTech} setSelectedTech={setSelectedTech} />
                </div>



            </div>
        </div>



    );
};

export default Technologies;