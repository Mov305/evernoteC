import React from 'react'
import { Box } from '@chakra-ui/layout'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import moment from 'moment'
import { Flex, Text, Heading } from '@chakra-ui/react'

const NoteDetails = ({ match }) => {
    const id = match.params.id
    useFirestoreConnect([{ collection: 'notes', doc: id }])
    const note = useSelector(({ firestore: { data } }) => data.notes && data.notes[id])

    const noteMarkup = !isLoaded(note) ?
        (<Box mx={20} my={12} bgColor='whitesmoke' shadow='xl'>
            <Box p={5} shadow='base' mt={3} bgColor='white'>
                <Flex>
                    <Heading size='md' py={3}>...Loading</Heading>
                </Flex>
                <Text>...</Text>

            </Box>
            <Text fontSize='smaller' color='gray.500' p={3} >...</Text>
        </Box>
        ) : isEmpty(note) ? (
            <Box mx={20} my={12} bgColor='whitesmoke' shadow='xl'>
                <Box p={5} shadow='base' mt={3} bgColor='white'>
                    <Flex>
                        <Heading size='md' fontWeight='semibold' py={3}>The note content is empty</Heading>
                    </Flex>
                    <Text>...</Text>

                </Box>
                <Text fontSize='smaller' color='gray.500' p={3} >...</Text>

            </Box>

        ) : (
            <Box mx={20} my={12} bgColor='whitesmoke' shadow='xl'>
                <Box p={5} shadow='base' mt={3} bgColor='white'>
                    <Flex>
                        <Heading size='md' fontWeight='semibold' py={3}> {note.title} </Heading>
                    </Flex>
                    <Text>{note.content}</Text>

                </Box>
                <Text fontSize='smaller' color='gray.500' p={3} >{moment(note.createdAt.toDate()).calendar()}</Text>

            </Box>

        )



    return noteMarkup


}

export default NoteDetails
