import { Flex } from '@radix-ui/themes'

import { ShaderGradientBackground } from '../backgrounds'
import { IconTest } from '../components'
import { useScroll, animated } from '@react-spring/web'


function DefaultScreen() {

  const { scrollYProgress } = useScroll()

  return (
    <>
      <animated.div style={{
        width: '100vw',
        height: '10vh',
        position: 'fixed',
        top: scrollYProgress.to([0, 1], ['45vh', '5vh']),
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
        opacity: scrollYProgress.to([0, 0.5, 1], [0, 1]),
        transform: scrollYProgress.to([0, 1], ['translateY(20px)', 'translateY(0px)']),
        width: '100vw',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
      }}>
        <h1>Welcome</h1>
      </animated.div>
      <ShaderGradientBackground />
    </>
  )
}

export default DefaultScreen
