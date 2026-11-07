import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Navbar = () => {
  return (
    <div className='bg-[#1B1B1B] text-[#9C9C9C] flex items-center gap-60' >
        <ul className='flex ml-10 gap-10 py-5 text-sm ibm-mono '>
            <li>Home</li>
            <li>Case Studies</li>
            <li>Testimonials</li>
            <li>Recent work</li>
            <li>Get in touch</li>
        </ul>
        <div>
            <SocialIcon url="www.instagram.com" bgColor='none' href='https://www.instagram.com/m_yvan_/'  fgColor="#9C9C9C" /> 
        <SocialIcon url="www.github.com" bgColor='none' href='https://github.com/Yvan-23'  fgColor="#9C9C9C" />
        </div>
    </div>
  )
}

export default Navbar