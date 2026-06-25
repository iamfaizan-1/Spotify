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

<FaSpotify className="text-[35px] text-white" />



{/* search bar  and home*/}

<div className='flex gap-5'>
    <div className="hover:hoverEffect">
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


<ul className="hidden md:flex gap-8 font-semibold">
    <li className="hover:hoverEffect">Premium</li>
    <li className="hover:hoverEffect">Support</li>
    <li className="hover:hoverEffect">Download</li>

<li>|</li>

   
</ul>
<div className="flex gap-5">
    <SignButton/>
    <Button   />
</div>





<div className="md:hidden  " onClick={()=> setIsOpen(!isOpen) } >
    <span className={`transtion-tansfrom duration-300 ease-in-out inline-block ${isOpen ? "rotate-180" : "rotate-0"}`} >
{
    isOpen ? <RxCross2 />  : <RxHamburgerMenu/>
}
    </span>
</div>

<ul className={`md:hidden absolute top-[56px]  transtion-tansfrom duration-300 ease-in-out left-0 w-full z-40 flex flex-col items-center justify-center  overflow-hidden bg-amber-800 ${isOpen ? "max-h-60  py-3 " : "max-h-0  py-0"} `} >
     <li>Home</li>
    <li>Home</li>
    <li>Home</li>
    <li>Home</li>

</ul>


</nav>





    </div>
  )
}

export default Navbar