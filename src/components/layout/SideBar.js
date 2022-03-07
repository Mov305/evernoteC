import React from 'react'
import { Box, Flex, Heading, Img, Spacer, Text } from '@chakra-ui/react'
import { SiLionair } from 'react-icons/si'
import avatar from './../../assets/avatar.webp'
import { BiMenuAltLeft, BiSearchAlt,BiNotification } from 'react-icons/bi'
import {BsBookmarkHeart,BsBookmarkDash} from 'react-icons/bs'
import { AiOutlineHome,AiOutlineSetting,AiOutlineFileAdd,AiOutlineLogout } from 'react-icons/ai'
import {getAuth,signOut} from 'firebase/auth'
import withRouter from '../../customhook/withRouter'
import {useNavigate} from 'react-router-dom'



function SideBar(props) {

  const navigate = useNavigate();




const handleNavigate = (direction)=>{
  navigate(direction);
}





  const handleLogOut =()=>{
    signOut(getAuth())
  }

  return (
    <Box h='100%' w={['30px','50px','80px']} bg='#7166C1' rounded='lg' pos='relative' >
      
      <Flex m='2' pos='absolute' left={['80px']} >
        <Box fontSize={['1.7em', '2em', '2.8em']} >
          <SiLionair style={{ color: '#7166C1' }} />

        </Box>
        <Heading
          alignSelf='flex-start' fontSize={['1.5em', '1.7em', '2em']} onClick={()=>console.log(props)}>NoteBook</Heading>

      </Flex>
      <Flex direction='column' align='center' pt='10px' h='100%' overflowY={['scroll','hidden']} >
        <Box p='5px' rounded='xl' _hover={{background:'white',color:'#7166C1'}} boxSize={['45px']} mb={['30px']} color='white' >
          <BiMenuAltLeft style={{ height: '100%', width: '100%', cursor: 'pointer' }} />
        </Box>
        <Box mb={['30px']} cursor='pointer' >
          <Img border='3px solid white' src={avatar} boxSize='50px' rounded='full' mx='15px' />
          <Text textAlign='center' color='white' >User</Text>
        </Box>
        <Box p='5px' rounded='xl' _hover={{background:'white',color:'#7166C1'}} boxSize={['40px']} m={['10px']} color='white' >
          <AiOutlineHome style={{ height: '100%', width: '100%', cursor: 'pointer' }} onClick={()=>handleNavigate('/home')} />
        </Box>
        <Box p='5px' rounded='xl' _hover={{background:'white',color:'#7166C1'}} boxSize={['40px']} m={['10px']} color='white' >
          <AiOutlineFileAdd style={{ height: '100%', width: '100%', cursor: 'pointer' }} onClick={()=>handleNavigate('/add')} />
        </Box>
        <Box p='5px' rounded='xl' _hover={{background:'white',color:'#7166C1'}} boxSize={['40px']} m={['10px']} color='white' >
          <BiNotification style={{ height: '100%', width: '100%', cursor: 'pointer' }} />
        </Box>
        <Box p='5px' rounded='xl' _hover={{background:'white',color:'#7166C1'}} boxSize={['40px']} m={['10px']} color='white' >
          <BiSearchAlt style={{ height: '100%', width: '100%', cursor: 'pointer' }} />
        </Box>
        <Box p='5px' rounded='xl' _hover={{background:'white',color:'#7166C1'}} boxSize={['40px']} m={['10px']} color='white' >
          <BsBookmarkHeart style={{ height: '100%', width: '100%', cursor: 'pointer' }} onClick={()=>handleNavigate('/favorites')} />
        </Box>
        <Box p='5px' rounded='xl' _hover={{background:'white',color:'#7166C1'}} boxSize={['40px']} m={['10px']} color='white' >
          <BsBookmarkDash style={{ height: '100%', width: '100%', cursor: 'pointer' }} />
        </Box>
        <Box p='5px' rounded='xl' _hover={{background:'white',color:'#7166C1'}} boxSize={['40px']} m={['10px']} color='white' >
          <AiOutlineSetting style={{ height: '100%', width: '100%', cursor: 'pointer' }} />
        </Box>
        <Spacer/>
        <Box p='5px' rounded='xl' _hover={{background:'white',color:'#7166C1'}} boxSize={['40px']} mb={['70px']} color='white' >
          <AiOutlineLogout onClick={()=>handleLogOut()} style={{ height: '100%', width: '100%', cursor: 'pointer' }} />
        </Box>
      </Flex>
    </Box>
  )
}

export default withRouter(SideBar)