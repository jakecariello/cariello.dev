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

// Custom glass card styles that work on Safari (backdrop-filter can't blur WebGL canvas)
const glassCardStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, rgba(40, 40, 60, 0.4) 0%, rgba(30, 30, 50, 0.5) 100%)',
  backdropFilter: 'blur(20px) saturate(180%)',
  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  padding: '20px',
}

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
    <div style={glassCardStyle}>
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
    </div>
  )
}