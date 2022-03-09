import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { Box, Heading, Flex } from '@chakra-ui/layout'
import Note from './Note'



const FavNotes = () => {
    useFirestoreConnect([{ collection: 'notes', where: ['favorite', '==', true], orderBy: ['createdAt', 'desc'], storeAs: 'favnotes' }])
    const favnotes = useSelector(state => state.firestore.ordered.favnotes)
    return (
        <Box rounded='3xl' h='100%' width='full' bg='white' border="1px solid #8080802e" p='20px' shadow='2xl'>
            <Flex direction='column'>
            <Heading fontSize={['md','x-large']} borderBottom='1px solid #e0d6d670' textAlign='center' >Favorite Notes</Heading>
                <Box position='relative' >
                    <Box px={['20px']} py={7}>
                        {favnotes && favnotes.map(note => <Note note={note} key={note.id} />)}
                    </Box>
                </Box>
            </Flex>
        </Box>

    )
}

export default FavNotes
