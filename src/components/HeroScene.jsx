import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Torus, Box, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'

function FloatingCode() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron args={[1, 1]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#00d4ff"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.8}
          />
        </Icosahedron>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <Torus args={[1.8, 0.05, 16, 100]} position={[0, 0, 0]} rotation={[Math.PI / 3, 0, 0]}>
          <meshStandardMaterial color="#7b2ff7" transparent opacity={0.6} metalness={0.9} roughness={0.1} />
        </Torus>
      </Float>

      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1}>
        <Torus args={[2.2, 0.03, 16, 100]} position={[0, 0, 0]} rotation={[Math.PI / 5, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#00d4ff" transparent opacity={0.4} metalness={0.9} roughness={0.1} />
        </Torus>
      </Float>

      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2
        const radius = 2.5
        return (
          <Float key={i} speed={1 + i * 0.3} rotationIntensity={0.5} floatIntensity={0.8}>
            <Box
              args={[0.15, 0.15, 0.15]}
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle) * radius * 0.5,
                Math.sin(angle) * radius * 0.3,
              ]}
            >
              <MeshWobbleMaterial
                color={i % 2 === 0 ? '#00d4ff' : '#7b2ff7'}
                factor={0.4}
                speed={2}
                transparent
                opacity={0.7}
                metalness={0.8}
                roughness={0.2}
              />
            </Box>
          </Float>
        )
      })}

      {[...Array(20)].map((_, i) => {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI
        const r = 3 + Math.random() * 1.5
        return (
          <Float key={`s-${i}`} speed={0.5 + Math.random()} floatIntensity={0.3}>
            <Sphere
              args={[0.02 + Math.random() * 0.03]}
              position={[
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.sin(phi) * Math.sin(theta),
                r * Math.cos(phi),
              ]}
            >
              <meshBasicMaterial
                color={Math.random() > 0.5 ? '#00d4ff' : '#7b2ff7'}
                transparent
                opacity={0.5 + Math.random() * 0.5}
              />
            </Sphere>
          </Float>
        )
      })}
    </group>
  )
}

function HeroScene() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7b2ff7" />
        <FloatingCode />
      </Canvas>
    </div>
  )
}

export default HeroScene
