import React from "react";
import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import NotesList from "../notes/NotesList";


const Home = () => {

    return (
        <Box rounded='3xl' h='100%' width='full' bg='white' border="1px solid #8080802e" p='20px' shadow='2xl'>
            <Flex direction='column'>
                <Heading fontSize={['md','x-large','x-large','xx-large']} borderBottom='1px solid #e0d6d670' textAlign='center' >Timeline</Heading>
                <Box position='relative' >
                              <NotesList/>
                </Box>
            </Flex>
        </Box>
    )
}

export default Home
