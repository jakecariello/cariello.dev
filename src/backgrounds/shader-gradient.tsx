import { Box } from '@radix-ui/themes'
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'



export default function ShaderGradientBackground() {
  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'dark', // Replace with your desired background color or image
        zIndex: -1, // Ensure it stays behind other content
        pointerEvents: 'none', // prevent interaction with the background
      }}
    >
      <ShaderGradientCanvas
      >
        <ShaderGradient
          control='query'
          urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false'
        />
      </ShaderGradientCanvas>
    </Box>
  )
}