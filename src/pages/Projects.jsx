import React from 'react'
const projects = [
    {
        title:'Ticket booking System',
        description:'A full-stack Spring Boot + React ticket system with authentication, payments, and CRUD',
        tech:['Spring Boot','React','PostgreSQL'],
       
    },
    {
        title:'Campus lost and found',
        description:'A web platform where students can report lost items and post found ones, so belongings return to their owners faster.',
        tech:['Spring Boot','React','PostgreSQL'],
    },
    {
        title:'Bus Management System',
        description:'A bus management system built with C# for managing buses, routes and bookings',
        tech:['C#','SQL Server','React'],

    }
]
const Projects = () => {
    return (
        <div id='projects' className='bg-[#080808] text-white w-full p-6 md:px-40 pt-6 pb-20 scroll-mt-16 '>
            <p className=' font-bold text-3xl pb-10'>
                My <span className="text-white">Projects</span>

            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {projects.map((project)=>(
                    <div key={project.title}
                    className='bg-[#1B1B1B] border border-[#1B1B1B] hover:border-[#3F8E00] p-6 transition-colors'
                    > 
                    <p className='font-bold text-xl pb-3'>{project.title}</p>
                    <p className='text-[#9C9C9C] text-sm ibm-mono pb-5 leading-relaxed'>{project.description}</p>
                    <div className='flex flex-wrap gap-2'>
                        {project.tech.map((tech)=>(
                            <span key={tech} className='text-[#3F8E00] text-xs ibm-mono border border-[#3F8E00] px-3 py-1'>{tech}
                            </span>
                        ))}
                    </div>

                    </div>
                ))}
            </div>
            <div className='pt-12'>
                <a href='https://github.com/Yvan-23' target="_blank" className='bg-[#3F8E00] p-3 px-8 ibm-mono inline-block shadow-2xl shadow-emerald-400'>
                Visit my GitHub
                </a>

            </div>

        </div>
    )
}
export default Projects
