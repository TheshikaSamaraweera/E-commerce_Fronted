 import React from 'react'
 import Image from  'next/image'
 
 const Testimonial = () => {
   return (
     <div>
        <div className=' container py-16 grid-cols-2'>
            <h2 className='font-medium text-2xl pg-4'>Testimonial</h2>
            <div className='grid lg:grid-cols-[300px,1fr] gap-4'>
                <div className='border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
                    <div className='text-center flex flex-col items-center gap-1'>
                        <Image src="/profile.png" width={80} height={80} alt="profile" />
                        <h2>Elsa Deo</h2>
                        <p>CEO and Dounder Invission</p>
                        <Image src="/quotes.png" width={30} height={30} alt="quotes" />
                        <p>this is the tesxt
                            agasuias gdigh  uadoado bad auh aibbdajj bubadu 
                        </p>

                    </div>
                </div>
                <div>
                    <div>
                        <button>25% DISCOUNT</button>
                        <h2>Summer Collection</h2>
                        <p>Starting @ $20 <strong>Shop now</strong> </p>
                    </div>
                </div>

            </div>
        </div>
     </div>
   )
 }
 
 export default Testimonial