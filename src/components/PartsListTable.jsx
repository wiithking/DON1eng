import { useQuery } from "@tanstack/react-query";
import { getParts } from "../api/firebase";
import { Table, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
// import { useMemo } from "react";
// import testData from './wiithking/testData.json';

export default function PartsListTable() {
    const {
        isLoading,
        error,
        data,
    } = useQuery({
        queryKey: ['parts'],
        queryFn: getParts
    });
    
    // const data = useMemo(() => parts, [])

    // const data = JSON.stringify(parts);
    // const data = JSON.parse(parts)

    // const data = parts;

    // console.log(parts);
    console.log(data);
    // const data = testData;

    const columns = [
        {
            header: 'Part Number',
            accesorKey: 'partNumberDON1eng',
            // cell: (props) => <p>{props.getValue()}</p>  
        },
        {
            header: 'Category',
            accesorKey: 'category',  
            // cell: (props) => <p>{props.getValue()}</p>  
        },
        {
            header: 'Part Name(E)',
            accesorKey: 'partNameEng',  
            // cell: (props) => <p>{props.getValue()}</p>  
        },
        {
            header: 'Part Name(K)',
            accesorKey: 'partNameKor',  
            // cell: (props) => <p>{props.getValue()}</p>  
        },
        {
            header: 'Model Number',
            accesorKey: 'modelNumber',  
            // cell: (props) => <p>{props.getValue()}</p>  
        },
        {
            header: 'NeedQty',
            accesorKey: 'needQty',  
            // cell: (props) => <p>{props.getValue()}</p>  
        },
        {
            header: 'Size',
            accesorKey: 'size',  
            // cell: (props) => <p>{props.getValue()}</p>  
        }
    ];
    // 
    // 
    // 


    // autobagModel
    // barcodeImg
    // category
    // description
    // id
    // manufacturer
    // modelNumber
    // needQty
    // note
    // partImg
    // partNameEng
    // partNameKor
    // partNumberDON1eng
    // partNumberManufacturer
    // position01Img
    // position02Img
    // price
    // recommendedReplacementCycle
    // size
    // usePosition


    const table = useReactTable({ 
        data, 
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            {isLoading && <Text>Loading...</Text>}
            {error && <Text>{error}</Text>}
            {/* {console.log(parts)} */}
            {/* {console.log(`data: ${data}`)} */}
            <Table>
                <Thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <Th key={header.id}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                {/* <Tbody>
                     {table.getRowModel().rows.map(row => (
                        <Tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <Td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody> */}
            </Table>
        </>
    );
}


