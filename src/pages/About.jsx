import React from 'react'
const skills=[
    'HTML',
  'CSS / Tailwind',
  'JavaScript',
  'React',
  'Java',
  'Spring Boot',
  'PostgreSQL',
  'Git & GitHub',
]
const About = () => {
    return( <div id='about' className='bg-[#080808] text-white w-full px-40 pt-20 pb-6 scroll-mt-16'>
        <p className='font-bold text-3xl pb-6'>About <span className="text-white">Me</span>
        </p> 
        <p className='text-[#9C9C9C] text-sm ibm-mono pb-8 max-w-2xl leading-relaxed'>  I'm a software developer focused on full-stack development using Java
        Spring Boot, React, Tailwind, and PostgreSQL. I love learning and
        building impactful tech. 
        </p> 
        <a href='/cv.pdf' target='_blank' className='border   border-[#3F8E00] text [#3F8E00]   p-3 px-8 ibm-mono inline-block hover:bg-[#3F8E00] hover:text-white transition-colors'>
        View my CV
            </a> 
            <p className='font-bold text-3xl mt-10 pb-6'> My<span className= 'text-white'> Skills </span>
            </p>
            <div className='flex flex-wrap  gap-4 max-w-3xl'>
                { skills.map((skill)=> (
                    <div key={skill} className ='bg-[#1B1B1B] border border-[#1B1B1B] hover:border-[#3F8E00] text-white text-sm ibm-mono px-5 py-3 transition-colors rounded-lg p-5'>
                        {skill}
                    </div>
                ))}
            </div>
    </div>
    )
}
 
export default About
                