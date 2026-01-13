import { animated } from '@react-spring/three'
import { useTrail } from '@react-spring/web'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { EffectComposer, SMAA, Vignette } from '@react-three/postprocessing'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Mesh, Vector3, BufferGeometry } from 'three'
import { OBJLoader } from 'three-stdlib'

const X = 5

// Fallback geometry in case models fail to load
const fallbackGeometry = new BufferGeometry()

function Scene() {
  const gridSize = 10
  const spacing = 2
  const [modelsLoaded, setModelsLoaded] = useState(false)
  const [geometries, setGeometries] = useState({
    musicNote: fallbackGeometry,
    metalBox: fallbackGeometry,
    coffeeCup: fallbackGeometry
  })

  const config = {
    backside: false,
    samples: 16,
    resolution: 256,
    transmission: 0.95,
    roughness: 0.5,
    clearcoat: 0.1,
    clearcoatRoughness: 0.1,
    thickness: 200,
    backsideThickness: 200,
    ior: 1.5,
    chromaticAberration: 1,
    anisotropy: 1,
    distortion: 0,
    distortionScale: 0.2,
    temporalDistortion: 0,
    attenuationDistance: 0.5,
    attenuationColor: '#ffffff',
    color: '#ffffff',
  }

  // Load models with error handling
  const [musicNote, metalBox, coffeeCup] = useLoader(
    OBJLoader,
    ['/music-note.obj', '/metal-box.obj', '/coffee-cup.obj']
  )

  // Process geometries once models are loaded
  useEffect(() => {
    try {
      if (musicNote && metalBox && coffeeCup) {
        const a = 1.2

        let musicNoteGeometry = fallbackGeometry
        let metalBoxGeometry = fallbackGeometry
        let coffeeCupGeometry = fallbackGeometry

        try {
          if (musicNote.children[0] && (musicNote.children[0] as Mesh).geometry) {
            musicNoteGeometry = (musicNote.children[0] as Mesh).geometry.clone()
            musicNoteGeometry.scale(1.5, 1.5, 1.5)
            musicNoteGeometry.scale(a, a, a)
          }
        } catch (e) {
          console.warn('Error processing music note geometry:', e)
        }

        try {
          if (metalBox.children[0] && (metalBox.children[0] as Mesh).geometry) {
            metalBoxGeometry = (metalBox.children[0] as Mesh).geometry.clone()
            metalBoxGeometry.scale(0.017, 0.017, 0.017)
            metalBoxGeometry.scale(a, a, a)
          }
        } catch (e) {
          console.warn('Error processing metal box geometry:', e)
        }

        try {
          if (coffeeCup.children[6] && (coffeeCup.children[6] as Mesh).geometry) {
            coffeeCupGeometry = (coffeeCup.children[6] as Mesh).geometry.clone()
            coffeeCupGeometry.scale(0.5, 0.5, 0.5)
            coffeeCupGeometry.scale(0.2, 0.2, 0.2)
            coffeeCupGeometry.translate(0, -0.2, 0)
            coffeeCupGeometry.scale(a, a, a)
          }
        } catch (e) {
          console.warn('Error processing coffee cup geometry:', e)
        }

        setGeometries({
          musicNote: musicNoteGeometry,
          metalBox: metalBoxGeometry,
          coffeeCup: coffeeCupGeometry
        })
        setModelsLoaded(true)
      }
    } catch (error) {
      console.warn('Error processing 3D models, using fallback geometry:', error)
      setModelsLoaded(true)
    }
  }, [musicNote, metalBox, coffeeCup])

  const helixes = Array.from({ length: gridSize * gridSize }, (_, i) => {
    const row = Math.floor(i / gridSize)
    const xOffset = row % 2 === 0 ? 0 : spacing / 2
    return {
      position: new Vector3(
        (i % gridSize) * spacing - (gridSize * spacing) / 2 + spacing / 2 + xOffset,
        row * spacing - (gridSize * spacing) / 2 + spacing / 2,
        0
      ),
      rotation: new Vector3(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      ),
    }
  })
  // Define the trail animation
  const [trail, setTrail] = useTrail(gridSize * gridSize, (i) => ({
    rotation: helixes[i].rotation.toArray(),
    config: {
      mass: 20,
      tension: 500,
      friction: 140, // Increased friction to limit speed
    },
  }))

  const refs = useRef<(Mesh | null)[]>([])

  useFrame(() => {
    refs.current.forEach((ref, i) => {
      if (ref) {
        ref.rotation.set(...trail[i].rotation.get())
      }
    })
  })

  useEffect(() => {
    refs.current = refs.current.slice(0, gridSize * gridSize)
  }, [gridSize])

  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(() => ({
        rotation: [
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
        ],
        delay: Math.random() * 1000 * X,

      }))
    }, (Math.random() * 0.5 + 0.5) * X * 1000) // Replace X with the desired number of seconds

    return () => clearInterval(interval)
  }, [setTrail])


  return (
    <>
      {modelsLoaded && trail.map((_, index) => (
        <animated.mesh
          key={index}
          geometry={
            index % 3 === 0
              ? geometries.metalBox
              : index % 3 === 1
                ? geometries.musicNote
                : geometries.coffeeCup
          }
          position={helixes[index].position}
          ref={(ref) => (refs.current[index] = ref)}
        >
          <meshPhysicalMaterial
            transparent
            opacity={0.2}
            metalness={0.1}
            {...config}
          />
        </animated.mesh>
      ))}
    </>
  )
}

export default function App() {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <Suspense fallback={
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      }>
        <ambientLight />
        <pointLight position={[1, -2, 2]} color={0x0000ff} intensity={20} />
        <pointLight position={[1, 2, 2]} color={0x00ff00} intensity={15} />
        <pointLight position={[-2, 1, 2]} color={0xff0000} intensity={17} />
        <pointLight position={[2, -2, 2]} color={0xff00ff} />
        <pointLight position={[-2, -2, 2]} color={0xffff00} />
        <Scene />
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <Environment preset='warehouse' />
        <EffectComposer multisampling={4}>
          <Vignette eskil={false} offset={0.1} darkness={.9} />
          <SMAA />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}