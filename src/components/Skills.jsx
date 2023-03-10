import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Bootstrap from '../assets/bootstrap.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300' >
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shawdow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='Html icon'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shawdow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='Css icon'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shawdow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='Javascript icon'/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shawdow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt='React icon'/>
                    <p className='my-4'>ReactJs</p>
                </div>
                <div className='shawdow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt='Github icon'/>
                    <p className='my-4'>Github</p>
                </div>
                <div className='shawdow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt='Nodejs icon'/>
                    <p className='my-4'>Nodejs</p>
                </div>
                <div className='shawdow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Bootstrap} alt='Bootstrap icon'/>
                    <p className='my-4'>Bootstrap CSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills