 import React from 'react'
 import {delay, motion} from 'framer-motion'
 const Header = () => {
   return (
     <div className='h-60 w-full '>
       
<div>
    <motion.h1 animate ={{ x: 100,  }} transition={{duration:5, delay: 0.5, times: [0, 0.5, 1] }}   className='text-8xl/23  pl-10 text-white pt-10 font-display text-zinc-300 '>User management that <br />actually Scales</motion.h1>
    {/* <p className='p-10 text-white text-lg/6 pt-6  text-zinc-300 font-normal'>Kimc is an all-in-one user Infrastructure platform that handle authentication access <br />control ,and real-time user insights so your product scales without friction . </p> */}
</div>
 
{/* <div className='flex  gap-7 pl-12 '>
  <button className='bg-zinc-900 text-white text-lg font-bold p-4 pl-6 pr-6 shadow-inner shadow-gray-500 rounded-xl font-medium '>View docs</button>
  <button className='bg-white text-black text-lg font-bold p-4 pl-6 pr-6 shadow-inner rounded-xl font-medium '>Start for free <i className="ri-arrow-right-line bg-black text-white p-2 pl-3 pr-3 rounded-lg ml-3 shadow-xl/30"></i></button>
</div> */}



     </div>
   )
 }
 
 export default Header
 