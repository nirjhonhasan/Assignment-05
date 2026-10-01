import React, { use, type Dispatch } from 'react';
import type { Itypes } from '../../Types/Itypes';
import Card from './Card';

interface TechnologiesProps {
    clickBtn: string;
    setClickBtn: Dispatch<React.SetStateAction<string>>;
    techPromise: Promise<Itypes[]>;
}

const TechCard = ({ techPromise, clickBtn, setClickBtn }: TechnologiesProps) => {

    const techData = use(techPromise);

    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {
            techData.map((tech: Itypes, index: number) => {
                return <div key={index}>

                    <Card tech={tech} clickBtn={clickBtn} setClickBtn={setClickBtn}/>

                </div>
            })
        }
    </div>


};


export default TechCard;