import React from 'react'
import { Box, Flex, Heading, Text, Spacer, Select,Center } from '@chakra-ui/react'
import { SiLionair } from 'react-icons/si'
import { NavLink } from 'react-router-dom'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillYoutube,AiOutlineCopyrightCircle } from 'react-icons/ai'
import { TiSocialTwitter } from 'react-icons/ti'
import { SiGmail } from 'react-icons/si'

const style = {display:'inline-block',cursor:"pointer", margin:'7px'}
const data = [{ title: 'Product', content: ['Why NoteBook', 'NoteBook Free', 'NoteBook Personal', 'NoteBook Professional', 'NoteBook Teams', 'Compare Plans'] },
{ title: 'Features', content: ['Web Clipper', 'Templates,Spaces', 'Integrations', 'Notes Sync', 'PDF & Doc Search', 'Search Handwriting', 'Document Scanning', 'Notebooks & Tags', 'Tasks', 'Calendar', 'Home', 'Search'] },
{ title: 'Community', content: ['Our Community', 'Certified Consultants', 'Beta Program', 'Developers', 'Forum'] },
{ title: 'Support', content: ['Help & Learning', 'Troubleshooting', 'Blog'] }, { title: 'Company', content: ['Careers', 'About us', 'Contact us'] }]

function Footer() {
    return (
        <Box width='100%' p='30px'>
            <Box width='100%' borderBottom='4px' mb='20px' borderColor='Black'>

                <NavLink to='/'>
                    <Flex my='6' >
                        <SiLionair style={{ fontSize: '2.8em', color: '#7166C1' }} />
                        <Heading
                            alignSelf='flex-start' fontSize='2em'>NoteBook</Heading>

                    </Flex>
                </NavLink>


            </Box>
            <Flex py='20px' direction={['column', 'column', 'row']} >
                {data.map((a, i) => {
                    return <Flex direction='column' key={i + '2'} >
                        <Heading fontSize={['1.3em', '1.5em']} py='10px' >{a.title}</Heading>
                        {a.content.map((c, n) => <Text key={n + 'n'} py='15px' pr={['20px', '40px']} _hover={{ cursor: 'pointer', color: ' #7166C1' }}> {c} </Text>)}
                    </Flex>
                })}
            </Flex>
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
