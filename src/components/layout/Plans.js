import React from 'react'
import { Wrap,WrapItem,Center } from '@chakra-ui/react'

function Plans() {
    return (

        <Wrap width='100%'  bg='white' p='10' spacing='30px' shadow='base'  >
            <WrapItem>
                <Center w="180px" h="80px" bg="red.200">
                    Plain one
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w="180px" h="80px" bg="green.200">
                  Plain two
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w="180px" h="80px" bg="tomato">
                  Plain three
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w="180px" h="80px" bg="blue.200">
                  Plain four
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w="180px" h="80px" bg="yellow.300">
                Coming soon ...
                </Center>
            </WrapItem>
        </Wrap>

    )
}

export default Plans
