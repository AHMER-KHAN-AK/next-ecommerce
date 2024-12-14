import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

import Link from 'next/link';


const Navbar = () => {
  return (
    <header >
    <div className=' h-[100px] flex  bg-myskincolor'>
      
      <div  className=' w-[30%]'></div>
      <div className='flex justify-center  w-[40%]'>
        <ul className='flex gap-16 items-center text-3xl ' >
        <Link href={'/'}><li>Home </li></Link>
        <Link href={'/shop'}><li>Shop</li></Link>
        <Link href={'/about'}><li>About</li></Link>
        <Link href={'/contact'}><li>Contact</li></Link>
        </ul>
</div>
      <div className=' w-[30%] flex justify-center items-center '>
        <div className='w-[50%]  h-[28px]  '>
        <ul className='flex justify-between text-4xl gap-10 '>
         <Link href={'/account'}> <li> <FaRegUser /></li></Link>
          <li><IoIosSearch /></li>
          <li><IoIosHeartEmpty /></li>
          <li><IoCartOutline /></li>
          
        </ul>
        </div>

      </div>
      </div>
      </header>
  )
}

export default Navbar