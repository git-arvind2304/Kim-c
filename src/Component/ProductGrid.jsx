 import React from 'react'
 import { BrainCog } from 'lucide-react';
 import {delay, motion} from 'framer-motion'
 const ProductGrid = () => {
   return (
    
     <div className='h-155 w-full     bg-right bg-no-repeat '
  style={{ backgroundImage: 'url("https://i.pinimg.com/736x/75/5a/47/755a47b34afff88b208dc762c9cddcea.jpg")' }}>

 <p className='  p-10 text-white text-lg/6 pt-6  text-white font-'>Kimc is an all-in-one user Infrastructure platform that handle authentication access <br />control ,and real-time user insights so your product scales without friction . </p>

  <div className='flex  gap-7 pl-12 pt-12'>
  <motion.button   whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className='bg-zinc-900 text-white text-lg font-bold p-4 pl-6 pr-6 shadow-inner shadow-gray-500 rounded-xl font-medium cursor-pointer'>View docs</motion.button>
  <motion.button  
   whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }} 
  className='bg-white text-black text-lg font-bold p-4 pl-6 pr-6 shadow-inner rounded-xl font-medium cursor-pointer '>Start for free <i className="ri-arrow-right-line bg-black text-white p-2 pl-3 pr-3 rounded-lg ml-3 shadow-xl/30"></i></motion.button>
</div>
    
<div className='' >

  <p className='p-10 text-white text-lg/6 mt-2 font-medium tracking-wide'>Trusted by experts at <br />leading companies</p>

<motion.div 
// animate={{ x: 10, opacity: 1 }}
// initial={{ opacity: 0 }}
// transition={{ duration: 1, delay: 0.5, times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 2 }}
className='flex  pl-[20%] '>
 <motion.h2
  animate={{ x: 70, opacity: 1 }} initial={{ opacity: 0 }}  transition={{ duration: 1, delay: 0.5, times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 2 }} 
 className='text-4xl font-ubuntu font-bold text-zinc-500 absolute top-[106%]'>Google</motion.h2>
 <motion.h2
  animate={{ x: 70, opacity: 1 }}   transition={{ duration: 1, delay: 1, times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 2 }}
  className='text-4xl font-ubuntu font-bold text-zinc-500 absolute top-[106%] left-[32%]'  >Microsoft</motion.h2>
  <motion.h2 
  animate={{ x: 70, opacity: 1 }} initial={{ opacity: 0 }}  transition={{ duration: 1, delay: 1.5, times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 2 }}
   className='text-4xl font-ubuntu font-bold text-zinc-500 absolute top-[106%] left-[47%]'>Stripe</motion.h2>
   
</motion.div>

</div>

<BrainCog className='size-10 text-amber-200 absolute top-[85%] left-[71.3%] animate-spin'/>

     </div>

   

 
   )
 }
 
 export default ProductGrid
 