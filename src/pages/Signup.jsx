import React from 'react';
import LoginSide from '../Components/Login/LoginSide';
import SignupForm from '../Components/Signup/SignupForm';

const Signup = () => {
    return (
        <div className='flex items-center h-[100vh]'>
            <div className='max-md:hidden h-[100vh] flex-[1]'>
                <LoginSide />
            </div>
            <div className='flex-[1] max-md:w-full'>
                <SignupForm />
            </div>
        </div>
    );
}

export default Signup;
