import React from 'react';
import LoginSide from '../Components/Login/LoginSide';
import LoginForm from '../Components/Login/LoginForm';

const Login = () => {
    return (
        <div className='flex items-center h-[100vh]'>
            <div className='max-md:hidden h-[100vh] flex-[1]'>
                <LoginSide />
            </div>
            <div className='flex-[1] max-md:w-full'>
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;
