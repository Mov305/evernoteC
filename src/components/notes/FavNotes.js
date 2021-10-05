import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { Box } from '@chakra-ui/layout'
import Note from './Note'



const FavNotes = () => {
    useFirestoreConnect([{collection:'notes',where:['favorite','==',true],orderBy:['createdAt','desc'], storeAs:'favnotes'}])
    const favnotes = useSelector(state=>state.firestore.ordered.favnotes)
    console.log(favnotes)
    return (
        <Box px={20} py={7}>
            {favnotes && favnotes.map(note=><Note note={note} key={note.id}/>) }
        </Box>
    )
}

export default FavNotes
