import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Button from '../../components/ui/Button';
import { Button, Flex, HStack } from '@chakra-ui/react';
import PartsListTable from '../../components/PartsListTable';

export default function PartsList() {
    const navigate = useNavigate();
    return (
        <>
            <Flex gap='3' mb='30px'>
                <Button
                    colorScheme='purple'
                    onClick={() => {navigate('/partsnew')}}
                    >
                    부품등록
                </Button>
                <Button
                    colorScheme='purple'
                    onClick={() => {navigate('/partsviewcard')}}
                >
                    카드로 보기
                </Button>
                
            </Flex>
            <HStack>
                <PartsListTable />
            </HStack>
        </>
    );
}

