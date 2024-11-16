
import React from 'react';
import Image from 'next/image';

const Qrcodepc = () => {
  return (
    <div className="text-black bg-slate-300 w-[90%] max-w-md h-auto p-6 ml-2 rounded-lg shadow-lg">
      <div className=''>

       <div className='flex justify-center '>
        
        <Image className='mt-3 mb-9 '
        src="\assets\pcgame.svg" 
        alt={''}
        width={145}
        height={55}
        />
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
