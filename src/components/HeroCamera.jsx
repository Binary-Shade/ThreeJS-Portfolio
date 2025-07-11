import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'

const HeroCamera = ({children, isMobile}) => {
    const groupRef = useRef()
    useFrame((state, delta) => {
      easing.damp3(state.camera.position, [0,0,20], 0.25, delta)
      if(!isMobile){
        easing.dampE(groupRef.current.rotation, [-state.pointer.y /6, state.pointer.x /5, 0], 0.25, delta)
      }
    })
  return (
    <group ref={groupRef}>
      {children}
    </group>
  )
}

export default HeroCamera;
