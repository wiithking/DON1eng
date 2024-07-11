import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PartCard({
    part,
    part: {
        id,
        partNumberManufacturer,
        partNumberDON1eng,
        partImg,
        category,
        autobagModel,
        partNameEng,
        partNameKor,
        modelNumber,
        barcodeImg,
    }, }) 
    {
    const navigate = useNavigate();
    return (
        <li 
            onClick={()=>{
                navigate(`/partviewdetail/${id}`, { state: { part } })
            }}
            className='rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all hover:scale-105'>
            <img className='w-full' src={partImg} alt={partNameKor} />
            <p className='mt-2 px-2 text-2xl'>{partNumberDON1eng}</p>
            <h3 className='px-2 truncate text-2xl font-bold'>{partNameKor}</h3>
            <p className='px-2 truncate'>{partNameEng}</p>
            <div>
                <p className='truncate mt-2 px-2 text-blue-400 font-bold'>model: {modelNumber}</p>
            </div>
            <div className='flex items-center justify-between'>
                <p className='mb-2 px-2 text-gray-400 truncate'>{category}</p>
                <p className='mb-2 px-2 text-gray-400'>{autobagModel}</p>
            </div>
            <img className='w-full ' src={barcodeImg} alt='barcode' />
        </li>
    );
}

