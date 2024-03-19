import React from 'react'
import {BsFacebook, BsLinkedin, BsTwitter,BsInstagram} from "react-icons/bs"

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden '>
        <div>
            <div>
                <div>
                    <div>
                        <BsFacebook />
                    </div>
                    <div>
                        <BsTwitter/>
                    </div>
                    <div>
                        <BsInstagram />
                    </div>
                    <div>
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
