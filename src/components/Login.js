import React from 'react';
import { FcGoogle } from 'react-icons/fc'
import logo from '../assets/logo.png'
import rectangle1 from '../assets/Rectangle1.png'
import rectangle2 from '../assets/Rectangle2.png'
import rectangle3 from '../assets/Rectangle3.png'
import window from '../assets/window.png';

const Login = () => {
    return (
        <div className=' grid grid-cols-2 min-h-screen'>
            <div className='grid place-items-center '>
                <div className='w-1/2 mx-auto'>
                    <h3 className='text-2xl font-semibold'>Sign In</h3>
                    <p className='text-gray-400 mb-10'>Enter your credentials to access your account</p>
                    <form className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="">Email</label>
                            <input type="email" name="" id="" placeholder='Enter your email' className='border p-2 rounded-lg' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="">Password</label>
                            <input type="password" name="" id="" placeholder='Enter your password' className='border p-2 rounded-lg' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-1'>
                                <input type="checkbox" />
                                <label htmlFor="" className='text-sm'>Remember me</label>
                            </div>
                            <a href="/" className='text-sm  text-blue-500'>Forgot Password</a>

                        </div>
                        <div>
                            <button className='bg-[#3D59DD] p-2 w-full text-white rounded-lg hover:bg-blue-700 duration-300'>Sign In</button>
                        </div>
                    </form>
                    <button className='w-full border rounded-lg mt-6 p-2 flex items-center gap-1 justify-center hover:bg-[#3D59DD] hover:text-white duration-300'><FcGoogle size={25} /> Sign in with Google </button>
                    <p className='text-sm text-center mt-6'>Don't have an account? <a href="/" className='text-blue-500'>Sign Up</a> </p>
                </div>

            </div>
            <div className='bg-[#0022D2] relative grid place-items-center'>
                <img src={rectangle1} alt="" className='h-1/4 absolute top-0 -left-5' />
                <img src={rectangle2} alt="" className='h-1/2 absolute top-0 -left-16' />
                <img src={rectangle3} alt="" className=' h-1/2 absolute bottom-[8%] -left-[5.5rem]' />
                <div className='absolute h-2/5 top-1'>
                    <img src={window} alt="" className='w-full' />
                </div>
                <div className='flex justify-end absolute top-10 right-10 '>
                    <img src={logo} alt="" className='h-12' />
                </div>
                <div className='text-right mr-8'>

                    <h2 className='text-white text-4xl '>Automate your message service</h2>
                    <div className='flex justify-end mt-6'>
                        <p className='text-white  font-light w-9/12'>Make your tasks easy with Loopmee by an automated integration along with your contacts</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;