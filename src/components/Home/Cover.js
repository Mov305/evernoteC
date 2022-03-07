import React from 'react'
import {Box} from '@chakra-ui/react'
import VerseOne from './cover/VerseOne'
import VerseTwo from './cover/VerseTwo'
import VerseThree from './cover/VerseThree'
import VerseFour from './cover/VerseFour'
import Footer2 from './cover/VerseFive'
function Cover() {
    return (
        <Box>
          <VerseOne/>
          <VerseTwo/>
          <VerseThree/>
          <VerseFour/>
          <Footer2/>
        </Box>
    )
}

export default Cover

