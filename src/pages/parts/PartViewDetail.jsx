import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Grid, Heading, Image, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
import { delPart } from '../../api/firebase';
import { ChatIcon, EditIcon } from '@chakra-ui/icons';

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
                position01Img,
                position02Img,
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
            <Flex alignItems='center' mb='20px'>
                <Text fontSize='xl' color='gray.400'>(id)</Text>
                <Text ml='10px' fontSize='3xl'>{partNumberDON1eng}</Text>
            </Flex>
            
            {/* <Text ml='40px' fontSize='3xl'>{positionImg01}</Text> */}
            {/* {console.log(part)} */}

            <Flex mb='30px' alignItems='center' className='flex flex-col md:flex-row items-center '>
                <Heading fontSize='4xl' borderBottom='1px'>{partNameKor}</Heading>
                <Text>({partNameEng})</Text>
            </Flex>
            <SimpleGrid minChildWidth='250px' className='flex flex-col md:flex-row p-4'>
                <div className='px-14'>
                    <Image marginRight='30px' src={partImg} alt={partNameKor} />
                </div>
                <div className='w-full flex flex-col p-4 ml-20'>
                    <List ml='50px'>
                        <ListItem mb='10px' display='flex' alignItems='center'>
                            <Box fontSize='xl' >category:</Box>
                            <Box fontSize='3xl' ml='10px' fontWeight='bold'>{category}</Box>
                        </ListItem>
                        <ListItem mb='10px' display='flex' alignItems='center'>
                            <Box fontSize='xl' >모델번호:</Box>
                            <Box fontSize='3xl' ml='10px' fontWeight='bold'>{modelNumber}</Box>
                        </ListItem>
                        <ListItem mb='10px' display='flex' alignItems='center'>
                            <Box fontSize='xl' >제조사:</Box>
                            <Box fontSize='3xl' ml='10px' fontWeight='bold'>{manufacturer}</Box>
                        </ListItem>
                        <ListItem mb='10px' display='flex' alignItems='center'>
                            <Box fontSize='xl' >오토백:</Box>
                            <Box fontSize='3xl' ml='10px' fontWeight='bold'>{autobagModel}</Box>
                        </ListItem>
                        <ListItem mb='10px' display='flex' alignItems='center'>
                            <Box fontSize='xl' >size:</Box>
                            <Box fontSize='3xl' ml='10px' fontWeight='bold'>{size}</Box>
                        </ListItem>
                        <ListItem mb='10px' display='flex' alignItems='center'>
                            <Box fontSize='xl' >needQty:</Box>
                            <Box fontSize='3xl' ml='10px' fontWeight='bold'>{needQty}</Box>
                        </ListItem>
                        <ListItem mb='10px' display='flex' alignItems='center'>
                            <Box fontSize='xl' >cycle:</Box>
                            <Box fontSize='3xl' ml='10px' fontWeight='bold'>{recommendedReplacementCycle}</Box>
                        </ListItem>
                        <ListItem mb='10px' display='flex' alignItems='center'>
                            <Box fontSize='xl' >UseAt:</Box>
                            <Box fontSize='3xl' ml='10px' fontWeight='bold'>{usePosition}</Box>
                        </ListItem>
                    </List>
                    <Image ml='30px' mb='40px' w='200px' src={barcodeImg} alt='barcode' />
                    <Flex w='full' gap='5' ml='30px' mb='20px'>
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
            </SimpleGrid>
            <SimpleGrid my='30px' mx='100px' p="10px" spacing="10px" minChildWidth="250px">
                <Image src={position01Img} alt='position 01' />
                <Image src={position02Img} alt='position 02' />
            </SimpleGrid>
            <Grid>
                <Text mt='40px' mb='10px'><ChatIcon /> [Description]</Text>
                <Text borderRadius='10px' border='1px' borderColor='gray.400' p='20px' w='full'>{description}</Text>
                <Text mt='40px' mb='10px'><EditIcon /> Memo</Text>
                <Text borderRadius='10px' border='1px' borderColor='gray.400' p='20px' w='full'>{note}</Text>
            </Grid>
        </>
    );
}

