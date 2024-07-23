import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getParts } from '../../api/firebase';
// import PartCard from '../../components/PartCard';
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, HStack, Image, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

export default function PartViewCard() {
    const {
        isLoading,
        error,
        data: parts,
    } = useQuery({
        queryKey: ['parts'], 
        queryFn: getParts
        });

    return (
        <>
            <SimpleGrid p="10px" spacing="10px" minChildWidth="250px">
                {isLoading && <Text>Loading...</Text>}
                {error && <Text>{error}</Text>}
                {parts && parts.map(part => (
                    <Card key={part.id}>
                        <CardHeader>
                            <Heading as="h3" size="lg">{part.partNameKor}</Heading>
                            <Image
                                src={part.partImg}
                                alt={part.partNameEng} 
                            />
                        </CardHeader>

                        <CardBody>
                            <List>
                                <ListItem>
                                    <Text>분류: {part.category}</Text>
                                </ListItem>
                                <ListItem>
                                    <Text>제조사: {part.manufacture}</Text> 
                                </ListItem>
                                <ListItem>
                                    <Text>관리번호: {part.partNumberDON1eng}</Text>
                                </ListItem>
                            </List>
                        </CardBody>

                        <CardFooter>
                            <HStack>
                                <Button
                                    leftIcon={<EditIcon />}
                                    colorScheme='purple'
                                >
                                    수정
                                </Button>
                            </HStack>
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
        </>
    );
}


    // id,
    // partNumberManufacturer,
    // partNumberDON1eng,
    // partImg,
    // category,
    // autobagModel,
    // partNameEng,
    // partNameKor,
    // modelNumber,
    // manufacturer,
    // usePosition,
    // size,
    // needQty,
    // recommendedReplacementCycle,,
    // positionImg01,,
    // positionImg02,,
    // barcodeImg,
    // price,            
    // description, 
    // note