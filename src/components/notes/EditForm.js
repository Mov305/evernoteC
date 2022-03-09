import React from 'react'
import {Box,Heading,Input,Textarea,Button} from '@chakra-ui/react'
import JoditEditor from "jodit-react";
import { useDispatch, useSelector } from 'react-redux'
import { editNote } from '../../store/action/noteAction'
import useInput from '../../customhook/useInput'
import { useNavigate } from 'react-router'

const EditForm = () => {
 
    const note = useSelector((state) => state.note)
    const history = useNavigate()
    const dispatch = useDispatch()
    const [title, bindTitle, resetTitle] = useInput(note.title)

    const editor = React.useRef(null);
    const [content, setContent] = React.useState(note.content);
    const config = {
        readonly: false,
        height: window.innerHeight * 0.6
    };

    const handleSubmit = () => {
        let letter = editor.current.value
        if (title && letter) {
            dispatch(editNote({id: note.id, title, content }));
            resetTitle();
            setContent('');
            history('/home');

        }
    }
    return (
        <Box align='center' shadow='xl' rounded ='xl' mx={20} my={10} p='4' bgColor='white' >
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <Heading fontSize='md'>Edit Note</Heading>
                <Input
                    type='text' variant='flushed' colorScheme='teal' placeholder='Note Title' p='5'
                    {...bindTitle} />
               <Box position='relative' >
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        onChange={(newContent) => { }}
                    />
                    <Box width='100%' pos='absolute' bottom='0' h='20px' bg='#f0ebeb73'  ></Box>
                </Box>
                <Button colorScheme='whatsapp' bgColor='rgb(111, 99, 198)' m='2' type='submit'  >Update</Button>
            </form>
        </Box>
    )

}

export default EditForm
