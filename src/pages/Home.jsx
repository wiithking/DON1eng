import React from 'react';
// import { useAuthContext } from '../context/AuthContext';
import Welcome from '../components/Welcome';
// import HomeLogin from '../components/HomeLogin';
// import DBChange from '../components/wiithking/DBChange';

export default function Home() {
    // const { user } = useAuthContext();
    return (
        <div className='flex w-full h-full pt-40 grid place-items-center'>
            <img className='h-10 mb-10' src='https://a.slack-edge.com/bv1-13/slack_logo-ebd02d1.svg' alt='slack' />
            {/* { user && <Welcome /> }
            { !user && <HomeLogin /> } */}
            <Welcome />
            
        </div>
        
    );
}

