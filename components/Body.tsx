import Apresentation from './Apresentation'
import Footer from './Footer'
import Form from './Form'
import Help from './Help'
import Qrcodepc from './Qrcodepc'
import Qrcodesmart from './Qrcodesmart'

const Body = () => {
  return (
    <div className=" bg-gradient-to-r from-green-900 via-green-950 to-black w-full min-h-screen overflow-hidden">
        <div className='text-center font-serif font-extrabold text-4xl md:text-6xl pt-6  md:p-4'>
            Noob Security
            
        </div>
        <div className='p-4'>
          <Apresentation/>
        </div>

        <div className='font-mono text-lg mt-10 ml-60'>
              Links para Download</div>
        
        <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-5'>
        <Qrcodepc />

        <Qrcodesmart />
        </div>
        <div >
          <Help/>
        </div>
        <div className='mb-1'>
          <Form />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default Body