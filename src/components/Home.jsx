import React from 'react'
import {Link} from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 '>Hi, my name is</p>
            <h1 className='text-4xl sm:text:7xl font-bold text-[#ccd6f6]'>Yajas Menon</h1>
            <h2 className='text-4xl sm:text:7xl font-bold text-[#8892b0]'>I'am a Front-End Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'am Front End developer specializing in building (and occasionally designing) websites .
                I started Learning to code in college and started liking it .
                I occasionally take on freelancing projects. I'm Focused on building responsive front-end web applications</p>
            <div>
              <Link  to='work' smooth={true} duration={500}>
                <button className='text-white  border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-purple-600'>View Work 
                <span>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
                </Link >
            </div>
        </div>
    </div>
  )
}

export default Home