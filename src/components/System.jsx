
import React, {useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const System = (props) => {
  const { nodes, materials } = useGLTF('/models/computer.glb')
    const meshRef = useRef()
    const {isMobile} = props;
    useGSAP(() => {
        if(isMobile){
            gsap.to(meshRef.current.rotation, {
                z: "-=" + 0.05,  // Move 0.5 units in positive Z direction
                duration: 1,
                yoyo: true,      // Automatically reverses the animation
                repeat: -1,       // Infinite repetition
                ease: "sine.inOut" // Smooth easing
            })
        }
    })

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry}
        material={materials.retro_computer_setup_Mat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/computer.glb')

export default System;