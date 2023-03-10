import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
               <div className='sm:text-right pb-8 pl-4 '>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About
                </p>
               </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm: grid-cols-2 gap-8 px-4 '>
                <div className='sm: text-right text-4xl font-bold '>
                    <p>Hi. I'm Yajas , nice to meet you. Please take a look around</p>
                </div>
                <div>
                    <p>Hello there! My name is Yajas and I am a front-end developer with a passion for creating beautiful and functional web applications. 
                        I started my journey by learning the basics of HTML, CSS, and JavaScript, and I quickly developed a keen eye for design and layout. 
                        As I progressed, I delved deeper into the world of front-end development, exploring popular frameworks and libraries such as React and Angular.
                         I specialize in building responsive and user-friendly interfaces, with a focus on creating an engaging user experience. I've worked on a variety of projects and I am always eager to learn new technologies and improve my skills. I've also basic knowledge of back end developement.
                         If you're looking for a skilled and dedicated front-end developer to bring your ideas to life, look no further. Contact me!
                    </p>
                </div>

            </div>

            </div>
        
    </div>
  )
}

export default About