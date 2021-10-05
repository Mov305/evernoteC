import React from 'react'
import { Flex,Heading ,Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Flex bgColor='#24CC65' p={5} color='white' mb={6}>
            <NavLink to='/'>
                 <Heading _hover={{cursor:'pointer'}} alignSelf='flex-start' size='lg'>NoteBook</Heading>
            </NavLink>
            <Flex justifyContent='center' align='center' grow='10'>
                <Button bgColor='transparent' colorScheme='whatsapp' rounded='none'>
                <NavLink to='/favorites'>Favorites</NavLink>

                </Button>
        </Flex>
        </Flex>
    )
}

export default NavBar
