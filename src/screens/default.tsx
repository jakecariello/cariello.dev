import { FaDownload } from 'react-icons/fa'
import { ShaderGradientBackground, Squiggles } from '../layers'
import { IconTest, LinksCard } from '../components'

import { Box, Flex, Text, Link } from '@radix-ui/themes'
import { useScroll, animated } from '@react-spring/web'


function DefaultScreen() {

  const { scrollYProgress: scroll } = useScroll()

  return (
    <div>
      <Flex justify={'center'} minWidth={'100vw'}>
        <Text>scroll down!</Text>
      </Flex>
      <animated.div style={{
        width: '100vw',
        height: '10vh',
        position: 'fixed',
        top: scroll.to([0, .05, 1], ['45vh', '5vh', '5vh']),
      }}>
        <Flex
          direction='column'
          align='center'
          justify='center'
        >
          <IconTest size={40} />
        </Flex>
      </animated.div >

      <animated.div style={{
        position: 'fixed',
        top: scroll.to([.05, .2, 1], ['105vh', '15vh', '15vh']),
      }}>
        <Box>
          <Flex justify={'center'} minWidth={'100vw'}>
            <Text>contact me?</Text>
          </Flex>
        </Box>
      </animated.div>

      <animated.div style={{
        position: 'fixed',
        top: scroll.to([.2, .3, 1], ['105vh', '25vh', '25vh']),
      }}>
        <Flex justify={'center'} minWidth={'100vw'}>
          <LinksCard />
        </Flex>
      </animated.div>


      <animated.div style={{
        position: 'fixed',
        top: scroll.to([.3, .35, 1], ['105vh', '75vh', '75vh']),
      }}>
        <Flex justify={'center'} minWidth={'100vw'}>

          <Link href='https://drive.google.com/file/d/1-QaEQUxkHCAIcBqlqWvLv4zRGYxJ85aa/view?usp=sharing'>
            <Box>
              <Flex
                align='center'
                justify='center'
                dir='row'
                gap='3'
              >
                <FaDownload size={30} />
                <Text>Download Resume</Text>
              </Flex>
            </Box>
          </Link>

        </Flex>
      </animated.div>


      <Box
        style={{
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -100,
          touchAction: 'pan-y',
          pointerEvents: 'none',
        }}>

        <Squiggles />
      </Box>

      <Box
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'dark', // Replace with your desired background color or image
          zIndex: -200, // Ensure it stays behind other content
          pointerEvents: 'none', // prevent interaction with the background
          touchAction: 'none', // prevent touch events on the background
        }}
      >

        <ShaderGradientBackground />
      </Box>
    </div >
  )
}

export default DefaultScreen
