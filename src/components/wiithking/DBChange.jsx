// import { useQuery } from '@tanstack/react-query';
import React from 'react';
import dParts from '../../files/parts_20240803.json'
// import Button from '../ui/Button';
import { migrationParts } from '../../api/firebase';
import { Button, Toast } from '@chakra-ui/react';
// const dataParts = dParts;

export default function DBChange() {
    
    const result = false;
    const clickHandler = ( () => migrationParts(dParts))
    const showToast = (msg) => {
        Toast({
            title: msg,
            description: '성공적으로 추가되었습니다!',
            duration: 4000,
            isClosable: true,
            position: 'bottom'
        })
    }
    return (
        <div>
            {result && showToast('Success!')}
            <Button onClick={clickHandler}>DBchange</Button>
        </div>
    );
}
