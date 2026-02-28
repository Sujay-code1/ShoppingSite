import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {assets} from '../assets/assets'
import { useState } from 'react'

function NavBar() {

    const[visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-6 font-medium'>
      <h1 className='sm:text-6xl text-3xl text-black'>Nobero.</h1>
    
      <ul className='hidden sm:flex gap-8 text-2xl  text-gray-700'>
     
     <NavLink to='/' className='flex flex-col items-center gap-1'>
        <p>Home</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
     </NavLink>

      <NavLink to='/collections' className='flex flex-col items-center gap-1'>
        <p>Collections</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
     </NavLink>

      <NavLink to='/about' className='flex flex-col items-center gap-1'>
        <p>About</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
     </NavLink>

      <NavLink to='/contact' className='flex flex-col items-center gap-1'>
        <p>Contact</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
     </NavLink>

      </ul>

      <div className='flex items-center gap-6'>
          <img src={assets.search_icon} alt='search' className='w-7 cursor-pointer'/>
          <div className='group relative'>
               <img src={assets.profile_icon} alt='profile' className='w-7 cursor-pointer'/>
               <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                  <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100  text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>My Orders</p>
                    <p className='cursor-pointer hover:text-black'>Logout</p>
                  </div>

               </div>
          </div>
          <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} alt='cart' className='w-7 cursor-pointer'/>
                <p className='absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>5</p>
          </Link>

          <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt='menu' className='w-5 cursor-pointer sm:hidden'/>
      </div>
      {/* for small devices */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden  bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                 <div className='flex flex-col  text-gray-700'>
                     <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt=''/>
                              <p>Back</p>
                     </div>
                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collections'>Collections</NavLink>
                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
                 </div>
        </div>
    </div>
  )
}

export default NavBar
