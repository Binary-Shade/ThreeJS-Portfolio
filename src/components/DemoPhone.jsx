
import { useGSAP } from '@gsap/react'
import { useGLTF, useVideoTexture} from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

const DemoPhone = (props) => {
   const { nodes, materials } = useGLTF('/models/iphone.glb')
  const group = useRef()
  
  // Create video texture
  const videoTexture = useVideoTexture(
    props.texture || '/textures/project/project1.mp4', 
    {
      autoplay: true,
      loop: true,
      muted: true,
    }
  )

  useGSAP(()=>{
    gsap.from(group.current.rotation, {
      y: -Math.PI /6,
      duration: 1,
      ease: 'power3.out'
    })
  })

  // Create a custom material for the screen
  const screenMaterial = new THREE.MeshStandardMaterial({
    map: videoTexture,
    emissive: new THREE.Color(0xffffff), // Makes the screen glow
    emissiveIntensity: 0.5,
    emissiveMap: videoTexture,
    roughness: 0.1,
    metalness: 0
  })

  useEffect(() => {
    if (videoTexture) {
      videoTexture.flipY = true // Important for correct video orientation
      videoTexture.encoding = THREE.sRGBEncoding // For proper color space
    }
  }, [videoTexture])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group position={[0, -2.59, 2.42]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  geometry={nodes.iPhone__12_Pro_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                {/* wallpaper */}
                <group>
                    <mesh
                    name='mobile-screen'
                      geometry={nodes.Screen_Wallpaper_0.geometry}
                      material={screenMaterial}
                    />
                  </group>
                <mesh
                  geometry={nodes.iPhone__12_Pro_MicrophoneSpeaker_0.geometry}
                  material={materials.MicrophoneSpeaker}
                />
                <mesh
                  geometry={nodes.iPhone__12_Pro_GrayGlossy2_0.geometry}
                  material={materials.GrayGlossy2}
                />
                <mesh
                  geometry={nodes.iPhone__12_Pro_Antenna_0.geometry}
                  material={materials.Antenna}
                />
                <group>
                  <mesh geometry={nodes.iPhone12_Pro_Body_0.geometry} material={materials.Body} />
                  <group>
                    <mesh
                      geometry={nodes.Camera1_PacificBlue_0.geometry}
                      material={materials.PacificBlue}
                    />
                    <mesh
                      geometry={nodes.Camera1_GrayGlossy_0.geometry}
                      material={materials.GrayGlossy}
                    />
                    <mesh
                      geometry={nodes.Camera1_FrontCamera_0.geometry}
                      material={materials.FrontCamera}
                    />
                    <mesh
                      geometry={nodes.Camera1_Blackmatte_0.geometry}
                      material={materials.Blackmatte}
                    />
                    <mesh
                      geometry={nodes.Camera1_Cameralens_0.geometry}
                      material={materials.Cameralens}
                    />
                    <mesh geometry={nodes.Camera1_Glass_0.geometry} material={materials.Glass} />
                  </group>
                  <group>
                    <mesh geometry={nodes.Flash_Flash2_0.geometry} material={materials.Flash2} />
                    <mesh geometry={nodes.Flash_Flash_0.geometry} material={materials.Flash} />
                  </group>
                  <group>
                    <mesh geometry={nodes.LiDar_LiDar__0.geometry} material={materials.LiDar} />
                  </group>
                  <group>
                    <mesh geometry={nodes.Bezel_bezel_0.geometry} material={materials.bezel} />
                    <group>
                      <mesh
                        geometry={nodes.FrontCamera_Cameralens_0.geometry}
                        material={materials.Cameralens}
                      />
                      <mesh
                        geometry={nodes.FrontCamera_FrontCamera_0.geometry}
                        material={materials.FrontCamera}
                      />
                      <mesh
                        geometry={nodes.FrontCamera_Glass_0.geometry}
                        material={materials.Glass}
                      />
                    </group>
                    <group>
                      <mesh
                        geometry={nodes.FrontMic_GrayGlossy2_0.geometry}
                        material={materials.GrayGlossy2}
                      />
                      <mesh
                        geometry={nodes.FrontMic_MicrophoneSpeaker_0.geometry}
                        material={materials.MicrophoneSpeaker}
                      />
                    </group>
                    <group>
                      <mesh
                        geometry={nodes.FrontCamera001_bezel001_0.geometry}
                        material={materials['bezel.001']}
                      />
                    </group>
                  </group>
                  <group>
                    <mesh
                      geometry={nodes.Camera3_PacificBlue_0.geometry}
                      material={materials.PacificBlue}
                    />
                    <mesh
                      geometry={nodes.Camera3_GrayGlossy_0.geometry}
                      material={materials.GrayGlossy}
                    />
                    <mesh
                      geometry={nodes.Camera3_FrontCamera_0.geometry}
                      material={materials.FrontCamera}
                    />
                    <mesh
                      geometry={nodes.Camera3_Blackmatte_0.geometry}
                      material={materials.Blackmatte}
                    />
                    <mesh
                      geometry={nodes.Camera3_Cameralens_0.geometry}
                      material={materials.Cameralens}
                    />
                    <mesh geometry={nodes.Camera3_Glass_0.geometry} material={materials.Glass} />
                  </group>
                  <group>
                    <mesh
                      geometry={nodes.Camera2_PacificBlue_0.geometry}
                      material={materials.PacificBlue}
                    />
                    <mesh
                      geometry={nodes.Camera2_GrayGlossy_0.geometry}
                      material={materials.GrayGlossy}
                    />
                    <mesh
                      geometry={nodes.Camera2_FrontCamera_0.geometry}
                      material={materials.FrontCamera}
                    />
                    <mesh
                      geometry={nodes.Camera2_Blackmatte_0.geometry}
                      material={materials.Blackmatte}
                    />
                    <mesh
                      geometry={nodes.Camera2_Cameralens_0.geometry}
                      material={materials.Cameralens}
                    />
                    <mesh geometry={nodes.Camera2_Glass_0.geometry} material={materials.Glass} />
                  </group>
                  
                  <group>
                    <mesh geometry={nodes.Apple_Logo_Logo_0.geometry} material={materials.Logo} />
                  </group>
                  <group>
                    <mesh
                      geometry={nodes.CameraModule001_Glass_0.geometry}
                      material={materials.Glass}
                    />
                  </group>
                  <group>
                    <mesh
                      geometry={nodes.CameraModule002_MicrophoneSpeaker_0.geometry}
                      material={materials.MicrophoneSpeaker}
                    />
                  </group>
                </group>
                <group>
                  <mesh
                    geometry={nodes.VolumeButton_BodyFrame_0.geometry}
                    material={materials.BodyFrame}
                  />
                </group>
                <group>
                  <mesh
                    geometry={nodes.PowerButton_BodyFrame_0.geometry}
                    material={materials.BodyFrame}
                  />
                </group>
                <group>
                  <mesh
                    geometry={nodes.Port_Blackmatte_0.geometry}
                    material={materials.Blackmatte}
                  />
                  <mesh geometry={nodes.Port_BodyFrame_0.geometry} material={materials.BodyFrame} />
                </group>
                <group>
                  <mesh
                    geometry={nodes.SimTray_Blackmatte_0.geometry}
                    material={materials.Blackmatte}
                  />
                  <mesh
                    geometry={nodes.SimTray_BodyFrame_0.geometry}
                    material={materials.BodyFrame}
                  />
                </group>
                <group>
                  <mesh
                    geometry={nodes.MuteButton_BodyFrame_0.geometry}
                    material={materials.BodyFrame}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/iphone.glb')

export default DemoPhone;