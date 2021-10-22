import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {Box,Img,Flex,Text,Heading} from '@chakra-ui/react'
import todo from '../../../assets/icons8-checklist-96.png'
import finger from '../../../assets/icons8-fingerprint-scan-80.png'
import calendar from '../../../assets/icons8-calendar-100.png'


function VerseFour() {
    return (
        <Box p={['20px','120px']} fontSize={['1.2em','1.5em']}>
            <Flex direction={['column-reverse','column-reverse','row']} width='100%' py='30px'>
            <Box p='20px'>
                <Heading py='10px'>Hit every deadline</Heading>
                <Text>
                Create and assign tasks inside your notes with due dates, flags, and reminders so nothing falls through the cracks.                </Text>
                <Text color='green'>Learn More <AiOutlineArrowRight style={{color:'green',display:'inline-block',cursor:'pointer'}}/> </Text>
            </Box>
            <Img src={todo} dispaly='block'  p='20px' width='150px' height='150px' />
            </Flex>

            <Flex direction={['column','column','row']} width='100%' py='30px'>
            <Img src={finger} dispaly='block'  p='20px' width='150px' height='150px' />
            <Box p='20px'>
                <Heading py='10px'>Go paperless</Heading>
                <Text>
                Scan important documents and keep them handy on all your devices. Save the information—not the clutter.                </Text>
                <Text color='green'>Learn More <AiOutlineArrowRight style={{color:'green',display:'inline-block',cursor:'pointer'}} /> </Text>
            </Box>
            </Flex>


            <Flex direction={['column-reverse','column-reverse','row']} width='100%' py='30px'>  
            <Box p='20px'>
                <Heading py='10px'>Connect your Google Calendar</Heading>
                <Text>
                  Make your schedule work for you. Your meetings and notes have context so nothing gets lost in the shuffle.
                </Text>
                <Text color='green'>Learn More <AiOutlineArrowRight style={{color:'green',display:'inline-block',cursor:'pointer'}}/> </Text>
            </Box>
            <Img src={calendar} dispaly='block' p='20px' width='150px' height='150px' />
            </Flex>
        </Box>
    )
}

export default VerseFour
