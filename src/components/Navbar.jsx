import React, { useState } from 'react'
import { CgBrowser } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';
import { FaSpotify } from 'react-icons/fa';
import { IoIosHome } from 'react-icons/io';
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { SlSocialSpotify } from 'react-icons/sl';
import Button from './Button';
import SignButton from './SignButton';
function Navbar() {
 
const [isOpen, setIsOpen ] = useState(false)
 
    return (

<div>
<nav className="px-8  flex justify-between items-center py-4 fixed top-0 left-0 w-full bg-black text-Secondary">

<FaSpotify className="text-[35px] sm:ms-0 sm:me-0  ms-auto me-auto text-white" />



{/* search bar  and home*/}

<div className='hidden  sm:flex gap-5'>
    <div className="hover:hoverEffect md:flex hidden">
    <IoIosHome className="bg-primary h-13 w-13 rounded-full p-3 " />
</div>

<div className="flex justify-center items-center gap-4 bg-primary p-3 rounded-[25px] ">
    <CiSearch className="text-[20px]  " />
    <input type="text" placeholder='What do you want to play? ' className=" text-Secondary md:pr-10 pr-5" />
  <div className="flex items-center justify-center gap-3">
      <p className="text-xl">|</p>
    <CgBrowser className="mt-1"/>
  </div>
</div>
</div>


<ul className="hidden lg:flex gap-8 font-semibold">
    <li className="hover:hoverEffect">Premium</li>
    <li className="hover:hoverEffect">Support</li>
    <li className="hover:hoverEffect">Download</li>

<li>|</li>

   
</ul>
<div className="hidden gap-5 lg:flex">
    <SignButton/>
    <Button   />
</div>





<div className="lg:hidden  " onClick={()=> setIsOpen(!isOpen) } >
    <span className={`transtion-tansfrom duration-300 ease-in-out inline-block ${isOpen ? "rotate-180" : "rotate-0"}`} >
{
    isOpen ? <RxCross2 />  : <RxHamburgerMenu/>
}
    </span>
</div>

<ul
  className={`lg:hidden fixed top-[67px] sm:top-[84px] left-0 h-screen w-64 z-40 
  flex flex-col items-center justify-top py-8 gap-5
  bg-black transition-transform duration-300 ease-in-out
  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
>
  <li className="hover:hoverEffect">Premium</li>
    <li className="hover:hoverEffect">Support</li>
    <li className="hover:hoverEffect">Download</li>

<div className=" gap-5 flex flex-col lg:hidden">
    <SignButton/>
    <Button   />
</div>


</ul>


</nav>





    </div>
  )
}

export default Navbar