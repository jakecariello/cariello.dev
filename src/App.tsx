import { Flex, Text } from '@radix-ui/themes'
import { MdOutlineCode, MdOutlineMusicNote, MdOutlineGroup } from 'react-icons/md'
import { animated, useTrail } from '@react-spring/web'
import { useCallback } from 'react'

const ICONS = [MdOutlineCode, MdOutlineMusicNote, MdOutlineGroup]
const WHITE = '#FFFFFF'
const COLORS = ['#AEC6CF', '#F0E68C', '#FFB6C1']

function App() {
  
  const [trail, api] = useTrail<{x: number}>(ICONS.length, () => ({
    from: { x: 0 },
    config: { tension: 130, friction: 50 },
  }), [])

  const handleClick = useCallback(() => {
    api.set({ x: 0 })
    api.start({ x: 1 })
  }, [api])

  return (
    <Flex onClick={handleClick} gap="5" direction="column" align="center" justify="center" style={{ height: '100vh' }}>
      <Text size="6">Coming soon!</Text>
      <Flex gap="5" direction="row">
        {trail.map(({ x }, index) => {
          const [Icon, color] = [ICONS[index], COLORS[index]]
          return (
            <animated.div key={index} style={{
              transform: x.to(x => `rotate(${x * 360}deg)`),
              color: x.to([0, 0.5, 1], [WHITE, color, WHITE])
            }}>
              <Icon size={64} />
            </animated.div>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default App
