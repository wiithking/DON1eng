// import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
// import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import { getCategory } from '../../api/firebase';

export default function CategoryCell({ getValue, row, column, partsTable }) {
    // const {name, color} = getValue() || {};
    // const {
    //     isLoading,
    //     error,
    //     data: category
    // } = useQuery({
    //     queryKey: 'category',
    //     queryFn: getCategory
    // });
    // const categories = useMemo(() => category, [category]);
    return (
        <>
        {/* <Menu
        isLazy
        offset={[1,1]}
        flip={false}
        autoSelect={false}
        >
            {console.log(categories)}
            <MenuButton
                h='100%'
                w='100%'
                textAlign='left'
                p={1.5}
                bg={color || 'transparent'}
                color='red.400'
            >
                Category
            </MenuButton>
            <MenuList>
                <MenuItem>sealing</MenuItem>
                <MenuItem>Air</MenuItem>
                <MenuItem>Conveyor</MenuItem>
                <MenuItem>AC</MenuItem>
                <MenuItem>SenserWarning</MenuItem>
                <MenuItem>Roller</MenuItem>
                <MenuItem>Printer</MenuItem>
                <MenuItem>Moter</MenuItem>
                <MenuItem>Etc</MenuItem>
            </MenuList>
        </Menu> */}
        </>
    );
}

