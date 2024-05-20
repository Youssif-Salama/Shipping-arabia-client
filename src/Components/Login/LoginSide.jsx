import React from 'react';
import registrationImage from "../../assets/registration.png"
import logo from "../../assets/logo-white.png"
const LoginSide = () => {
    return (
        <div
            className="flex items-start justify-center rounded-[55px] rounded-l-none rounded-br-none p-20 px-16 h-[100vh] bg-no-repeat bg-cover"
            style={{ backgroundImage: `url('${registrationImage}')` }}>
            <div className=' capitalize text-white font-bold text-[38px]'>
                <h1>Welcome to Shipping Arabia</h1>
                <h1>Join Us Now ! </h1>
                <img src={logo} alt="logo" className='mt-24' />
            </div>
        </div>
    );
}

export default LoginSide;
