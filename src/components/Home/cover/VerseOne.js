import React from 'react'
import { Box,Heading,Text,Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

function VerseOne() {
    return (
        <Box width='full' align='center' px={['10px','20px','100px','150px']} py='150px'>
            <Heading fontSize={['1.3em','2em','3em','3.5em']} >Wellcome to NoteBook, Orgainze your work and your life</Heading>
            <Text fontSize={['md','lg','xl','1.7em']} pt='20px' px='30px'>Remember everything and tackle any project with your notes,
                 tasks, and schedule all in one place.
            </Text>
            <Box fontSize={['md','lg','xl','xl']} p='10px' >
              <Button
               fontSize='xl'  
               pos='relative' width={['200px','300px']} height='70px'
               _hover={{background:'#9E81E1'}}
               bg='#7166C1' color='white' display='block'
               zIndex='0'>Sign up for free</Button>
              <Link to='/signin' style={{textDecoration:'underline'}}>Already have an account? Log in</Link>

            </Box>
        </Box>
    )
}

export default VerseOne
