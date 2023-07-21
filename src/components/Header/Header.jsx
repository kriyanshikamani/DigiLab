import React from 'react'
import {BsCart3} from "react-icons/bs"

const Header = () => {
    const navbar=["Book Test/Packages","About Us","Download Report","Our Labs","Pay Online"]
  return (
    <div>
        <nav className=' bg-gradient-to-l from-blue-900 to-blue-600  via-blue-700 '>
            <div className='relative min-w-screen flex justify-end'>
                <ul className='flex space-x-6'>
                
                    {
                        navbar.map((Btn,index)=>{
                            return(
                                <li key={index} className='text-white font-semibold text-md  py-7  hover:text-blue-300 cursor-pointer transition-all duration-200  relative group'>{Btn}
                                <div className='absolute w-full h-1 bg-blue-200 bottom-0 hidden group-hover:block'></div>
                                </li>
                            )
                        })
                    }
                    <span className='my-6 text-white hover:cursor-pointer text-2xl'><BsCart3 /></span>
                    <div>
                    <button className='rounded-sm my-5 w-20 h-9 text-white mx-3 border-blue-300 border-2 hover:bg-blue-600 font-bold text-md hover:font-extrabold cursor-pointer'>Log in </button>
                   
                    </div>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header