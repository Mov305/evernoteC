import React from 'react'
import {Box,Text,Heading,Flex,Spacer,Center} from '@chakra-ui/react'
import {AiOutlineDelete,AiFillEdit,AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { deleteNote, toggleFav } from '../../store/action/noteAction'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'




const Note = ({note}) => {
    const dispatch = useDispatch()

    const editNoteHandler = ()=>{
        dispatch({type:'EDIT_NOTE',payload:note})
    }

    const style={fontSize:'1.25em',cursor:'pointer',margin:'4' }
    if(note){
        const handleDelete = ()=>{
            dispatch(deleteNote(note.id))
      }
      const handleToggle=()=>{
          dispatch(toggleFav(note))
      }
        return (
            <Box p={5} shadow='xl' my={3} bgColor='white'>
                <Flex>
                    <Link to={`/notes/${note.id}`}>
                    <Heading size='md'> {note.title} </Heading>

                    </Link>
                 <Spacer/>
                 {note.favorite?
                  <AiFillHeart 
                  onClick={handleToggle}
                  style={{color:'red',fontSize:'1.25em',cursor:'pointer' }}/>:
                  <AiOutlineHeart 
                  onClick={handleToggle}
                  style={style}/>
                 }
                 <AiOutlineDelete 
                 onClick={handleDelete}
                 style={style}
                 />
                </Flex>
                
                
                <Text>{note.content}</Text>
                <Center fontSize='smaller' color='gray.500' mt={5} >{moment(note.createdAt.toDate()).fromNow()}</Center>

                <Flex>
                <Spacer/>
                <Link to={`/edit/${note.id}`}>
                <AiFillEdit style={style} onClick={editNoteHandler}/>
                </Link>
                </Flex>
                
            </Box>
        )
    }else{
        return <div></div>
    }
   
}

export default Note
