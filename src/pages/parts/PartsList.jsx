import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
// import PartsListTable from '../../components/PartsListTable';

export default function PartsList() {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row border-b border-gray-400'>
                <Button
                    text={'부품추가'} 
                    cssTextColor={'text-black-400'} 
                    cssBgColor={'bg-gray-300'} 
                    cssPadding={'p-2 m-1 ml-8'} 
                    cssRounded={'rounded-lg'} 
                    fontSizer={'text-1xl'}
                    cssEtc={'flex-end'}
                    onClick={() => {navigate('/partsnew')}} />
                <Button
                    text={'카드로보기'} 
                    cssTextColor={'text-black-400'} 
                    cssBgColor={'bg-gray-300'} 
                    cssPadding={'p-2 m-1'} 
                    cssRounded={'rounded-lg'} 
                    fontSizer={'text-1xl'}
                    cssEtc={'flex-end'}
                    onClick={() => {navigate('/partsviewcard')}} />
                
            </div>
            {/* <div><PartsListTable /></div> */}
        </div>
    );
}

