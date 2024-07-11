import React from 'react';
import Button from '../ui/Button';
import { migrationParts } from '../../api/firebase';

export default function DBChange() {
    return (
        <div>
            <Button 
                cssTextColor={'text-white'} 
                cssBgColor={'bg-brand'} 
                cssPadding={'py-2 px-4'} 
                cssRounded={'rounded-lg'} 
                fontSizer={'text-1xl'}
                text='changeDB' 
                onClick={migrationParts} 
            />
        </div>
    );
}
