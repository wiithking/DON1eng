import { Button } from '@chakra-ui/react';
import React from 'react';
// import { useNavigate } from 'react-router-dom';

export default function IDCell({getValue, row, column, partsTable}) {
    const initialValue = getValue();
    // const navigate = useNavigate();

    return (
        <Button
            bg='transparent'
            // onClick={() => navigate(`/partviewdetail/${initialValue}`)}
        >
    
            {initialValue}
        </Button>
    );
}

