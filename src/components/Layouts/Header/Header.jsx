import React from 'react'

export const Header = ({ children }) => {
  return (
    <header className=' w-full h-[100px] bg-amber-950 flex justify-center items-center' >
      {children}
    </header>
  )
}
