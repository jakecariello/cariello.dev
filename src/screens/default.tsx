import { Avatar, Box, Card, Flex, Grid, Link, Text } from '@radix-ui/themes'

import { ShaderGradientBackground } from '../backgrounds'
import { IconTest } from '../components'
import { useScroll, animated } from '@react-spring/web'
import { MdLanguage, MdMail, MdPhone, MdWork, MdWorkOutline } from 'react-icons/md'


function DefaultScreen() {

  const { scrollYProgress: scroll } = useScroll()

  return (
    <div>
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
        top: '20vh',
        opacity: scroll.to([.2, .3, .4, 1], [0, 1, 0]),
        width: '100vw',
      }}>
        <Flex justify={'center'} minWidth={'100vw'}>
          <Text>Welcome</Text>
        </Flex>
      </animated.div>


      <animated.div style={{
        position: 'fixed',
        top: '15vh',
        left: scroll.to([.4, .5, 1], ['-50vw', '0vw']),
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
                    size="3"
                    radius="full"
                    fallback={<MdPhone size={20} />}
                  />
                  <Box>
                    <Text>(914) 505-0554</Text>
                  </Box>
                </Flex>
              </Link>

              <Link href="https://linkedin.com/in/jakecariello">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    radius="full"
                    fallback={<MdWork size={20} />}
                  />
                  <Box>
                    <Text>jakecariello</Text>
                  </Box>
                </Flex>
              </Link>

              <Link href="mailto:jakecariello@gmail.com">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    radius="full"
                    fallback={<MdMail size={20} />}
                  />
                  <Box>
                    <Text>jakecariello@gmail.com</Text>
                  </Box>
                </Flex>
              </Link>

              <Link href="https://cariello.dev">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    radius="full"
                    fallback={<MdLanguage size={20} />}
                  />
                  <Box>
                    <Text>cariello.dev</Text>
                  </Box>
                </Flex>
              </Link>
              <Link href="https://github.com/jakecariello">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    radius="full"
                    fallback={<MdWorkOutline size={20} />}
                  />
                  <Box>
                    <Text>jakecariello</Text>
                  </Box>
                </Flex>
              </Link>
              <Link href="https://orcid.org/0000-0001-7288-9943">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    radius="full"
                    fallback={<MdLanguage size={20} />}
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
