import React from 'react';
import type { Itypes } from '../../Types/Itypes';

const SelectedCard = ({techPromise}: {techPromise: Promise<Itypes[]>}) => {

    console.log(techPromise);

    return (
        <div className="rounded-3xl border-gray-100 border-2 mt-10 text-start p-5">
            <h1 className='font-bold text-3xl'>Your Stack</h1>

            <p className='font-extralight text-xl text-gray-400'>No Technologies Selected Yet !</p>

            <div className='min-h-10 text-center text-gray-400 flex items-center justify-center border border-dashed border-gray-300 rounded-2xl mt-5 p-5'>
                <h2 >Your stack is empty.</h2>
            </div>


        </div>
    );
};

export default SelectedCard;