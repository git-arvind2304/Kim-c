import React from 'react'
import { Balloon} from 'lucide-react';
import {delay, motion} from 'framer-motion'

const Nav = () => {
  return (
    <div className='h-35 w-full   '>
      <div >
      
<h1 className='text-3xl  font-medium text-white pl-15 pt-10 '>Kim  <Balloon className='absolute top-6.5 left-18.5 rotate-45 text-amber-100' /></h1>
 
<nav className='absolute top-8 left-30 '>
  <motion.ul 
  initial={{ opacity: 0, scale:0 }} whileInView={{opacity:1,scale:1}} transition={{ duration: 0.6 }} viewport={{once:true}}

  className='flex gap-10 ml-[15%] size-15  text-lg bg-zinc-900 w-[105%] p-2 rounded-xl items-center justify-center text-zinc-400 '>
    <li className='bg-black text-zinc-400 p-2 pl-5  pr-5 rounded-xl  hover:text-white'><a href='#'>Home</a></li>
    <li  className=' hover:text-white'><a href='#'>Products</a></li>
    <li className=' hover:text-white'><a href='#'>Docs</a></li>
    <li className=' hover:text-white'><a href='#'>Pricing </a></li>
    <li className=' hover:text-white'><a href='#'>Company </a></li>
  </motion.ul>
  
</nav>


</div>

<div className='flex  gap-5  absolute top-8 right-10 '>

    <motion.button 
    whileTap={{ scale: 0.95 }}
    className='bg-zinc-900 text-white text-lg font-bold p-2 pl-3 pr-3 rounded-xl font-medium border-1 cursor-pointer'>Log in</motion.button>
<motion.button 
    whileTap={{ scale: 0.95 }}
    className='bg-white text-black text-lg font-bold p-2 pl-3 pr-3 rounded-xl font-medium cursor-pointer'>Get Started</motion.button>


</div>





    </div>
  )
}

export default Nav
