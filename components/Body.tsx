import React from 'react'
import Qrcodepc from './Qrcodepc'
import Qrcodesmart from './Qrcodesmart'

const Body = () => {
  return (
    <div className=" bg-gradient-to-r from-green-950 to-black w-full min-h-screen">
        <div className='text-center font-serif font-extrabold text-4xl md:text-6xl pt-16'>
            Links de Dowload
        </div>
        
        <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-10'>
        <Qrcodepc />

        <Qrcodesmart />
        </div>
    </div>
  )
}

export default Body