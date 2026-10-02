import React from 'react';
import type { Itypes } from '../../Types/Itypes';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';


interface SelectedCardProps {
    // techPromise: Promise<Itypes[]>;
    selectedTech: Itypes[];
    setSelectedTech: React.Dispatch<React.SetStateAction<Itypes[]>>;
}

const SelectedCard = ({ selectedTech, setSelectedTech }: SelectedCardProps) => {


    const handleRemoveTech = (deleteTech: Itypes) => {

        const deleteTechCard = selectedTech.filter((tech: Itypes) => tech.name !== deleteTech.name);

        toast(`${deleteTech.name} has been removed from your stack.`);

        setSelectedTech(deleteTechCard);
    }

    const handleRemoveAllTech = () => {
        setSelectedTech([]);
        toast(`All technologies have been removed from your stack.`);
    }





    return (
        <div className="rounded-3xl border-gray-100 border-2 mt-10 text-start p-5">
            <h1 className='font-bold text-3xl'>Your Stack</h1>

            <p className='font-extralight text-md text-gray-400'> {selectedTech.length === 0 ? "No technologies" : selectedTech.length} Technologies Selected !</p>




            {/* ======================== */}
            {/* ======================== */}
            {/* ======================== */}

            {selectedTech.length === 0 ?

                (<div className='min-h-10 text-center text-gray-400 flex items-center justify-center border border-dashed border-gray-300 rounded-2xl mt-5 p-5'>
                    <h2 >Your stack is empty.</h2>
                </div>)
                :

                (
                    selectedTech.map((techDetail: Itypes, index: number) => {
                        return (
                            <div>
                                <div key={index} className="flex items-center justify-between mt-5 p-3 border border-gray-100 rounded-lg">

                                    <div className="flex items-center gap-3">
                                        <img src={techDetail.icon} alt={techDetail.name} className="w-8 h-8" />
                                        <div>
                                            <h3 className="font-bold">{techDetail.name}</h3>
                                            <p className="text-sm text-gray-500">{techDetail.category}</p>
                                        </div>

                                    </div>


                                    <span onClick={() => handleRemoveTech(techDetail)}
                                        className="hover:text-red-500 cursor-pointer text-2xl">
                                        <RxCross2 />
                                    </span>


                                </div>
                            </div>

                        )
                    })
                )}
            {/* ======================== */}
            {/* ======================== */}
            {/* ======================== */}


            {
                selectedTech.length > 0 ?
                    (<button onClick={handleRemoveAllTech} className="mt-5 w-full border-1 border-red-500 text-red py-2 px-4 rounded-lg
                hover:text-white hover:bg-red-600 transition-colors duration-300 cursor-pointer"
                    >Remove All</button>) : ("")
            }

        </div>
    );
};

export default SelectedCard;