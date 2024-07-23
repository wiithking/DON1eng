import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getParts } from '../../api/firebase';
// import PartCard from '../../components/PartCard';
import { Card, CardBody, CardFooter, CardHeader, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';

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
                            <Heading as="h3" size="sm">{part.partNameKor}</Heading>
                            <Image
                                src={part.partImg}
                                alt={part.partNameEng} 
                            />

                        </CardHeader>

                        <CardBody>
                            <Text>{part.category}</Text>
                        </CardBody>

                        <CardFooter>
                            <Text>{part.manufacture}</Text>
                            <Text>{part.partNumberDON1eng}</Text>
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