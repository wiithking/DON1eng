import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
// import React, { useMemo } from 'react';
// import tData from '../../components/wiithking/MOCK_DATA.json';
import { Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getTest } from '../../api/firebase';
import { useMemo } from 'react';

export default function TestTable() {
    
    // const data = useMemo( () => tData, [] );
    const {
        isLoading,
        error,
        data: mData
    } = useQuery({
        queryKey: ['mData'],
        queryFn: getTest
    });
// const data = JSON.stringify(mData);
// const data = getTest;
const data = useMemo( () => mData, [mData]);
    // console.log(`mData: ${mData}`)
    // console.log(`data: ${data}`)
    // const data = tData;
    // const data = mData;

    const columns = [
        {
            header: 'ID',
            accessorKey: 'id',
        },
        {
            header: 'First Name',
            accessorKey: 'first_name',
        },
        {
            header: 'Last Name',
            accessorKey: 'last_name',
        },
        {
            header: 'email',
            accessorKey: 'email',
        },
        {
            header: 'Gender',
            accessorKey: 'gender',
        },
        {
            header: 'Ip',
            accessorKey: 'ip_address',
        }
    ]

    // "id": 990,
    // "first_name": "Remus",
    // "last_name": "Airth",
    // "email": "rairthrh@woothemes.com",
    // "gender": "Male",
    // "ip_address": "240.161.124.65"

    const testTable = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

// console.log(data)

    return (
        <div>
            {isLoading && <Text>Loading...</Text>}
            {error && <Text>{error}</Text>}
            <Table>
                <Thead>
                    {testTable.getHeaderGroups().map(headerGroup =>
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => 
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
                    {console.log(testTable.getCoreRowModel().rows)}
                    {testTable.getRowModel().rows.map(row => (
                        <Tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <Td key={cell.id}>
                                    {console.log(data)}
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </div>
    );
}

