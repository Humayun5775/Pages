import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'

import loginImg from '../assets/login.jpg'
const signup = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
    <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />


<div className='flex justify-center items-center h-full'>
    <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
        <h2 className='text-4xl font-bold text-center py-4'>Signup</h2>
        <div className='flex justify-between py-8'>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
        </div>




        <div class="m-4">
            <div class="flex items-center justify-center w-full">
                <label
                    class="flex flex-col w-full h-32 border-4 border-red-200  hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Upload your Picture</p>
                    </div>
                    <input type="file" class="opacity-0" />
                </label>
            </div>
        </div> 
    














        <div className='flex flex-col mb-4'>
            <label>Username</label>
            <input className='border relative bg-gray-100 p-2' type="text" />
        </div>
        <div className='flex flex-col '>
            <label>Password</label>
            <input className='border relative bg-gray-100 p-2' type="password" />
        </div>
        <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign In</button>
        <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
        <p className='text-center mt-8'>Not a member? Sign up now</p>
    </form>
</div>
</div>
  )
}

export default signup