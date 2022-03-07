import React from 'react'
import { Flex, Heading, Button, Box, Spacer} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { SiLionair } from 'react-icons/si'
import {AiFillCaretDown} from 'react-icons/ai'
import Features from './Features'
import Plans from './Plans'
import SideMenu from './Drawer'


const NavBar = () => {
  const [plans, setPlans]= React.useState(false)
  const [features,setFeatures] = React.useState(false)
  const [shad,setShad] = React.useState(window.scrollY)

  const handleShad=()=>{
    let shadstyle={shadow:'none'}
    if(shad || plans || features){
       shadstyle={
        shadow:'xl'
      }
    }
    return shadstyle
  }


  React.useEffect(
    ()=>{
      const shadHandle =()=>setShad(window.scrollY)
      window.addEventListener('scroll',shadHandle())
      return ()=>{
          window.removeEventListener('scroll',shadHandle())

      }
              // eslint-disable-next-line 
    },[shad])
    
  const style = { color: '#7166C1', borderBottom: '4px solid #7166C1' }
  return (
  <Box width='100%' mb='100' >
   
   <Box bgColor='white' color='black' pos='fixed' top='0' width='100%' zIndex='2' >
      <Flex pos='relative' {...handleShad()} transition='all ease-in-out 0.5s' >
        <Box ml={['3px', '10px', '10px', '40px','140px']} display='flex' alignItems='center'>
        <NavLink to='/'>
          <Flex m='6' >
            <Box fontSize={['1.7em','2em','2.8em']} >
            <SiLionair style={{ color: '#7166C1' }} />

            </Box>
            <Heading 
              alignSelf='flex-start' fontSize={['1.5em','1.7em','2em']}>NoteBook</Heading>

          </Flex>
        </NavLink>
      
        </Box>
        <Flex display={['none','none','none','flex']}
          width='340px' justifyContent='space-between'
          fontWeight='semibold' fontSize='larger' ml='30px' >
          <Box
            bgColor='transparent' rounded='none' display='flex'
            borderBottom='4px' borderColor='transparent' alignItems='center' _hover={style} >
            <NavLink to='/about' >Why NoteBook</NavLink>
          </Box>
          <Box
            bgColor='transparent' rounded='none' display='flex'
            borderBottom='4px' borderColor='transparent' alignItems='center' _hover={style} 
            onMouseOver={()=>setFeatures(true)}  onMouseOut={()=>setFeatures(false)}>
            <NavLink to='/about' >Features <AiFillCaretDown style={{fontSize:'0.5em',display:'inline-block'}}/></NavLink>

          </Box>
          <Box
            bgColor='transparent' rounded='none' display='flex'
            borderBottom='4px' borderColor='transparent'
            alignItems='center' _hover={style}
            onMouseOver={()=>setPlans(true)} onMouseOut={()=>setPlans(false)}>
            <NavLink to='/' >Plans <AiFillCaretDown style={{fontSize:'0.5em',display:'inline-block'}}/></NavLink>

          </Box>

        </Flex>
        <Spacer />
        <Flex alignItems='center' fontSize='larger' display={['none','none','none','flex']} >
          <Box m='3' _hover={{ color: '#7166C1',cursor:'pointer' }}>Help</Box>
          <Box
            bg="transparent" _hover={{ color: '#7166C1',cursor:'pointer' }}
            m='3'>About</Box>
          <Button
            color='#7166C1' fontWeight='bold'
            style={{ border: '3px solid #7166C1' }}
            variant='outline' size='lg' m='3' >DownLoad</Button>
        </Flex>
        <Box display={['unset','unset','unset','none']}>
        <SideMenu/>
        </Box>


      </Flex>
      {features && <Features/>}
      {plans && <Plans/>}
      

    </Box>
 
  </Box>
  )
}

export default NavBar
