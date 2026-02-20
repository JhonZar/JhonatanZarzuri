import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei'
import * as THREE from 'three'

export function FloatingShape() {
    const mesh = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [clicked, setClick] = useState(false)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        mesh.current.rotation.x = Math.cos(time / 4) / 4
        mesh.current.rotation.y = Math.sin(time / 4) / 4
    })

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere
                args={[1, 100, 100]}
                ref={mesh}
                scale={clicked ? 1.2 : 1}
                onClick={() => setClick(!clicked)}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <MeshDistortMaterial
                    color={hovered ? "#6366f1" : "#4338ca"}
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                />
            </Sphere>
        </Float>
    )
}

export function Scene3D() {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
                <FloatingShape />
            </Canvas>
        </div>
    )
}
