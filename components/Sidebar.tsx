import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import {useTheme} from "next-themes"
import Image from 'next/image'

const Sidebar = () => {
    const {theme, setTheme} = useTheme()

    const changeTheme = () => [
        setTheme(theme==='light' ? 'dark' : 'light')
    ]



    return (
        <div>
            <Image
                height='128px'
                width='120px'
                layout='intrinsic'
                className='w-32 h-32 rounded-full mx-auto'
                src="https://wangxiaobei.herokuapp.com/public/images/profile.JPG"
                alt="user avatar"
                quality='100'
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
                <span className='text-blue'>Cong </span>
                Wang
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>Web Developer</p>
            <a  className='px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center  dark:bg-dark-200'
                href='/assets/front-end_Cong Wang.docx'
                download='Resume_Cong_Wang'>
                <GiTie className='w-6 h-6' /> Download Resume
            </a>

            <div className='flex justify-around my-5 text-blue w-9/12 mx-auto md:w-full'>
                <a href="https://github.com/MaxBay2020">
                    <BsGithub className='w-6 h-6 cursor-pointer' />
                </a>
                <a href="https://www.linkedin.com/in/cong-wang-69a7861a3/">
                    <BsLinkedin className='w-6 h-6 cursor-pointer' />
                </a>
            </div>



            <div className='my-5 py-4 bg-gray-200 dark:bg-dark-200 dark:bg-black-500' style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
                <div className='flex item-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Toronto, Canada</span>
                </div>
                <p className='my-2 text-sm'>cwang167@my.centennialcollege.ca</p>
                <p className='my-2 text-sm'>416 832 6810</p>
            </div>

            <button className='bg-gradient-to-r from-blue to-green-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none'
                onClick={() => window.open('mailto:cwang167@my.centennialcollege.ca')}
            >Email Me</button>
            <button className='bg-gradient-to-r from-blue to-green-400 w-8/12 rounded-full py-2 px-5 text-white my-2'
                onClick={() => changeTheme()}
            >
                Toggle Theme
            </button>

        </div>
    );
};


export default Sidebar;
