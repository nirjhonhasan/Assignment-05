import React, { use } from 'react';
import type { Itypes } from '../../Types/Itypes';
import Card from './Card';

interface TechnologiesProps {

    techPromise: Promise<Itypes[]>;
    selectedTech: Itypes[];
    setSelectedTech: React.Dispatch<React.SetStateAction<Itypes[]>>;

}


const TechCard = ({ techPromise, selectedTech, setSelectedTech }: TechnologiesProps) => {

    const techData = use(techPromise);

    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {
            techData.map((tech: Itypes, index: number) => {
                return <div key={index}>

                    <Card tech={tech} selectedTech={selectedTech} setSelectedTech={setSelectedTech}/>

                </div>
            })
        };
    </div>


};


export default TechCard;