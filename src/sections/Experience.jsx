import React, { Suspense, useRef, useState } from 'react'
import { workExperiences } from '../constants'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import CanvasLoader from '../components/CanvasLoader'
import Developer from '../components/Developer'

const CameraFollow = ({ targetRef }) => {
  useFrame(({ camera }) => {
    if (targetRef.current) {
      const devPos = targetRef.current.position;
      camera.position.lerp(
        new THREE.Vector3(devPos.x, devPos.y + 2, devPos.z + 8),
        0.1
      );
      camera.lookAt(devPos);
    }
  });
  return null;
};

const Experience = () => {
  const [animationName, setAnimationName] = useState('wave');
  const devRef = useRef();

  return (
    <section className='c-space my-20' id='work'>
      <div className='w-full text-white'>
        <p className='head-text'> My work Experience </p>
        <div className='work-container sm:py-5'>
          <div className='work-canvas'>
            <Canvas
              shadows
              camera={{ position: [0, 3, 10], fov: 35 }}
            >
              <ambientLight intensity={0.3} />
              <directionalLight
                position={[5, 10, 2]}
                intensity={1.2}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
              />
              <Environment preset='sunset' />
              <spotLight
                position={[-10, 5, 5]}
                angle={0.3}
                penumbra={0.5}
                intensity={0.5}
                color="#ffffff"
              />
              <pointLight position={[0, 5, -5]} intensity={0.6} color="#ccccff" />

              <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 6}
              />

              <CameraFollow targetRef={devRef} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  devRef={devRef}
                  position-y={-2.2}
                  scale={2.5}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  className="work-content_container group"
                  onMouseOver={() => setAnimationName(item.animation)}
                  onMouseLeave={() => setAnimationName('stray')}
                  onTouchStart={() => setAnimationName('backflip')}
                  onTouchEnd={() => setAnimationName('stray')}
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>
                    <div className="work-content_bar" />
                  </div>

                  <div
                    className="sm:p-5 px-2.5 py-5"
                  >
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;
