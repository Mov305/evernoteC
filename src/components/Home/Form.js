import React from 'react'
import { Box, Heading, Textarea,Input,Button } from '@chakra-ui/react'
import useInput from '../../customhook/useInput'
import { addNote } from '../../store/action/noteAction'
import {useDispatch} from 'react-redux'

const Form = () => {
    const dispatch =useDispatch()
    const [title,bindTitle,resetTitle] = useInput()
    const [content,bindContent,resetContent] = useInput()
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(title&&content){        
            dispatch(addNote({title,content}))
            resetContent();
            resetTitle();
        }
        
    }
    return (
        <Box align='center' shadow='xl' p='4' bgColor='white'>
            <form action="" onSubmit={(e)=>handleSubmit(e)}>
                <Heading fontSize='md'>New Note</Heading>
                <Input
                 type='text' variant='flushed' colorScheme='teal' placeholder='Note Title' p='5'
                  {...bindTitle}/>
                <Textarea
                    placeholder="Note Content" size="sm"  resize='unset' my={5} p='5'
                    {...bindContent}
                />
                <Button colorScheme='whatsapp' bgColor='green.300' m='2' type='submit'  >Add</Button>
            </form>
        </Box>
    )
}

export default Form
