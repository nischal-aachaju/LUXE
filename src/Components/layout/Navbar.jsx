import React, { useState } from 'react'
import { Search, UserRound, ShoppingBag, Moon, TextAlignJustify, X } from 'lucide-react'
const Navbar = () => {

  const [menuBox, setMenuBox] = useState(true)
  const nav = ["New Arrivals", "Collections", "Accessories", "Editorial"]

  return (
    <div className=' h-14  w-fill flex justify-between pl-10'>
      <div className=' flex justify-center items-center w-fit'><h1 className=' text-2xl font-bold font-serif text-black'>LUXE</h1></div>
      <div className=' flex w-30 items-center'>
        <div className=' flex gap-4'>
          <Search className='cursor-pointer' strokeWidth={1} />
          <ShoppingBag className='cursor-pointer' strokeWidth={1} />
        </div>
        <div onClick={() => { setMenuBox(!menuBox) }} className=' ml-2 cursor-pointer h-full w-full flex items-center justify-center'>
          {menuBox ? <TextAlignJustify strokeWidth={1.1} /> : <X  strokeWidth={1} size={32} />}

        </div>
      </div>
      {menuBox?null:<nav className='absolute h-80 w-full top-14 left-0 border-t   z-10 flex flex-col items-end '>
        {nav.map((elem) => {
          return <a className='bg-orange-100 w-full h-14 text-center pt-3 text-xl border-b border-white active:underline ' href="">{elem}</a>
        })}
      </nav>}


    </div>
  )
}

export default Navbar
