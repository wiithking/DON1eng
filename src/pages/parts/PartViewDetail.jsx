import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

export default function PartViewDetail() {
    const {
        state: {
            part,
            part: {
                // id,
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
                // price,            
                description, 
                nodte,
            },
        },
    } = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <p className='px-2 pt-6'>{partNumberDON1eng}({partNumberManufacturer})</p>
            <section className='flex flex-col md:flex-row p-4'>
                <div className='px-4 basis-5/12'>
                    <img src={partImg} alt={partNameKor} />
                </div>
                <div className='w-full basis-7/12 flex flex-col p-4'>
                    <div className='flex flex-col md:flex-row items-center '>
                        <h2 className='text-3xl font-bold py-2 border-b border-gray-400'>{partNameKor}</h2>
                        <p>({partNameEng})</p>
                    </div>
                    <div className='flex flex-row md:flex-col py-4 text-2xl'>
                        <p className='px-2 font-bold '>{modelNumber}</p>
                        <p className='px-2 text-gray-600'>{manufacturer}</p>
                    </div>
                    <p className='px-2 text-xl'>{category}</p>
                    <p className='px-2 text-xl'>{autobagModel}</p>
                    
                    <p className='px-2 text-xl'>size: {size} / needQty: {needQty} / cycle: {recommendedReplacementCycle}</p>
                    <p className='p-2 mb-5 text-xl'>사용위치: {usePosition}</p>
                    <p className='w-full px-2 text-xl pt-5 border-t border-gray-400'>{description}</p>
                    <p className='w-full px-2 text-xl pt-5'>{nodte}</p>
                    <img className='size-80' src={barcodeImg} alt='barcode' />
                    <Button 
                        text={'제품 수정하기'}
                        cssTextColor={'text-white'} 
                        cssBgColor={'bg-brand'} 
                        cssPadding={'py-2 px-4'} 
                        cssRounded={'rounded-lg'} 
                        fontSizer={'text-1xl'}
                        onClick={() => {navigate(`/partsmodify/id`, { state: { part } } )}}
                    />
                </div>
            </section>
            <section>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <img className='w-full' src={positionImg01} alt='position 01' />
                    <img className='w-full' src={positionImg02} alt='position 02' />
                </div>
            </section>
        </>
    );
}

