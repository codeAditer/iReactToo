import React from 'react'

const Navbar = () => {
  return (
<nav className='flex justify-around bg-slate-400 text-white py-3 h-16 mt-0'>
    <div className="logo">
        <span className='font-bold text-xl mx-8'>iReactToo</span>
    </div>
    <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li  className='cursor-pointer hover:font-bold transition-all'>About</li>
    </ul>
</nav>
  )
}

export default Navbar
