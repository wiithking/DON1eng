import React from 'react';
import { useLocation } from 'react-router-dom';

export default function PartsModify() {
    const {
        state: {
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
                manufacturer,
                usePosition,
                size,
                needQty,
                recommendedReplacementCycle,
                positionImg01,
                positionImg02,
                barcodeImg,
                price,            
                description, 
                nodte,
            },
        },
    } = useLocation();
    return (
        <div>
            
        </div>
    );
}

