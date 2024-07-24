// import React, { useMemo } from 'react';

import { useQuery } from "@tanstack/react-query";
import { getParts } from "../api/firebase";
import { Text } from "@chakra-ui/react";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
// import { useMemo } from "react";
// import testData from './wiithking/data.json';

export default function PartsListTable() {
    const {
        isLoading,
        error,
        data: parts,
    } = useQuery({
        queryKey: ['parts'],
        queryFn: getParts
    });
    const data = JSON.stringify(parts);
    // const data = useMemo(() => dataJSON, []);

    // const data = useMemo(() => testData, [])

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
        },
    ];
    const table = useReactTable({ 
        data, 
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <>
            {isLoading && <Text>Loading...</Text>}
            {error && <Text>{error}</Text>}
            {/* {console.log(parts)} */}
            {console.log(data)}
            <table>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id}>
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </th>
                        ))}
                    </tr>
                ))}
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {/* {console.log(cell.id)} */}
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}


// [
//     {
//         "autobagModel":"BL-P505S",
//         "barcodeImg":"http://res.cloudinary.com/drvdratta/image/upload/v1720550525/jm3ojwz9johjug2xqj7i.svg",
//         "category":"Air",
//         "description":"wfsdfsdfsdfsdfs",
//         "id":"022ac706-7ae8-466d-9764-0c32ca873ceb",
//         "manufacturer":"coupang co.",
//         "modelNumber":"dfdf",
//         "needQty":1,
//         "note":"dsdfsdfsdfsdfsd",
//         "partImg":"http://res.cloudinary.com/drvdratta/image/upload/v1720550525/oodros0fpr9b5dwlqiaq.jpg",
//         "partNameEng":"Metal blowing nozzle",
//         "partNameKor":"피비 에어 브러쉬",
//         "partNumberDON1eng":"170100102",
//         "partNumberManufacturer":"170100102",
//         "position01Img":"http://res.cloudinary.com/drvdratta/image/upload/v1720550525/apblbq0cm9lih7bvpcmr.jpg",
//         "position02Img":"http://res.cloudinary.com/drvdratta/image/upload/v1720550525/wikwdhamj4oyqud1fy3z.webp",
//         "price":234234234,
//         "recommendedReplacementCycle":1,"size":"23","usePosition":"전면 중앙"
//     },
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