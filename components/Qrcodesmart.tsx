import React from 'react';
import Image from 'next/image';

const Qrcodesmart = () => {
  return (
    <div className="inline-block text-black bg-green-50 w-80 h-96 ml-80 mt-28 ">
      <div className=''>

       <div className='flex justify-center '>
        
        <Image className='mt-3'
        src="\assets\smartphonegame.svg" 
        alt={''}
        width={90}
        height={55}
        />
        </div>
        <div className='flex justify-center  mt-6'>
          <Image className=' border-black border-4'
          src="./assets/qrcode-smartphone.svg"
          alt={'QRCode pc'}
          width={170}
          height={100}
          />
        </div>
        <div className='flex justify-center mt-4'>
        --- OU ---
        </div>
        <div className=' flex justify-center mt-2.5'>
          <button className=" p-1 border border-black rounded-2xl bg-green-600 hover:bg-green-800">
            <a href="https://github.com/tcc-Iago-Lucas/game/releases/download/v_1.0.0_wapi_pc/NoobSecurity.zip">
              Clique Aqui para fazer download
            </a>
            
          </button>
      </div>
      </div>
    </div>
  )
}

export default Qrcodesmart