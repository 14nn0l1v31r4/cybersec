
import React from 'react';
import Image from 'next/image';

const Qrcodepc = () => {
  return (
    <div className="text-black bg-cyan-50 w-[90%] max-w-md h-auto p-6 ml-2 rounded-lg shadow-lg">
      <div>

       <div className='flex justify-center '>
        
        <Image className='mt-3'
        src="\assets\pcgame.svg" 
        alt={''}
        width={90}
        height={55}
        />
        </div>
        <div className='flex justify-center  mt-6'>
          <Image className=' border-black border-4'
          src="./assets/qrcode-pc.svg"
          alt={'QRCode pc'}
          width={170}
          height={100}
          />
        </div>
        <div className='flex justify-center mt-4'>
        --- OU ---
        </div>
        <div className=' flex justify-center mt-2.5'>
          <button className=" p-1 border border-black rounded-2xl  bg-green-600 hover:bg-green-800">
            <a href="https://github.com/tcc-Iago-Lucas/game/releases/download/v_1.0.0_wapi_pc/NoobSecurity.zip">
              Clique Aqui para fazer download
            </a>
            
          </button>
      </div>
      </div>
    </div>
  )
}

export default Qrcodepc
