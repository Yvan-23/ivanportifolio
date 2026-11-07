import React from 'react'

const Home = () => {
  return (
    <div className='bg-[#080808] w-full h-150 flex text-white  '>
        <div className=' w-1/2 m-40 '>
           <p className="font-bold text-3xl py-3"> My Name is Manzi Yvan</p> 

           <p className="text-[#9C9C9C] py-3 text-sm ibm-mono">   A passionate developer who is always learning. I enjoy creating simple,
  modern interfaces and turning creative ideas into working projects.</p>
           <button className="bg-[#3F8E00] p-3 px-8 ibm-mono shadow-2xl shadow-emerald-400">
            View my projects
           </button>
        </div>
         <div className=' w-1/2 m-30'>
           <div className="border-2 rounded-full w-80 h-80 overflow-hidden">
            <img src="/yvan.jpeg" alt="Yvan" className="w-full h-full object-cover rounded-full" />
           </div>
        </div>
    </div>

  )
}

export default Home