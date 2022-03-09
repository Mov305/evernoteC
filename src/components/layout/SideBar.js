import React from 'react'
import { Box, Flex, Heading, Img, Spacer, Text } from '@chakra-ui/react'
import { SiLionair } from 'react-icons/si'
import avatar from './../../assets/avatar.webp'
import { BiMenuAltLeft, BiSearchAlt, BiNotification } from 'react-icons/bi'
import { BsBookmarkHeart, BsBookmarkDash } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineSetting, AiOutlineFileAdd, AiOutlineLogout } from 'react-icons/ai'
import { getAuth, signOut } from 'firebase/auth'
import withRouter from '../../customhook/withRouter'
import { useNavigate } from 'react-router-dom'



function SideBar(props) {

  const navigate = useNavigate();




  const handleNavigate = (direction) => {
    navigate(direction);
  }





  const handleLogOut = () => {
    signOut(getAuth())
  }
  const style = { height: '100%', width: '100%', cursor: 'pointer' }
  const responsive = {
    p: ['2px','3px','5px'],
    rounded: 'xl',
    _hover: { background: 'white', color: '#7166C1' },
    boxSize: ['30px','30px','40px'],
    m: ['30x','5px','10px'],
    color: 'white'
  }

  return (
    <Box h='96%' w={['40px', '50px', '80px']} bg='#7166C1' rounded='lg' pos='Fixed' zIndex='2' >

      <Flex m='2px' pos='absolute' left={['80px']} >
        <Box fontSize={['1.7em', '2em', '2.8em']} >
          <SiLionair style={{ color: '#7166C1' }} />

        </Box>
        <Heading
          alignSelf='flex-start' fontSize={['1.5em', '1.7em', '2em']} onClick={() => console.log(props)}>NoteBook</Heading>

      </Flex>
      <Flex direction='column' align='center' pt='10px' h='100%' overflowY={['scroll', 'hidden']} >
        <Box p='5px' rounded='xl' _hover={{ background: 'white', color: '#7166C1' }} boxSize={['35px','40px','45px']} mb={['20px','30px']} color='white' >
          <BiMenuAltLeft style={style} />
        </Box>
        <Box mb={['10px','15px','30px']} cursor='pointer' >
          <Img border='3px solid white' src={avatar} boxSize={['30px','35px','50px']} rounded='full' mx={['5px','7.5px','15px']} />
          <Text textAlign='center' color='white' >User</Text>
        </Box>
        <Box  {...responsive} >
          <AiOutlineHome style={style} onClick={() => handleNavigate('/home')} />
        </Box>
        <Box {...responsive} >
          <AiOutlineFileAdd style={style} onClick={() => handleNavigate('/add')} />
        </Box>
        <Box {...responsive} >
          <BiNotification style={style} />
        </Box>
        <Box {...responsive} >
          <BiSearchAlt style={style} />
        </Box>
        <Box {...responsive}>
          <BsBookmarkHeart style={style} onClick={() => handleNavigate('/favorites')} />
        </Box>
        <Box {...responsive}>
          <BsBookmarkDash style={style} />
        </Box>
        <Box {...responsive} >
          <AiOutlineSetting style={style} />
        </Box>
        <Spacer />
        <Box {...responsive} >
          <AiOutlineLogout onClick={() => handleLogOut()} style={style} />
        </Box>
      </Flex>
    </Box>
  )
}

export default withRouter(SideBar)