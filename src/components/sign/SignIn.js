import React from 'react'
import { Box, Flex, InputGroup, Input, InputRightElement, Button, Heading, Text, Tag } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { getAuth,signInWithEmailAndPassword} from "firebase/auth";




const SignIn = () => {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const emilRef = React.useRef(null)
    const passwordRef = React.useRef(null)


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
        <Box width='full' pt='100'>
                    <Box bg='white' p={[5,10]}  shadow='2xl' border="1px solid #8080802e"
                     rounded='base' m='auto' alignSelf='center' maxW={['90%','90%','90%','800']} >
            <Heading align='center' mb='3' fontSize={['large','large','xl','2xl']}>Wellcome to EverNote</Heading>
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
                            <Button h="1.75rem" size="sm" onClick={handleClick} >
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
                    <Text alignSelf='center' display='flex'alignItems={'center'} flexDir={['column','row']} fontWeight='semibold' >Not yet register?
                        <Tag fontWeight='bold' fontSize='1em' bg='transparent'
                            _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
                            <Link to='/signup'>Sign up</Link>
                        </Tag>
                    </Text>
                </Flex>


            </form>
        </Box>
        </Box>


    )
}

export default SignIn
