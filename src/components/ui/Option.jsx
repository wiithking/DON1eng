import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getOptions } from '../../api/firebase';


function makeOption(option) {
    return 
        <option value={option}>{option}</option>
}

export default function Option(option) {
    const {
        isLoading,
        error,
        data: options
        } = useQuery({
            queryKey: [{option}],
            queryFn: getOptions({option})
        });

    return (<>
            {isLoading && <p>loading...</p>}
            {error && <p>{error}</p>}
            {options &&
                options.map((option) => (
                    <makeOption key={option.id} option={option} />
            ))}
        </>
    );
}

