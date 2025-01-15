import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='bg-orange-500 text-white shadow-md p-8 px-24 pl-48 fixed z-20 w-full'>
        <ul className='flex flex-row justify-between'>
          <div>
            <p className='font-bold'>Dashboard</p>
          </div>
          <div>
            <p className='font-bold'>Teknologi Informatika</p>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar