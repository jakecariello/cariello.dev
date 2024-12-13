import { Flex } from '@radix-ui/themes'
import { animated, useTrail } from '@react-spring/web'
import {
  MdOutlineCode,
  MdOutlineMusicNote,
  MdOutlineBiotech,
} from 'react-icons/md'

const ICONS = [MdOutlineCode, MdOutlineMusicNote, MdOutlineBiotech]

const WHITE = '#FFFFFF'
const COLORS = ['#AEC6CF', '#F0E68C', '#FFB6C1']

export default function IconTest({ size = 100 }: { size?: number }) {

  const [trail, api] = useTrail<{ x: number }>(
    ICONS.length,
    () => ({
      from: { x: 0 },
      config: { tension: 130, friction: 50 },
    }),
    []
  )

  const handleClick = () => {
    api.set({ x: 0 })
    api.start({ x: 1 })
  }

  const loopingTrail = useTrail<{ opacity: number }>(ICONS.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 230, friction: 50 },
    loop: { reverse: true },
  })

  return (
    <Flex gap='5' direction='row' onClick={handleClick} >
      {trail.map(({ x }, index) => {
        const [Icon, color] = [ICONS[index], COLORS[index]]
        return (
          <animated.div style={loopingTrail[index]} key={index}>
            <animated.div
              key={index}
              style={{
                transform: x.to((x) => `rotate(${x * 360}deg)`),
                color: x.to([0, 0.5, 1], [WHITE, color, WHITE]),
              }}
            >
              <Icon size={size} />
            </animated.div>
          </animated.div>
        )
      })}
    </Flex>
  )
}