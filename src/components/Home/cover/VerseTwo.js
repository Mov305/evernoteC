import React, { useEffect } from 'react'
import { Image, Box, Heading, Flex, Text, Spacer } from '@chakra-ui/react'
import Responsive from '../../../assets/Responsive.jpg'
function VerseTwo() {
    const data = [
        {title:'MOBILITY',
         content:'You can work any where and all your data will be stored, easily accesed any where any time.'},
        {title:'REMEMBER EVERYTHING',
         content:'Make notes more useful by adding text, images, audio, scans, PDFs, and documents' },
        {title:'TURN TO-DO INTO DONE',
         content:'Bring your notes, tasks, and schedules together to get things done more easily.'},
        {title:'FIND THINGS FAST',
         content:' Get what you need, when you need it with powerful, flexible search capabilities.'}    
    ]

    const [slideIndex,setSlideIndex]=React.useState(1)
    const nextSlide =()=>{
        if(slideIndex===4){
            setSlideIndex(1)

        }else{
            setSlideIndex(c=>c+1)
        }

    }
 

    const setOpacity =(n)=>{
        let op={opacity:"0"}
        if(n===slideIndex){
            op={opacity:'1'}
        }
        return op
    }


  useEffect(()=>{
      const interval = setInterval(()=>{nextSlide()},10000);

      return ()=>clearInterval(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[slideIndex])
  

       

    return (
        <Box>
            <Flex width='100%' direction={['column','column','column','row']}>
                <Box width={['100%','100%','100%','75%']} pt={['80px','130px','110px']} minH='300px' >
                    <Image src={Responsive}
                        objectFit='cover'
                        alt='Responsive-Design' width='full' />
                </Box>
                <Spacer />
                <Box>
                <Flex display={['none','none','none','flex']} direction='column' width='100%' mt='100px' p='10' >
                    {data.map(data=><Box py='5' key={data.title}>
                        <Heading fontSize={['1.1em','1.4em','1.5em']}>{data.title}</Heading>
                        <Text>
                            {data.content}
                        </Text>
                    </Box>)}
                    
                </Flex>
                <Box display={['block','block','block','none']} width='100%' overflow='hidden' pos='relative'  height='200px' p='10px'>
                {data.map((data,i)=>
                    <Box  
                     key={i+'c'} width='100%' height='100%' {...setOpacity(i+1)}
                     transition='opacity ease-in-out 0.4s'  pos='absolute' textAlign='center'> 
                        <Heading fontSize={['1.1em','1.4em','1.5em']}>{data.title}</Heading>
                        <Text>
                            {data.content}
                        </Text>
                    </Box>)}

                </Box>
                </Box>
             
            </Flex>
        </Box>
    )
}

export default VerseTwo
