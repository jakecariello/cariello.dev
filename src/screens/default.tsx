import { FaDownload, FaChevronDown } from 'react-icons/fa'
import { ShaderGradientBackground, Squiggles } from '../layers'
import { LinksCard } from '../components'

import { Flex, Text, Link } from '@radix-ui/themes'
import { useScroll, animated, useSpring } from '@react-spring/web'

// Shared styles
const fullWidth: React.CSSProperties = {
  position: 'fixed',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
}

const backgroundLayer = (zIndex: number): React.CSSProperties => ({
  position: 'fixed',
  inset: 0,
  zIndex,
  pointerEvents: 'none',
})

function ScrollIndicator() {
  const pulse = useSpring({
    from: { opacity: 0.4, y: 0 },
    to: { opacity: 1, y: 8 },
    config: { duration: 800 },
    loop: { reverse: true },
  })

  return (
    <animated.div style={{ ...pulse, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: -8 }}>
      <FaChevronDown size={20} style={{ opacity: 0.5 }} />
      <FaChevronDown size={20} style={{ opacity: 0.7 }} />
      <FaChevronDown size={20} />
    </animated.div>
  )
}

function DefaultScreen() {
  const { scrollYProgress: scroll } = useScroll()

  // Tighter equal gaps: contact -> links (8vh), links bottom -> resume (8vh)
  return (
    <div>
      {/* Scroll indicator - fades out as user scrolls */}
      <animated.div style={{
        ...fullWidth,
        top: scroll.to([0, 0.1, 1], ['40vh', '5vh', '5vh']),
        opacity: scroll.to([0, 0.15], [1, 0]),
      }}>
        <ScrollIndicator />
      </animated.div>

      {/* Contact label - 20vh */}
      <animated.div style={{ ...fullWidth, top: scroll.to([0.05, 0.2, 1], ['105vh', '20vh', '20vh']) }}>
        <Text>contact me?</Text>
      </animated.div>

      {/* Links card - 28vh (8vh gap from contact) */}
      <animated.div style={{ ...fullWidth, top: scroll.to([0.2, 0.3, 1], ['105vh', '28vh', '28vh']) }}>
        <LinksCard />
      </animated.div>

      {/* Resume download - 73vh */}
      <animated.div style={{ ...fullWidth, top: scroll.to([0.3, 0.4, 1], ['105vh', '73vh', '73vh']) }}>
        <Link href="https://drive.google.com/file/d/1-QaEQUxkHCAIcBqlqWvLv4zRGYxJ85aa/view?usp=sharing">
          <Flex align="center" gap="3">
            <FaDownload size={24} />
            <Text>Download Resume</Text>
          </Flex>
        </Link>
      </animated.div>

      {/* Background layers */}
      <div style={backgroundLayer(-100)}>
        <Squiggles />
      </div>
      <div style={backgroundLayer(-200)}>
        <ShaderGradientBackground />
      </div>
    </div>
  )
}

export default DefaultScreen
