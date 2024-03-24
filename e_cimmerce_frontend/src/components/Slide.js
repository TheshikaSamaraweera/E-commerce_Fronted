import React from 'react'
import Image from 'next/image'

const Slide = ( {img ,title,mainTitle,price}) => {
  return (
    <div className='outline-none border-none relative'>
        <div className='absolute left-[30px] md:left[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-non'>
            <h3 className='text-white text-[24px] lg:text-[28px]'>{title}</h3>
            <h2 className='text-black text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]'>{mainTitle}</h2>

            <h3 className='text-[24px] text-gray-500'>
                starting at{" "}
                 <strong className='text-[20px] md:text-[24px] lg:text-[30px]'>{price}</strong>.00
            </h3>
            <div className='bg-pink-300 text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-black'>
                Shop Now
            </div>
        </div>
        <Image 
        className='w-[100%] h-[300px] md:h-auto rounded-xl object-cover md:object-bottom'
        src={img} 
        alt="banner" 
        width={2000} 
        height={2000} />
    </div>
  )
}

export default Slide