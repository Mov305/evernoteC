import React from 'react'
import {
    Box, Flex, InputGroup, Input, InputRightElement, Button,
    Heading, Select, Spacer
} from '@chakra-ui/react'
import { AiFillBackward } from 'react-icons/ai'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUserData } from '../../store/action/noteAction';
import {useNavigate} from 'react-router-dom'




const SignUp = () => {

    const [show, setShow] = React.useState(false)
    const [sho, setSho] = React.useState(false)
    const [winSize, setWinSize] = React.useState(window.innerWidth)
    const [nextbtn, setNextbtn] = React.useState(0)
    const emilRef = React.useRef(null)
    const passwordRef = React.useRef(null)
    const repass = React.useRef(null)
    const firstName = React.useRef(null)
    const lastName = React.useRef(null)
    const address = React.useRef(null)
    const [userInfo,setUserInfo] = React.useState(null)

    const handleNext = () => {
        const pass = passwordRef.current.value;
        const pass2 = repass.current.value;
        const email = emilRef.current.value;
         

        if (pass.length >= 8 && pass === pass2 && email.length > 10 &&
            firstName.current.value && lastName.current.value) {
            setNextbtn(1)
        } else if (email.length <= 10) {
            alert('Please write a vaild email!')
        }
        else if (pass.length < 8) {
            alert('The password must be more than 8 letters!')
        } else if (pass !== pass2) {
            alert('The passwords does not match!')
        } else {
            console.log('error')
        }

    }
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const signUp = (e) => {
        e.preventDefault();
        dispatch(addUserData(userInfo))
        
        const auth = getAuth();
        const email = emilRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                // Signed in 
                console.log(user)
                sendEmailVerification(auth.currentUser)
                navigate('/home')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode)
                alert(errorMessage);
                
            }); 
    }
    const style = { fontWeight: 500 }
    React.useEffect(()=>{
        const event=()=>setWinSize(window.innerWidth)
        window.addEventListener('resize',event)
        return ()=>{
            window.removeEventListener('resize',event)
        }
    },[winSize])

    return (
        <Box width='full' pt='100'>
            <Box overflowX='hidden' bg='white' border="1px solid #8080802e" shadow='2xl' rounded='lg'
                m='auto' alignSelf='center' width={[winSize * 0.9, winSize * 0.9, '650px', '800px']}>
                <Flex width={[winSize * 1.8, winSize * 1.8, '1300px', '1600px']} transition='all ease-in-out 0.5s'
                    transform={[`translate3d(${-winSize * 0.9 * nextbtn + 'px'},0px,0px)`, `translate3d(${-winSize * 0.9 * nextbtn + 'px'},0px,0px)`,
                    `translate3d(${-650 * nextbtn + 'px'},0px,0px)`, `translate3d(${-800 * nextbtn + 'px'},0px,0px)`]}  >
                    <Box width={[winSize * 0.9, winSize * 0.9, '650px', '800px']} p={['15px', '30px']} >
                        <Heading align='center' mb='3' fontSize={['large', 'large', 'xl', '2xl']}>Wellcome to EverNote</Heading>
                        <form >
                            <Flex direction='column'>
                                <Flex direction={['column', 'column', 'row']}>
                                    <Box pr='2'>
                                        <label style={style}>First name</label>
                                        <Input type='text'
                                            placeholder='First name'
                                            ref={firstName} onChange={(e)=>{setUserInfo({...userInfo,firstName:e.target.value})}} />
                                    </Box>
                                    <Spacer />
                                    <Box >
                                        <label style={style}>Last name</label>
                                        <Input type='text'
                                            placeholder='Last name'
                                            ref={lastName} onChange={(e)=>{setUserInfo({...userInfo,lastName :e.target.value})}} />
                                    </Box>
                                </Flex>

                                <label style={style}>
                                    Email
                                </label>
                                <Input
                                    my={2} pr='4.5rem' type='text'
                                    placeholder='Enter email'
                                    ref={emilRef}  />
                                <InputGroup size="md" my={2}>
                                    <Input
                                        pr="4.5rem"
                                        type={show ? "text" : "password"}
                                        placeholder="Enter password"
                                        ref={passwordRef}
                                    />
                                    <InputRightElement width="4.5rem" zIndex={0}>
                                        <Button h="1.75rem" size="sm" onClick={() => setShow(!show)} >
                                            {show ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <InputGroup size="md" my={2}>
                                    <Input
                                        pr="4.5rem"
                                        type={sho ? "text" : "password"}
                                        placeholder="Re enter the password"
                                        ref={repass}
                                    />
                                    <InputRightElement width="4.5rem" zIndex={0}>
                                        <Button h="1.75rem" size="sm" onClick={() => setSho(!sho)} >
                                            {sho ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <Flex justifyContent='flex-end'>
                                    <Box rounded='base' width={['100px']} h={['40px']} textAlign='center' p='2'
                                        cursor='pointer' onClick={() => handleNext()}
                                        bg='rgb(113, 102, 193)' color='white' border='1px solid black'>
                                        Next
                                    </Box>
                                </Flex>
                            </Flex>


                        </form>
                    </Box>
                    <Flex width={[winSize * 0.9, winSize * 0.9, '650px', '800px']} p={['15px', '35px']} direction='column' >
                        <Box width={['200px', '300px']}>
                            <Box onClick ={()=>setNextbtn(0)} cursor='pointer' mb='30px'>
                                <AiFillBackward />
                            </Box>
                            <label style={style}>Country</label>
                            <Select variant='outline' width='100%' placeholder="Select Country" mb='5'
                            onChange={(e)=>{setUserInfo({...userInfo,country:e.target.value})}}>
                                <option value="option1">Egypt</option>
                                <option value="option2">else</option>
                            </Select>
                        </Box>
                        <label style={style} >Address</label>
                        <Input mb='5' type='text' placeholder='address' ref={address}
                        onChange={(e)=>{setUserInfo({...userInfo,address:e.target.value})}} />
                        <label style={style} >Phone number</label>
                        <Input type='number' placeholder='Phone number'
                        onChange={(e)=>{setUserInfo({...userInfo,phoneNumber:e.target.value})}}/>
                        <Box width={['150px','200px']} h='50px' margin='30px' fontWeight='bold' color='white' 
                        rounded='base' bg='rgb(113, 102, 193)'  alignSelf='center' textAlign='center' p='3' cursor='pointer'
                        onClick={(e)=>signUp(e)} > SignUp</Box>
                    </Flex>
                </Flex>
            </Box>

        </Box>


    )
}

export default SignUp
