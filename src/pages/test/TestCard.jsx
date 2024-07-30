import { Flex, ListItem } from '@chakra-ui/react';
import React from 'react';

export default function TestCard({data}) {
        // "id": 990,
        // "first_name": "Remus",
        // "last_name": "Airth",
        // "email": "rairthrh@woothemes.com",
        // "gender": "Male",
        // "ip_address": "240.161.124.65"
    return (
        <Flex gap='3'>
            <ListItem>{data.id}</ListItem>
            <ListItem>{data.first_name}</ListItem>
            <ListItem>{data.last_name}</ListItem>
            <ListItem>{data.email}</ListItem>
            <ListItem>{data.gender}</ListItem>
            <ListItem>{data.ip_address}</ListItem>
        </Flex>
    );
}

