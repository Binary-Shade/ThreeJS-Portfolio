import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber'
import { Center } from '@react-three/drei'
import DemoPhone from '../components/DemoPhone'
import CanvasLoader from '../components/CanvasLoader'
import { OrbitControls } from '@react-three/drei'
const Projects = () => {
  const [currentProject, setCurrentProject] = useState(myProjects[0])
  const OptimizedDemoPhone = React.memo(DemoPhone)

  const handleNavigation = (direction) => {
    const currentIndex = myProjects.findIndex((project) => project === currentProject);
    const newIndex = direction === 'next' ? (currentIndex + 1) % myProjects.length : (currentIndex - 1 + myProjects.length) % myProjects.length;
    setCurrentProject(myProjects[newIndex]);
  };
  return (
    <section className='c-space my-20'>
    <p className='head-text'>My Work</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
      <div className='flex flex-col gap-5 relative p-5 sm:p-10 px-5 shadow-2xl shadow-black-200 rounded-3xl'>
      <div className='absolute top-0 right-0'>
      <img src={currentProject.spotlight} alt="spotlight " className='w-full h-96 object-cover rounded-xl' />
      </div>
      <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
      <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm object-cover' />
      </div>
      <div className='flex flex-col gap-5 text-white my-5'>
      <p className='text-2xl animatedText'>{currentProject.title}</p>
      <p className='animatedText'>{currentProject.desc}</p>
      <p className='animatedText'>{currentProject.subdesc}</p>
      </div>
      <div className='flex flex-row gap-5 items-center justify-between flex-wrap '>
      <div className='flex items-center gap-3'>
        {
          currentProject.tags.map((tag, index) => (
            <div className='tech-logo' key={index}>
            <img src={tag.path} alt={tag.name} />
            </div>
          ))
        }
      </div>
      
      </div>
      <div className="flex justify-between items-center mt-7 mb-5">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
      </div>
      <div className=" rounded-lg h-96 md:h-full">
          <Canvas style={{backgroundColor: `${currentProject.color}`}} className='rounded-lg'> 
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={0.07} position={[0, -3.3, 0]} rotation={[0, 0, 0]}>
                  <OptimizedDemoPhone texture={currentProject.texture}/>
                </group>
              </Suspense>
            </Center>
            <OrbitControls enableDamping={true} dampingFactor={0.25} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} enableZoom={false}  />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Projects
