

import React from 'react'
import { Float, useGLTF } from '@react-three/drei'

const Tux = (props) => {
  const { nodes, materials } = useGLTF('/models/tux1.glb')
  return (
    <Float floatIntensity={1} floatingRange={0.5}>
      <group {...props} dispose={null}>
      <group position={[0.002, -0.027, -0.719]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Tux-printable_0'].geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Tux-printable_1'].geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Tux-printable_2'].geometry}
          material={materials.orange}
        />
      </group>
    </group>
    </Float>
  )
}

useGLTF.preload('/models/tux1.glb')
export default Tux;
