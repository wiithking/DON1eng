import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getTest } from '../../api/firebase';
import TestCard from './TestCard';
import { List } from '@chakra-ui/react';

export default function TestCards() {
    const {
        isLoading,
        error,
        data: mData,
    } = useQuery({
        queryKey: ['mData'],
        queryFn: getTest
    })
    return (
        <>
            {console.log(mData)}
            {isLoading && <p>Loading...</p>}  
            {error && <p>{error}</p>}
            <List>
                { mData &&
                    mData.map( (data) => (
                        <TestCard key={data.id} data={data} />
                    ))}
            </List>
        </>
    );
}

