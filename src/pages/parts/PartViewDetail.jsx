import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Flex, Heading, Image, List, ListItem, Text } from '@chakra-ui/react';
import { delPart } from '../../api/firebase';

export default function PartViewDetail() {
    const {
        state: {
            part,
            part: {
                id,
                // partNumberManufacturer,
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
                note,
            },
        },
    } = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <Text ml='40px' fontSize='3xl'>{partNumberDON1eng}</Text>
            <Text ml='40px' fontSize='3xl'>{positionImg01}</Text>

            <Flex className='flex flex-col md:flex-row items-center '>
                <Heading fontSize='4xl' borderBottom='1px'>{partNameKor}</Heading>
                <Text>({partNameEng})</Text>
            </Flex>
            <Flex className='flex flex-col md:flex-row p-4'>
                <div className='px-4 basis-5/12'>
                    <img src={partImg} alt={partNameKor} />
                </div>
                <div className='w-full basis-7/12 flex flex-col p-4'>
                    <List>
                        <ListItem mb='10px'>
                            <Text fontSize='lg'>category: {category}</Text>
                        </ListItem>
                        <ListItem mb='10px'>
                            <Text fontSize='lg'>모델번호: {modelNumber}</Text>
                        </ListItem>
                        <ListItem mb='10px'>
                            <Text fontSize='lg'>제조사: {manufacturer}</Text>
                        </ListItem>
                        <ListItem mb='10px'>
                            <Text fontSize='lg'>오토백: {autobagModel}</Text>
                        </ListItem>
                        <ListItem mb='10px'>
                            <Text fontSize='lg'>size: {size}</Text>
                        </ListItem>
                        <ListItem mb='10px'>
                            <Text fontSize='lg'>needQty: {needQty}</Text>
                        </ListItem>
                        <ListItem mb='10px'>
                            <Text fontSize='lg'>cycle: {recommendedReplacementCycle}</Text>
                        </ListItem>
                        <ListItem mb='10px'>
                            <Text fontSize='lg'>UseAt: {usePosition}</Text>
                        </ListItem>
                    </List>
                    <Image mb='40px' w='200px' src={barcodeImg} alt='barcode' />
                    <Flex w='full' gap='5' mb='20px'>
                        <Button
                            colorScheme='purple'
                            onClick={ () => {navigate(`/partsmodify/${id}`, { state: { part } } )}}
                        >
                            수정하기(Mod)
                        </Button>
                        <Button
                            colorScheme='purple'
                            onClick={ () => { 
                                delPart(part);
                                navigate('/partsviewcard');
                            }}
                        >
                            삭제하기(Del)
                        </Button>
                    </Flex>
                </div>
            </Flex>
            <Flex w='full'>
                <Image src={positionImg01} alt='position 01' />
                <Image src={positionImg02} alt='position 02' />
                
            </Flex>
            <Flex>
                <Text>{description}</Text>
                <Text>{note}</Text>
            </Flex>
        </>
    );
}

