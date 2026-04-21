import React from 'react'
import Nav from './Component/Nav'
import Header from './Component/Header'
import ProductGrid from './Component/ProductGrid'
import ProductCard from './Component/ProductCard'
import CartSidebar from './Component/CartSidebar'
 
const App = () => {
  return (
    <div className='w-full h-250 bg-black  '>
       <Nav/>
      <Header />
      <ProductGrid/>
   
     
    </div>
  )
}

export default App
