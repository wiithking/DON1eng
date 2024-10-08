// import { Link } from 'react-router-dom';
// import { FiShoppingBag } from 'react-icons/fi';
// import { MdOutlineInventory2 } from 'react-icons/md';
// import { IoSettingsOutline } from "react-icons/io5";
// import { BsPersonWorkspace } from "react-icons/bs";
// import { MdOutlineManageAccounts } from "react-icons/md";
// import User from './User';
// import Button from './ui/Button';
import { Box, Button, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';
// import { useAuthContext } from '../context/AuthContext';

//import { BsFillPencilFill } from 'react-icons/bs';
// const LINK_CSS='flex items-center text-1xl gap-1'; //메뉴 스타일 정의
// const MENU_TEXT_CSS= ''; //'hidden md:block';
// const ICONS_CSS='cursor-point';


export default function Navbar() {
    // const { user, login, logout } = useAuthContext();

    return (
        <Flex mb='40px' as="nav" p="10px" pb='30px' alignItems="center" gap="10px" borderBottom='2px' borderColor='gray.300'>
            <Heading as="h1">DON1 eng</Heading>
            <Spacer />

            <HStack>
                <Box bg="gray.200" p="10px">M</Box>
                <Text>wiithking@gmail.com</Text>
                <Button colorScheme="purple">Logout</Button>
            </HStack>
        </Flex>
        // <header className='flex justify-between font-semibold border-b border-gray-300 p-2'>
        //     <Link to='/' className='flex items-center text-4xl text-brand'>
        //         <FiShoppingBag />
        //         <span className='hidden md:block'>DON1</span>
        //         <span className='hidden md:block ml-3'>eng</span>
        //     </Link>
        //     <nav className='flex items-center gap-3 font-semibold'>
        //             <Link to='/partslist' className={`${LINK_CSS}`}>
        //                 <IoSettingsOutline className={`${ICONS_CSS}`}/><span className={`${MENU_TEXT_CSS}`}>부품</span>
        //             </Link>
        //             <Link to='/invenlist' className={`${LINK_CSS}`}>
        //                 <MdOutlineInventory2 /><span className={`${MENU_TEXT_CSS}`}>재고</span>
        //             </Link>
        //             <Link to='/dailylist' className={`${LINK_CSS}`}>
        //                 <BsPersonWorkspace /><span className={`${MENU_TEXT_CSS}`}>작업</span>
        //             </Link>
        //             <Link to='/personlist' className={`${LINK_CSS}`}>
        //                 <MdOutlineManageAccounts /><span className={`${MENU_TEXT_CSS}`}>권한</span>
        //             </Link>
        //     </nav>
        //     <div className='flex items-center'>
        //         <span>
        //             {/* <User user={user} /> */}
        //         </span>
        //         <span>
        //             <Button
        //                 text={'Login'} 
        //                 cssTextColor={'text-white'} 
        //                 cssBgColor={'bg-brand'} 
        //                 cssPadding={'py-2 px-4'} 
        //                 cssRounded={'rounded-lg'} 
        //                 fontSizer={'text-1xl'} 
        //                 />
        //             {/* {user && <Button 
        //                 text={'Logout'} 
        //                 cssTextColor={'text-white'} 
        //                 cssBgColor={'bg-brand'} 
        //                 cssPadding={'py-2 px-4'} 
        //                 cssRounded={'rounded-lg'} 
        //                 fontSizer={'text-1xl'}
        //                 onClick={logout} />} */}
        //         </span>
        //     </div>
        // </header>
    );
}

