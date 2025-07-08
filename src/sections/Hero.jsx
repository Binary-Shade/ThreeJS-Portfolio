import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import {calculateSizes} from '../constants'
import Blender from '../components/Blender'
import ReactLogo from '../components/ReactLogo'
import HtmlLogo from '../components/HtmlLogo'
import Tux from '../components/Tux'
import System from '../components/System'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'

const Hero = () => {
    const isSmall = useMediaQuery({query: "(max-width: 425px)"})
    const isMobile = useMediaQuery({query: "(max-width: 768px)"})
    const isTablet = useMediaQuery({query: "(max-width: 1024px)"})
    const sizes = calculateSizes(isSmall, isMobile, isTablet)
    console.log(sizes)
   
  return (
    <section id='home' className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col mt-36 sm:mt-20 c-space gap-3'>
            <p className='sm:text-2xl mt-5 text-3xl-xl font-medium text-white text-center font-generalsans'>Hello, I'm Suresh<span className='text-neutral-400 waving-hand'>👋</span></p>
            <p className='hero_tag text-gray_gradient font-generalsans'>
                React & React native developer
            </p>
        </div>
        <div className='w-full h-full absolute inset-0'>
            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 25]} />
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    <HeroCamera isMobile={isMobile}>
                        <System isMobile={isMobile} position={sizes.deskPosition} rotation={[0.06, 0, 0]} scale={sizes.deskScale}/>
                    </HeroCamera>
                    <group>
                        <Blender position={sizes.reactLogoPosition} rotation={[0, 0, 0]} scale={sizes.reactLogoScale}/>
                        <ReactLogo position={sizes.cubePosition} rotation={[0, 0, 0]} scale={0.3}/>
                        <HtmlLogo position={sizes.ringPosition} rotation={[0,80, 0]} scale={0.2}/>
                        <Tux position={sizes.targetPosition} rotation={[0, 0, 0]} scale={0.02}/>
                        
                    </group>
                </Suspense>
            </Canvas>
        </div>
        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
        <a href='#contact'>
        <Button name={`let's work together !`} containerClass={'sm:w-fit w-full sm:min-w-9'} />
        </a>
        </div>
    </section>
  )
}

export default Hero
