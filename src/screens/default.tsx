import { Avatar, Box, Card, Flex, Grid, Link, Text } from '@radix-ui/themes'

import { ShaderGradientBackground } from '../backgrounds'
import { IconTest } from '../components'
import { useScroll, animated } from '@react-spring/web'
import { FaGithub, FaGlobe, FaLinkedin, FaOrcid, FaPhoneAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'


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
        top: scroll.to([0, .1, 1], ['45vh', '5vh']),
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
        top: scroll.to([.1, .2, 1], ['105vh', '15vh']),
      }}>
        <Flex justify={'center'} minWidth={'100vw'}>
          <Box>
            <Text>contact me?</Text>
          </Box>
        </Flex>
      </animated.div>

      <animated.div style={{
        position: 'fixed',
        top: scroll.to([.2, .3, 1], ['105vh', '25vh']),
      }}>
        <Flex justify={'center'} minWidth={'100vw'}>
          <Card>
            <Grid
              columns={{ 'sm': '2', 'md': '1' }}
              gap="3"
              rows={{ 'sm': '1', 'md': 'repeat(3, 64px)' }}
              width="auto"
            >
              <Link href="tel:+19145050554">
                <Flex gap="3" align="center">
                  <Avatar
                    size="4"
                    fallback={<FaPhoneAlt size={25} />}
                  />
                  <Box>
                    <Text>(914) 505-0554</Text>
                  </Box>
                </Flex>
              </Link>

              <Link href="https://linkedin.com/in/jakecariello">
                <Flex gap="3" align="center">
                  <Avatar
                    size="4"
                    fallback={<FaLinkedin size={25} />}
                  />
                  <Box>
                    <Text>jakecariello</Text>
                  </Box>
                </Flex>
              </Link>

              <Link href="mailto:jakecariello@gmail.com">
                <Flex gap="3" align="center">
                  <Avatar
                    size="4"
                    fallback={<SiGmail size={25} />}
                  />
                  <Box>
                    <Text>jakecariello</Text>
                  </Box>
                </Flex>
              </Link>

              <Link href="https://cariello.dev">
                <Flex gap="3" align="center">
                  <Avatar
                    size="4"
                    fallback={<FaGlobe size={25} />}
                  />
                  <Box>
                    <Text>cariello.dev</Text>
                  </Box>
                </Flex>
              </Link>
              <Link href="https://github.com/jakecariello">
                <Flex gap="3" align="center">
                  <Avatar
                    size="4"
                    fallback={<FaGithub size={25} />}
                  />
                  <Box>
                    <Text>jakecariello</Text>
                  </Box>
                </Flex>
              </Link>
              <Link href="https://orcid.org/0000-0001-7288-9943">
                <Flex gap="3" align="center">
                  <Avatar
                    size="4"
                    fallback={<FaOrcid size={25} />}
                  />
                  <Box>
                    <Text>0000-0001-7288-9943</Text>
                  </Box>
                </Flex>
              </Link>
            </Grid>
          </Card>
        </Flex>
      </animated.div>



      <ShaderGradientBackground />
    </div >
  )
}

export default DefaultScreen
