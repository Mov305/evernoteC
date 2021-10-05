import React from 'react'
import { Grid,GridItem } from '@chakra-ui/react'
import Form  from './Form'
import NotesList from '../notes/NotesList'

const Home = () => {

    return (
            <Grid templateColumns="repeat(12, 1fr)"  gap='20'py={6}>
              <GridItem colStart={2} colSpan={6}>
                 <Form/>
              </GridItem>
              <GridItem colStart={8} colSpan={4}>
                    <NotesList/>
              </GridItem>
            </Grid>       
    )
}

export default Home
