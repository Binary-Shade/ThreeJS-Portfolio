import React, { useEffect, useRef, useMemo } from 'react'
import { useGLTF, useAnimations, useFBX } from '@react-three/drei'
import { SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { useGraph } from '@react-three/fiber'

const Developer = ({ animationName = "stray", devRef, ...props }) => {
  const group = useRef()

  // Load and clone the GLTF scene
  const { scene } = useGLTF('/developer.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)

  // Load all FBX animations
  const idle = useFBX('/models/animations/idle.fbx')
  const stray = useFBX('/models/animations/stray.fbx')
  const salute = useFBX('/models/animations/salute.fbx')
  const clapping = useFBX('/models/animations/clapping.fbx')
  const victory = useFBX('/models/animations/victory.fbx')
  const breath = useFBX('/models/animations/breath.fbx')
  const hiphop = useFBX('/models/animations/hiphop.fbx')
  const silly = useFBX('/models/animations/silly.fbx')
  const breakdance = useFBX('/models/animations/breakdance.fbx')
  const wave = useFBX('/models/animations/wave.fbx')
  const backflip = useFBX('/models/animations/backflip.fbx')
  const dance = useFBX('/models/animations/dance.fbx')

  // Rename animations for easy reference
  idle.animations[0].name = 'idle'
  stray.animations[0].name = 'stray'
  salute.animations[0].name = 'salute'
  clapping.animations[0].name = 'clapping'
  victory.animations[0].name = 'victory'
  breath.animations[0].name = 'breath'
  hiphop.animations[0].name = 'hiphop'
  silly.animations[0].name = 'silly'
  breakdance.animations[0].name = 'breakdance'
  wave.animations[0].name = 'wave'
  backflip.animations[0].name = 'backflip'
  dance.animations[0].name = 'dance'

  // Combine all animations into one array
  const allAnimations = useMemo(
    () => [
      idle.animations[0],
      stray.animations[0],
      salute.animations[0],
      clapping.animations[0],
      victory.animations[0],
      breath.animations[0],
      hiphop.animations[0],
      silly.animations[0],
      breakdance.animations[0],
      wave.animations[0],
      backflip.animations[0],
      dance.animations[0],
    ],
    []
  )

  // Hook into animation actions
  const { actions } = useAnimations(allAnimations, group)

  // Handle animation switching
  useEffect(() => {
    const action = actions[animationName]
    if (action) {
      action.reset().fadeIn(0.5).play()
      return () => action.fadeOut(0.5)
    } else {
      console.warn(`Animation "${animationName}" not found`)
    }
  }, [animationName, actions])

  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />

      {/* Main Head Reference for external use */}
      <skinnedMesh
        ref={devRef}
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />

      {/* Eyes */}
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />

      {/* Rest of the body parts */}
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
    </group>
  )
}

useGLTF.preload('/developer.glb')

export default Developer
