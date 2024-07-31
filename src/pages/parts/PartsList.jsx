import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Button from '../../components/ui/Button';
import { Button, Flex, Input, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getParts } from '../../api/firebase';
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
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
    const [filtering, setFiltering] = useState('');

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
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            globalFilter: filtering,
        },
        onGlobalFilterChange: setFiltering
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
            {/* <PartsListTable /> */}
            {/* <List>
                <ListItem></ListItem>
            </List> */}

            {isLoading && <Text>Loading...</Text>}
            {error && <Text>{error}</Text>}
            <Input 
                type='text'
                value={filtering}
                onChange={ e => setFiltering(e.target.value)}
            />
            <Table colorScheme='green'>
                <Thead>
                    {partsTable.getHeaderGroups().map((headerGroup) =>
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map( (header) => 
                                <Th color='blue' key={header.id}>
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
            <div>
                    <Button onClick={() => partsTable.setPageIndex(0)}>First Page</Button>
                    <Button onClick={() => partsTable.previousPage()}>Previous Page</Button>
                    <Button onClick={() => partsTable.nextPage()}>Next Page</Button>
                    <Button onClick={() => partsTable.setPageIndex(0)}>Last Page</Button>
            </div>
        </>
    );
}

