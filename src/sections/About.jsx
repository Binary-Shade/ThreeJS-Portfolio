import React from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const About = () => {
    const [hasCopied , SetHasCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText('02042003sureshk@gmail.com')
        toast.success('Email copied to clipboard')
        SetHasCopied(true)
        setTimeout(() => {
            SetHasCopied(false)
        }, 2000)
    }
return (
    <section className="c-space my-20" id="about">
    <p className='head-text mb-5'>About Me</p>
    <Toaster 
        position="bottom-right"
        reverseOrder={false}
    />
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi ! I'm suresh </p>
              <p className="grid-subtext">
                With experience in react and react native and honed my skills in both frontend and backend technologies , creating dynamic and responsives design
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
        <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h[326px] h-fit flex justify-center items-center'>
                     <Globe
                        width={326}
                        height={326}
                        backgroundColor='rgba(0,0,0,0)'
                        showAtmosphere
                        showGraticules
                        globeImageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/The_earth_at_night.jpg/960px-The_earth_at_night.jpg'}
                        bumpImageUrl={'https://unpkg.com/three-globe@2.43.0/example/img/earth-topology.png'}
                        zoomable={false}
                        enablePointerInteraction={false}
                      />
                    </div>
                        <p className='grid-headtext'>I work remotely across different timezones</p>
                        <p className='grid-subtext'>I'm based in Banglore, with Remote Work available.</p>
                        <Button isBeam name={'Contact Me'}  containerClass={'w-full mt-10'}/>
                </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">02042003sureshk@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
