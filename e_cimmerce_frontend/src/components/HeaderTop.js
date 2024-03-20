import React from 'react'
import {BsFacebook, BsLinkedin, BsTwitter,BsInstagram} from "react-icons/bs"

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
        <div className='container py-4'>
            <div className='flex justify-between items-center'>
                <div className='hidden lg:flex gap-2'>
                    <div className='header_top_icon_wrapper'>
                        <BsFacebook />
                    </div >
                    <div className='header_top_icon_wrapper'>
                        <BsTwitter/>
                    </div>
                    <div className='header_top_icon_wrapper'>
                        <BsInstagram />
                    </div>
                    <div className='header_top_icon_wrapper'>
                        <BsLinkedin />
                    </div>

                </div>



                <div className='text-gray-500 text-[12px]'>
                    <strong>FREE SHIPPING</strong>
                </div>


                <div>
                    <select name='currancy' id='currncy'>
                        <option value='USD $'>USD $</option>
                        <option value='EUR $'>EUR $</option>
                    </select>

                    <select name='language' id='language'>
                        <option value='English'>English</option>
                        <option value='Freanch'>Freanch</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop
