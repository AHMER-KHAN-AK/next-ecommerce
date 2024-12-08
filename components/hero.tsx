import Image from 'next/image'

import React from 'react'
import Link from 'next/link'


const Hero = () => {
  return (
    // <div className='w-[100%] h-screen bg-myskincolor flex  justify-center items-center'>
    //   {/*  text div*/}
    //   <div className=' w-[45%]  mt-[100px] mb-[100px]  h-full'>
     
    //     <div className='w-[440px] h-[200px] mt-[500px]  ml-[700px] text-7xl'>
    //     Rocket single <br/>
    //      seater
    //     </div>
    //     <div className=' w-[200px] h-[36px] text-3xl  ml-[700px] underline  ' >
    //     Shop Now
    //     </div>
    //   </div>
    //   {/*  image div*/}
    //   <div  className=' justify items-center w-[55%] h-full  mt-[100px] mb-[100px] '>
    //     <div className='justi'>
    //     <Image className='h-[1300px]  w-[1053px] mr-[400px]' src={"/assets/sofa2.png"} alt='sofa pic' width={350} height={350}/>
    //     </div>
    //   </div>
    // </div>
    <section className="text-gray-600 body-font  bg-myskincolor ">
    <div className="container mx-auto flex justify-center px-5  py-24 md:flex-row flex-col items-center">
      <div className=" md:w-1/4 flex flex-col gap-10  mb-16 md:mb-0 text-start  ">
        <h1 className="title-font sm:text-4xl text-7xl mb-4 font-semibold text-gray-900">Rocket single
          <br className="hidden lg:inline-block"/> seater
        </h1>
      <Link href={"/shop"}  className='bg-transparent border-b-2 self-start   border-b-black py-4 text-xl'>Shop Now</Link>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
        <Image
        src="/assets/sofa2.png"
        alt="hero"
        width={1800}
        height={1400}
        className="object-cover object-center rounded"
      />
      
      </div>
    </div>
  </section>
  )
}

export default Hero
 