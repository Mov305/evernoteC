import React from 'react'
import { Box, Img, Flex, Text, Heading } from '@chakra-ui/react'
import { FaQuora } from 'react-icons/fa'
import money from '../../../assets/icons8-money-96.png'
import responsive from '../../../assets/icons8-responsive-design-128.png'
import schedule from '../../../assets/icons8-schedule-96.png'
import text from '../../../assets/icons8-text-94.png'
import time from '../../../assets/icons8-time-128.png'

const data = [{
    img: money, title: 'Money_', content: 'Best affordable qoatas can be offered. You can go for the storage that fits you, and don\'t care about the coast, They are cheap and worthwhile.'
}, {
    img: responsive, title: 'Responsive_', content: 'Manage your day from any platform they are all supported with responsive modern designs. You can start on your PC, laptop, or even you mobile phone'
}, {
    img: schedule, title: 'Schedule_', content: 'Put every thing in the place they fit for. Exercises in the early morning, working or college after that, launch at the afternoon, hanging with the mates at night. All flexable and easy to dell with.'
}, {
    img: text, title: 'Text_', content: 'Write what ever you want with an endless choice of words and emojes, Add the todos you want, And when their done toggle them or remove them, add the goals you want and when achiving your goals mark them as atchived.'
}, {
    img: time, title: 'Time_', content: 'With this app you can save a hell of a time. Wast you time no more, because we value the time, and we know that time can be vital to you. Time is secret.'
}]




function VerseThree() {
    const [tran,setTran]= React.useState(0)
    const [size,setSize] = React.useState(window.innerWidth)

    const nextSlide =()=>{
        if(tran===4){
            setTran(0)

        }else{
            setTran(c=>c+1)
        }

    }

    const setOpacity =(n)=>{
        let op={opacity:['0','0','0.35',"0.35"]}
        if(n===tran){
            op={opacity:'1'}
        }
        return op
    }

    window.addEventListener('resize',()=>setTimeout(setSize(window.innerWidth),100))


    React.useEffect(()=>{
        const interval = setInterval(()=>{nextSlide()},10000);
  
        return ()=>clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[tran])
    
    return (
        <Box width='100%' bg='#f8f8f8' overflow='hidden' minH='550px' pos='relative' py='70px'>
            <Box textAlign='center'>
                <Heading color='#7166C1' display='flex' justifyContent='center' p='30'>
                    <FaQuora />
                </Heading>
                <Box  width={size*5} pos='relative' display='flex' transition='all ease-in-out 0.5s' transform={`translate3d(${-size*tran+'px'},0px,0px)`} >
                {data.map((d, i) => {
                    return (
                        <Box key={i+'a'} display='inline-block' width={size}  pl={['30px','140px']} pr={['30px','140px']} py='30px'>

                            <Text fontSize='1.2em' pb='40px'>{d.content}</Text>
                            <Heading>{d.title}</Heading>
                        </Box>
                    )
                })}
                </Box>
                
            </Box>

            <Flex p='30px' justify={['center','center','space-evenly','space-evenly']}>
                {data.map((d,i)=><Img width='90px' height='90px' pos={['absolute','absolute','unset','unset']} src={d.img} alt={d.title} key={'b'+i} {...setOpacity(i)} transition='all ease-in-out 0.5s' cursor='pointer' onClick={()=>setTran(i)} />)}
            </Flex>

        </Box>
    )
}

export default VerseThree
