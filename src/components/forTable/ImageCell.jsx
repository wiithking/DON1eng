import { Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function ImageCell({getValue, row, column, partsTable}) {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);

    useEffect( () => {
        setValue(initialValue);
    }, [initialValue])

    return (
        <div>
            <Image
                boxSize='50px'
                border='0px'
                src={initialValue}
                alt={value}
            />
        </div>
    );
}

