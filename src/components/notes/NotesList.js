import React from 'react'
import {Flex,Button} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import Note from './Note'

const NotesList = () => {
    useFirestoreConnect([{collection:'notes',orderBy:['createdAt','desc']}])
    const notes = useSelector((state)=>state.firestore.ordered.notes)
    return (
        <Flex direction='column'>
            {notes? notes.map(note=><Note note={note} key={note.id}/>):
            <Button
            isLoading
            width='full'
            height='full'
            variant='outline'
          >
            Click me
          </Button>
            }
            <Note></Note>
        </Flex>
    )
}

export default NotesList
