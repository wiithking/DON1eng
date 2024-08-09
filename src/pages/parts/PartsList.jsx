import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Button from '../../components/ui/Button';
import { Button, Flex, Input, Select, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getParts } from '../../api/firebase';
import { 
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable } from '@tanstack/react-table';
import ImageCell from '../../components/forTable/ImageCell';
import IDCell from '../../components/forTable/IDCell';
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
    const [sorting, setSorting] = useState([]);
    // const [filteringCategory, setFilteringCategory] = usestate([]);

    const columns = [
        {
            header: 'Image',
            accessorKey: 'partImg',
            cell: ImageCell,
        },
        {
            header: 'ID',
            accessorKey: 'partNumberDON1eng',
            cell: IDCell,
        },
        {
            header: 'part Name(Eng)',
            accessorKey: 'partNameEng',
            cell: (props) => <p>{props.getValue()}</p>,
        },
        {
            header: 'part Name(Kor)',
            accessorKey: 'partNameKor',
            cell: (props) => <p>{props.getValue()}</p>,
        },
        {
            header: 'Model Number',
            accessorKey: 'modelNumber',
            cell: (props) => <p>{props.getValue()}</p>,
        },
        {
            header: 'category',
            accessorKey: 'category',
            cell: (props) => <p>{props.getValue()}</p>,
        },
        {
            header: 'Autobag',
            accessorKey: 'autobagModel',
            cell: (props) => <p>{props.getValue()}</p>,
        },
    ]

    const partsTable = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting: sorting,
            globalFilter: filtering,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
    });

    const filteringHandleChange = (e) => {
        e.preventDefault();
        setFiltering(e.target.value);
    }

    return (
        <>
            <Flex gap='3' mb='10px'>
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
                    카드 보기
                </Button>
                
            </Flex>
            {/* <PartsListTable /> */}
            {/* <List>
                <ListItem></ListItem>
            </List> */}

            {isLoading && <Text>Loading...</Text>}
            {error && <Text>{error}</Text>}
            <Flex alignItems='center' mb='10px'>
                <Flex alignItems='center'>
                    <Text mr='15px'>Search: </Text>
                    <Input 
                        type='text'
                        value={filtering}
                        onChange={ e => setFiltering(e.target.value)}
                    />
                </Flex>
                <Flex alignItems='center' ml='30px'>
                    <Text mr='15px'>Category: </Text>
                    <Select
                            name='category'
                            size='sm'
                            bg='grayy.100'
                            onChange={filteringHandleChange}
                    >
                            <option value=''>--- category ---</option>
                            <option value='Printer'>Printer</option>
                            <option value='SideConveyor'>SideConveyor</option>
                            <option value='FrontConveyor'>FrontConveyor</option>
                            <option value='Air'>Air</option>
                            <option value='MOtor'>MOtor</option>
                            <option value='SwitchButton'>SwitchButton</option>
                            <option value='SenserWarning'>SenserWarning</option>
                            <option value='Compressor'>Compressor</option>
                            <option value='AC'>AC</option>
                            <option value='Bearing'>Bearing</option>
                            <option value='Sealing'>Sealing</option>
                            <option value='etc'>etc</option>
                    </Select>
                </Flex>
                <Flex alignItems='center' ml='30px'>
                    <Text mr='15px'>Autobag: </Text>
                        <Select
                            name='autobagModel'
                            size='lg'
                            bg='white'
                            onChange={filteringHandleChange}
                            >
                            <option value=''>--- autobagModel ---</option>
                            <option value='Common'>Common</option>
                            <option value='BL-Line'>BL-Line</option>
                            <option value='BL-P505S'>BL-P505S</option>
                            <option value='BL-P506S'>BL-P506S</option>
                            <option value='BL-P506S+'>BL-P506S+</option>
                            <option value='PACKI-600'>PACKI-600</option>
                            <option value='DH'>DH</option>
                        </Select>
                </Flex>
            </Flex>
        
            <Table 
                bg='gray.200' 
                border='2px' 
                w='full' 
                mb='20px'
            >
                <Thead borderBottom='2px'>
                    {partsTable.getHeaderGroups().map((headerGroup) =>
                        <Tr key={headerGroup.id} >
                            {headerGroup.headers.map( (header) => 
                                <Th 
                                    key={header.id}
                                    color='black'
                                    border='1px'
                                    bg='gray.300'
                                    fontWeight='bold'
                                    fontSize='md'
                                    onClick={header.column.getToggleSortingHandler()}
                                    >
                                    { 
                                        header.isPlaceholder ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                    )}
                                    {
                                        { asc: '🔼', desc:'🔽' } 
                                        [header.column.getIsSorted() ?? null]
                                    }
                                </Th>
                            )}
                        </Tr>
                    )}
                </Thead>
                <Tbody >
                    {partsTable.getRowModel().rows.map( (row) =>
                        <Tr key={row.id} >
                            {row.getVisibleCells().map( (cell) =>
                                    <Td border='1px' key={cell.id}>
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
            <Flex gap='3' alignItems='center'>
                    <Button border='2px' colorScheme='gray' onClick={() => partsTable.setPageIndex(0)}>First Page</Button>
                    <Button border='2px' colorScheme='gray' isDisabled={!partsTable.getCanPreviousPage()} onClick={() => partsTable.previousPage()}>Previous Page</Button>
                    <Text>Page {partsTable.getState().pagination.pageIndex +1} of {partsTable.getPageCount()} </Text>
                    <Button border='2px' colorScheme='gray' isDisabled={!partsTable.getCanNextPage()} onClick={() => partsTable.nextPage()}>Next Page</Button>
                    <Button border='2px' colorScheme='gray' onClick={() => partsTable.setPageIndex(partsTable.getPageCount()-1)}>Last Page</Button>
                    {console.log(`previousPage: ${partsTable.getCanPreviousPage()}`)}
                    {console.log(`previousPage: ${partsTable.getCanNextPage()}`)}
            </Flex>
        </>
    );
}

