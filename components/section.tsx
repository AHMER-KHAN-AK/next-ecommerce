
import Image from 'next/image'
import React from 'react'

const Section = () => {
  return (

    <div className='bg-mygray w-full h-[672px]   flex justify-around '
    > {/*  image div*/}
      <div className=' w-[50%] h-[600px]  m-10 ml-[100px]  '>
      
          <Image className=' place-items-center h-[500px] w-[650px]  px-10 mt-2' src={"/assets/table.png"} alt='tround table' height={250} width={250}/>
          {/*  text div*/}
          <div className='w-[300px] h-[100px]  bg-slate-400 mb-[10] text-3xl text-black font-normal place-content-start' >
          <ul className='place-items-start'>
            <li className='mb-2'>Side Table</li>
            <li> view More</li>
            
          </ul>
          
        </div>

      </div>
      {/* 2 image div*/}
      <div className=' w-[50%] h-[600px]  m-10 mr-[100px] '>
        <Image className='place-items-center h-[500px]  w-[650px]'  src={"/assets/sofa3.png"} alt='sofa'  height={250} width={250}/>
         {/*  text div*/}
        <div className='w-[300px] h-[100px]  bg-slate-300 mb-[10] text-3xl text-black font-normal ' >
          <ul className='place-items-center'>
            <li className='mb-2'>Side Table</li>
            <li> view More</li>
            
          </ul>

        </div>
      </div>

    </div>
  
  )
}

export default Section
