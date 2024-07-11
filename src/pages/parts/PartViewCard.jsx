import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getParts } from '../../api/firebase';
import PartCard from '../../components/PartCard';

export default function PartViewCard() {
    const {
        isLoading,
        error,
        data: parts
    } = useQuery({
        queryKey: ['parts'], 
        queryFn: getParts
        });

    return (
        <>
            {/* {console.log(parts)} */}
            { isLoading && <p>Loading...</p> }
            { error && <p>{error}</p> }
            <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5'>
                { parts && 
                    parts.map((part) => (
                    <PartCard key={part.id} part={part}/>
                ))}
            </ul>
        </>
    );
}


    // id,
    // partNumberManufacturer,
    // partNumberDON1eng,
    // partImg,
    // category,
    // autobagModel,
    // partNameEng,
    // partNameKor,
    // modelNumber,
    // manufacturer,
    // usePosition,
    // size,
    // needQty,
    // recommendedReplacementCycle,,
    // positionImg01,,
    // positionImg02,,
    // barcodeImg,
    // price,            
    // description, 
    // note