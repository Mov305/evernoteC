import React from 'react'
import { Box, Flex, Heading, Text} from '@chakra-ui/react'
import { SiLionair } from 'react-icons/si'
import { NavLink } from 'react-router-dom'


const data = [{ title: 'Product', content: ['Why NoteBook', 'NoteBook Free', 'NoteBook Personal', 'NoteBook Professional', 'NoteBook Teams', 'Compare Plans'] },
{ title: 'Features', content: ['Web Clipper', 'Templates,Spaces', 'Integrations', 'Notes Sync', 'PDF & Doc Search', 'Search Handwriting', 'Document Scanning', 'Notebooks & Tags', 'Tasks', 'Calendar', 'Home', 'Search'] },
{ title: 'Community', content: ['Our Community', 'Certified Consultants', 'Beta Program', 'Developers', 'Forum'] },
{ title: 'Support', content: ['Help & Learning', 'Troubleshooting', 'Blog'] }, { title: 'Company', content: ['Careers', 'About us', 'Contact us'] }]

function Footer2() {
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
        </Box>
    )
}

export default Footer2
