import React from 'react';
import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useQuery } from '@tanstack/react-query';
import { getParts } from '../../api/firebase';
import EditableCell from '../../components/forTable/EditableCell';
import CategoryCell from '../../components/forTable/CategoryCell';




// const {
//     isLoading,
//     error,
//     data: parts
// } = useQuery({
//     queryKey: ['parts'],
//     queryFn: getParts
// });

const columns = [
    {
        accessorKey: 'partNumberDON1eng',
        header: "ID",
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'partNameEng',
        header: "Part Name(Eng)",
        cell: EditableCell,
    },
    {
        accessorKey: 'partNameKor',
        header: "Part Name(Kor)",
        cell: EditableCell,
    },
    {
        accessorKey: 'modelNumber',
        header: "Model Number",
        cell: EditableCell,
    },
    {
        accessorKey: 'category',
        header: "Category",
        cell: CategoryCell
    },
    {
        accessorKey: 'autobagModel',
        header: "Autobag",
        cell: (props) => <p>{props.getValue()}</p>
    },
]
export default function PartsTable() {
    const {
        isLoading,
        error,
        data: parts
    } = useQuery(
        {
            queryKey: ['parts'],
            queryFn: getParts
        }
    );
    // const data = useMemo( () => parts, [parts] );
    const [data, setData] = useState(parts);
    const partsTable = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel(),
        columnResizeMode: "onChange",
        meta: {
            updateData: (rowIndex, columnId, value) =>
                setData((prev) => prev.map(
                    (row, index) => index === rowIndex 
                        ? {
                            ...prev[rowIndex],
                            [columnId]: value,
                        }
                        : row
                )),
        },
    });
    // console.log(data)
    console.log(data);
    return (
        <Box>
            {isLoading && <Text>Loading...</Text>}
            {error && <Text>{error}</Text>}
            <Box className='table' w={partsTable.getTotalSize()}>
                {partsTable.getHeaderGroups().map(headerGroup => 
                    <Box className="tr" key={headerGroup.id}>
                        {headerGroup.headers.map(header => 
                            <Box className="th" w={header.getSize()} key={header.id}>
                                {header.column.columnDef.header}
 {/* resizer start ********************************************************************************/}
                                <Box
                                    className={
                                        `resizer ${header.column.getIsResizing() ? "isResizing" : ""}`
                                    }
                                    onMouseDown={
                                        header.getResizeHandler()
                                    }
                                    onTouchStart={
                                        header.getResizeHandler()
                                    }
                                    />
                            </Box>
// resizer end ********************************************************************************
                        )}
                    </Box>
                )}
                {partsTable.getRowModel().rows.map( row => 
                    <Box className='tr' key={row.id}>
                        {row.getVisibleCells().map( cell => 
                            <Box className='td' w={cell.column.getSize()} key={cell.id}>
                                {
                                    flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )
                                }
                            </Box>
                        )}
                    </Box>
                )}
            </Box>
        </Box>
    );
}

