import React from 'react'
import HelpPC from './HelpPC'
import HelpSmart from './HelpSmart'

const Help = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-2 gap-4 p-4 max-h-screen border rounded-lg shadow-2xl m-3 border-r-orange-50'>
        <div className='p-3'>
        <HelpPC/>
        </div>

        <div className='p-3'>

        <HelpSmart/>
        </div>
    </div>
  )
}

export default Help