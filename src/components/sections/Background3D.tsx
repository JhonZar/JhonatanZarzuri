import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Blob() {
    const mesh = useRef<THREE.Mesh>(null!)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        mesh.current.rotation.x = time * 0.1
        mesh.current.rotation.y = time * 0.15
    })

    return (
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={mesh} args={[1, 64, 64]} scale={1.5}>
                <MeshDistortMaterial
                    color="#6366f1"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0}
                    transparent
                    opacity={0.3}
                />
            </Sphere>
        </Float>
    )
}

export function Background3D() {
    return (
        <div className="absolute inset-0 -z-20 h-full w-full opacity-40">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Blob />
            </Canvas>
        </div>
    )
}
