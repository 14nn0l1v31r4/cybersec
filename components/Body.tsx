import React from 'react'
import Qrcodepc from './Qrcodepc'
import Qrcodesmart from './Qrcodesmart'

const Body = () => {
  return (
    <div className=" bg-gray-900 w-full min-h-screen">
        <div className='text-center font-serif font-extrabold text-6xl pt-16'>
            Links de Dowload
        </div>
        
        <div className='flex md:flex-row '>
        <Qrcodepc />

        <Qrcodesmart />
        </div>
    </div>
  )
}

export default Body