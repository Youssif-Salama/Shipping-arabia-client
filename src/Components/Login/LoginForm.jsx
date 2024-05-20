import React from 'react';
import Input from '../../common/Input';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Login } from '../../store/slices/LoginSlice';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (values) => {
        dispatch(Login({ endPoint: "/user/signin", formData: values }));
        navigate("/home")
    }

    const formik = useFormik({
        initialValues: {
            Email: null,
            Phone: null,
            Password: null
        },
        onSubmit: handleSubmit
    })
    return (
        <div className='p-12 px-32 max-md:px-12'>
            <h1 className='font-bold text-[38px] mb-16'>Login</h1>
            <form className='w-full' onSubmit={formik.handleSubmit}>
                <Input placeholder="Email or Phone"
                    type="text"
                    onChange={(e) => {
                        formik.handleChange(e);
                        formik.setFieldValue("Email", e.target.value);
                        formik.setFieldValue("Phone", e.target.value);
                    }}
                />
                <Input placeholder="Password"
                    type="password"
                    name="Password"
                    id="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <button type="submit" className='font-bold text-white py-4 px-12 my-6 rounded-xl hover:scale-95 bg-[#F7A325] w-full transition-all'>Login</button>
            </form>
            <div className="text-sm">
                Don't have an account,
                <Link to="/signup" className="text-[#F7A325]"> Sign Up</Link>
            </div>
        </div>
    );
}

export default LoginForm;
