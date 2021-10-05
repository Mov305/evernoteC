import React from 'react'
import {Box,Heading,Input,Textarea,Button} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { editNote } from '../../store/action/noteAction'
import useInput from '../../customhook/useInput'
import { useHistory } from 'react-router'

const EditForm = () => {
 
    const note = useSelector((state) => state.note)
    const dispatch = useDispatch()
    const [title, bindTitle] = useInput(note.title)
    const [content, bindContent] = useInput(note.content)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content) {
            dispatch(editNote({id: note.id, title, content }))
            history.push('/')
        }

    }
    return (
        <Box align='center' shadow='xl' mx={20} my={10} p='4' bgColor='white'>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <Heading fontSize='md'>New Note</Heading>
                <Input
                    type='text' variant='flushed' colorScheme='teal' placeholder='Note Title' p='5'
                    {...bindTitle} />
                <Textarea
                    placeholder="Note Content" size="sm" resize='unset' my={5} p='5'
                    {...bindContent}
                />
                <Button colorScheme='whatsapp' bgColor='green.300' m='2' type='submit'  >Udate</Button>
            </form>
        </Box>
    )

}

export default EditForm