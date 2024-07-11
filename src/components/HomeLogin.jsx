import React from 'react';
import { useAuthContext } from '../context/AuthContext';

export default function HomeLogin() {
    const { login } = useAuthContext();
    // const hompageLogin = () => {
    //     login();
    // }
    return (
            <button 
                className='flex items-center cursor-pointer border-1 border-brand shadow-md rounded-lg pl-40 pr-40 pb-2 pt-2 hover:bg-gray-50'
                onClick={login}
                >
                
                <img className='w-10 h-10 mr-2' src='https://www.google.com/images/hpp/ic_wahlberg_product_core_48.png8.png' alt='google login' />
                <span className='text-2xl'>을 사용하여 로그인하세요!</span>
            </button>
    );
}

