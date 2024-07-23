import { Box, Button, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import { addTest } from '../../api/firebase';

export default function AddTestData() {
    const [testData, setTestData] = useState({});
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordClick = () => setShowPassword(!showPassword);
    const handleChange = (e) => {
        const { name,  value } = e.target;
        setTestData((testdata) => ({ ...testdata, [name]:value }));
    }
    const handleTestSubmit = (e) => {
        e.preventDefault();
        addTest(testData)
            .then( () => {
                setSuccess('Success Input!');
                setTimeout( () => {
                    setSuccess('');
                }, 4000)
            })
    }

    return (
        <Box>
            <Text>{success}</Text>
            <Form onSubmit={handleTestSubmit}>
                <FormControl mb='40px'>
                    <FormLabel>아이디</FormLabel>
                    <Input
                        type='text'
                        name='testId'
                        variant='outline'
                        size='lg'
                        bg='white'
                        onChange={handleChange}
                    />
                    <FormHelperText>ID를 입력하세요!</FormHelperText>
                </FormControl>
                <FormControl mb='40px'>
                    <FormLabel>이름</FormLabel>
                    <Input
                        type='text'
                        name='testName'
                        variant='outline'
                        size='lg'
                        bg='white'
                        onChange={handleChange}
                    />
                    <FormHelperText>이름을 입력하세요!</FormHelperText>
                </FormControl>
                <FormControl mb='40px'>
                    <FormLabel>password</FormLabel>
                        <InputGroup size='lg'>
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                name='testPassword'
                                variant='outline'
                                size='lg'
                                bg='white'
                            />
                            <InputRightElement>
                                <Button onClick={handlePasswordClick}>
                                    {showPassword ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    <FormHelperText>Enter Your Password.</FormHelperText>
                </FormControl>
                <FormControl mb='40px'>
                    <FormLabel>E-mail</FormLabel>
                    <Input
                        type='email'
                        name='testEmail'
                        variant='outline'
                        size='lg'
                        bg='white'
                    />
                    <FormHelperText>Enter Your E-mail.</FormHelperText>
                </FormControl>
                <FormControl>
                    <Button
                        w='full'
                        h='50px'
                        colorScheme='purple'
                        type='submit' 
                    >
                        confirm
                    </Button>
                </FormControl>
            </Form>
        </Box>
    );
}

