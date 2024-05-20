import React from 'react';
import logo from "../assets/logo-white.png";



const Footer = () => {
    return (
        <div className='bg-[#0A2F35] py-4'>
            <div className=' text-white font-sm flex items-center justify-between w-[80%] m-auto  max-md:flex-col max-md:justify-center'>
                <div className='opacity-65'>Copyright © 2024 Any.All right reserved</div>
                <div>
                    <img src={logo} alt="logo" className='w-[120px]' />
                </div>
                <div className='flex items-center justify-between opacity-65 gap-4'>
                    <span>Privacy</span>
                    <span>Pospancy</span>
                    <span>Terms</span>
                    <span>Services</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
