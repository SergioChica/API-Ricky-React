import React from 'react'

export const Cards = ({img, title='hola', text="sino"}) => {
  return (
    <div className=' h-[300px] w-[200px] rounded-[16px] bg-black'>
        <div className=' h-[200px] w-full ' >
          <img src={img} alt="" className=' h-full w-full object-fill rounded-[16px] rounded-b-[1px] border-none' />
        </div>
        <div className=' h-[100px] w-[100%] flex flex-col gap-2 justify-center items-center '>
          <h3 className=' text-white '>{title}</h3>
          <p className=' text-white '>{text}</p>
        </div>
    </div>
  )
}
