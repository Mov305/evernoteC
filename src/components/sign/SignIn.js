import React from 'react'
import { Box, Flex, InputGroup, Input, InputRightElement, Button, Heading, Text, Tag } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification } from "firebase/auth";




const SignIn = () => {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const emilRef = React.useRef(null)
    const passwordRef = React.useRef(null)


    const signUp = (e) => {
        e.preventDefault();
        const auth = getAuth();
        const email = emilRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                // Signed in 
                console.log(user)
                sendEmailVerification(auth.currentUser)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage,errorCode)
            });
    }

    const signIn = (e) => {
        e.preventDefault();
        const auth = getAuth();
        const email = emilRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                // Signed in 
                console.log(user)
                

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage,errorCode)
            });
    }

    return (
        <Box bg='white' p={10} my={10} mx={20} shadow='xl' rounded='base' mt='300'>
            <Heading align='center'>Wellcome to EverNote</Heading>
            <form action="">
                <Flex direction='column'>
                    <Input
                        
                        my={2} pr='4.5rem' type='text'
                        placeholder='Enter email'
                        ref={emilRef} />
                    <InputGroup size="md" my={2}>
                        <Input
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Enter password"
                            ref={passwordRef}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button
                        variant='outline' bgColor='24CC65'
                        colorScheme='green' my={5} alignSelf='center'
                        width='fit-content' size='lg' rounded='lg'
                        onClick={signIn}
                    >Login</Button>
                    <Text alignSelf='center' fontWeight='semibold' onClick={signUp} >Not yet register?
                        <Tag fontWeight='bold' fontSize='1em' bg='transparent'
                            _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
                            <Link to='/signup'>Sign up</Link>
                        </Tag>
                    </Text>
                </Flex>


            </form>
        </Box>

    )
}

export default SignIn
