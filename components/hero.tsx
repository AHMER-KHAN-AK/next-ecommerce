import Image from 'next/image'

import React from 'react'


const Hero = () => {
  return (
    <div className='w-[100%] h-screen bg-myskincolor flex  justify-center items-center'>
      {/*  text div*/}
      <div className=' w-[45%]  mt-[100px] mb-[100px]  h-full'>
     
        <div className='w-[440px] h-[200px] mt-[500px]  ml-[700px] text-7xl'>
        Rocket single <br/>
         seater
        </div>
        <div className=' w-[200px] h-[36px] text-3xl  ml-[700px] underline  ' >
        Shop Now
        </div>
      </div>
      {/*  image div*/}
      <div  className=' justify items-center w-[55%] h-full  mt-[100px] mb-[100px] '>
        <div className='justi'>
        <Image className='h-[1300px]  w-[1053px] mr-[400px]' src={"/assets/sofa2.png"} alt='sofa pic' width={350} height={350}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
 