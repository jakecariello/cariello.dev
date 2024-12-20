import { animated } from '@react-spring/three'
import { useTrail } from '@react-spring/web'
import { MeshWobbleMaterial, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { EffectComposer, SMAA, Vignette } from '@react-three/postprocessing'
import { Suspense, useEffect } from 'react'
import { Mesh, Vector3 } from 'three'
import { OBJLoader } from 'three-stdlib'

const X = 5


function Scene() {
  const gridSize = 5
  const spacing = 1.5

  const [musicNote, metalBox] = useLoader(OBJLoader, ['/music-note.obj', './metal-box.obj'])
  console.log({ musicNote, metalBox })
  const musicNoteGeometry = (musicNote.children[0] as Mesh).geometry.scale(1.5, 1.5, 1.5).scale(.5, .5, .5)
  const metalBoxGeometry = (metalBox.children[0] as Mesh).geometry.scale(0.017, 0.017, 0.017).scale(.5, .5, .5)

  const helixes = Array.from({ length: gridSize * gridSize }, (_, i) => ({
    position: new Vector3(
      (i % gridSize) * spacing - (gridSize * spacing) / 2 + spacing / 2,
      Math.floor(i / gridSize) * spacing - (gridSize * spacing) / 2 + spacing / 2,
      0
    ),
    rotation: new Vector3(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    ),
  }))
  // Define the trail animation
  const [trail, setTrail] = useTrail(gridSize * gridSize, (i) => ({
    rotation: helixes[i].rotation.toArray(),
    config: {
      mass: 20,
      tension: 500,
      friction: 140, // Increased friction to limit speed
    },
  }))

  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(() => ({
        rotation: [
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
        ],
        delay: Math.random() * 1000,

      }))
    }, (Math.random() * 0.5 + 0.5) * X * 1000) // Replace X with the desired number of seconds

    return () => clearInterval(interval)
  }, [setTrail])


  return (
    <>
      {trail.map((props, index) => (
        <animated.mesh key={index} geometry={index % 2 ? musicNoteGeometry : metalBoxGeometry} position={helixes[index].position} rotation={props.rotation}>
          <MeshWobbleMaterial factor={.5} speed={4} isMaterial color={0x6f6f6f} metalness={1} roughness={.6} />
        </animated.mesh>
      ))}
    </>
  )
}

export default function App() {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight />
      <pointLight position={[1, -2, 2]} color={0x0000ff} intensity={20} />
      <pointLight position={[1, 2, 2]} color={0x00ff00} intensity={15} />
      <pointLight position={[-2, 1, 2]} color={0xff0000} intensity={17} />
      <pointLight position={[2, -2, 2]} color={0xff00ff} />
      <pointLight position={[-2, -2, 2]} color={0xffff00} />
      <Scene />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <Suspense fallback={null}>
        <EffectComposer multisampling={4}>
          <Vignette eskil={false} offset={0.1} darkness={.9} />
          <SMAA />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}