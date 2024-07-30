import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
// import Button from '../../components/ui/Button';
import { Button, Flex, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getParts } from '../../api/firebase';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
// import PartsListTable from '../../components/PartsListTable';

export default function PartsList() {
    const navigate = useNavigate();
    const {
        isLoading,
        error,
        data: parts
    } = useQuery({
        queryKey: ['parts'],
        queryFn: getParts
    });
    const data = useMemo( () => parts, [parts]);

    const columns = [
        {
            header: 'part Name(Eng)',
            accessorKey: 'partNameEng',
        },
        {
            header: 'part Name(Kor)',
            accessorKey: 'partNameKor',
        },
        {
            header: 'Model Number',
            accessorKey: 'modelNumber',
        },
        {
            header: 'category',
            accessorKey: 'category',
        },
        {
            header: 'Autobag',
            accessorKey: 'autobagModel',
        },
    ]

    const partsTable = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

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
            <>
                {/* <PartsListTable /> */}
                {/* <List>
                    <ListItem></ListItem>
                </List> */}

                {isLoading && <Text>Loading...</Text>}
                {error && <Text>{error}</Text>}
                <Table>
                    <Thead>
                        {partsTable.getHeaderGroups().map((headerGroup) =>
                            <Tr key={headerGroup.id}>
                                {headerGroup.headers.map( (header) => 
                                    <Th key={header.id}>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </Th>
                                )}
                            </Tr>
                        )}
                    </Thead>
                    <Tbody>
                        {partsTable.getRowModel().rows.map( (row) =>
                            <Tr key={row.id}>
                                {row.getVisibleCells().map( (cell) =>
                                        <Td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </Td>
                                )}
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </>
        </>
    );
}

