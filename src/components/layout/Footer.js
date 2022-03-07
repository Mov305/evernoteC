import React from 'react'
import { Box, Flex,Text, Spacer, Select,Center } from '@chakra-ui/react'

import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillYoutube,AiOutlineCopyrightCircle } from 'react-icons/ai'
import { TiSocialTwitter } from 'react-icons/ti'
import { SiGmail } from 'react-icons/si'

const style = {display:'inline-block',cursor:"pointer", margin:'7px'}

function Footer() {
    return (
        <Box width='100%' p='30px'>
            <Flex borderBottom='4px' mb='20px' borderColor='gray.400' direction={['column','row']}>
                <Box width={['200px','300px']}>
                    <Select variant='unstyled' placeholder="Select lang">
                        <option value="option1">En</option>
                        <option value="option2">Fr</option>
                        <option value="option3">Ar</option>
                    </Select>
                </Box>
                <Spacer/>
                <Flex fontSize={['1.5em','2em']}>
                    <AiFillFacebook style={style} _hover={{color:'#7166C1'}} />
                    <AiFillInstagram style={style} _hover={{color:'#7166C1'}} />
                    <AiFillLinkedin style={style} _hover={{color:'#7166C1'}} />
                    <AiFillYoutube style={style} _hover={{color:'#7166C1'}} />
                    <TiSocialTwitter style={style} _hover={{color:'#7166C1'}} />
                    <SiGmail style={style} _hover={{color:'#7166C1'}} />

                    
                </Flex>

            </Flex>
            <Center my='40px' color='gray.400'><Text> <AiOutlineCopyrightCircle style={{display:'inline-block'}}/>2021 all rights reserved to Mov(mov2two2001@gmail.com) </Text>  </Center> 

        </Box>
    )
}

export default Footer
