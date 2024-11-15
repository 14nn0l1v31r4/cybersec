import React from 'react'
import Qrcodepc from './Qrcodepc'
import Qrcodesmart from './Qrcodesmart'

const Body = () => {
  return (
    <div className=" bg-gray-900 w-screen-full h-screen-full">
        <div className='flex justify-center font-semibold pt-9'>
            Links de Dowload
        </div>
        
        <div>
        <Qrcodepc />

        <Qrcodesmart />
        </div>
    </div>
  )
}

export default Body