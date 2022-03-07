import React, { useState, useRef } from "react";
import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import JoditEditor from "jodit-react";
import useInput from "../../customhook/useInput";
import { addNote } from '../../store/action/noteAction'
import { useDispatch } from 'react-redux'


const Home = () => {


    const dispatch = useDispatch()
    const [title, bindTitle, resetTitle] = useInput()

    const editor = useRef(null);
    const [content, setContent] = useState("Start writing");
    const config = {
        readonly: false,
        height: window.innerHeight * 0.6
    };

    const handleSubmit = () => {
        let letter = editor.current.value
        if (title && letter) {
            dispatch(addNote({ title,letter  }))
            resetTitle();
            setContent('')
        }
    }
    return (
        <Box rounded='3xl' h='100%' width='full' bg='white' border="1px solid #8080802e" p='20px' shadow='2xl'>
            <Flex direction='column'>
                <Heading fontSize='md'>New Note</Heading>
                <Input
                    type='text' variant='flushed' colorScheme='teal' placeholder='Note Title' py='5' my='10px'
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
                <Box rounded='lg' color='white' bg='#7166C1' fontSize='larger' fontWeight='semibold'
                    _hover={{ background: '#998FE2' }} alignSelf='flex-end' cursor='pointer'
                    width='150px' h='50px' my='20px' textAlign='center' p='9px'
                    onClick={() => handleSubmit()} >
                    Submit </Box>
            </Flex>
        </Box>
    )
}

export default Home
