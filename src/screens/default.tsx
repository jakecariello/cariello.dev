import { Flex, Box } from '@radix-ui/themes'
import {
  MdOutlineCode,
  MdOutlineMusicNote,
  MdOutlineBiotech,
} from 'react-icons/md'
import { animated, useTrail } from '@react-spring/web'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

const ICONS = [MdOutlineCode, MdOutlineMusicNote, MdOutlineBiotech]
const WHITE = '#FFFFFF'
const COLORS = ['#AEC6CF', '#F0E68C', '#FFB6C1']

function DefaultScreen() {
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
    config: { tension: 130, friction: 50 },
    loop: { reverse: true },
  })

  return (
    <Flex
      onClick={handleClick}
      gap='5'
      direction='column'
      align='center'
      justify='center'
      style={{ height: '100vh', overflow: 'hidden' }}
    >
      <Flex gap='5' direction='row'>
        {trail.map(({ x }, index) => {
          const [Icon, color] = [ICONS[index], COLORS[index]]
          return (
            <animated.div style={loopingTrail[index]}>
              <animated.div
                key={index}
                style={{
                  transform: x.to((x) => `rotate(${x * 360}deg)`),
                  color: x.to([0, 0.5, 1], [WHITE, color, WHITE]),
                }}
              >
                <Icon size={100} />
              </animated.div>
            </animated.div>
          )
        })}
      </Flex>
      <Box
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'dark', // Replace with your desired background color or image
          zIndex: -1, // Ensure it stays behind other content
        }}
      >
        <ShaderGradientCanvas>
          <ShaderGradient
            control='query'
            urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false'
          />
        </ShaderGradientCanvas>
      </Box>
    </Flex>
  )
}

export default DefaultScreen
