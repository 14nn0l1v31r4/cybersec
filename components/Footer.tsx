import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='p-2'>
    <div className=''>

    <a href="https://www.instagram.com/projetojogandoeaprendendo/" className='flex justify-center'>

      <Image 
      src={'/assets/icon_instagram.png'} 
      alt={''}
      width={70}
      height={50}
      className=''
      />
  
      </a>
      </div>
    </div>
  )
}

export default Footer