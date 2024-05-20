import React from 'react';
import Input from '../../common/Input';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Signup } from '../../store/slices/SignupSlice';



const egyptGovernorates = [
    "Ad Daqahliyah",
    "Al Bahr Al Ahmar",
    "Al Buhayrah",
    "Al Fayyum",
    "Al Gharbiyah",
    "Al Iskandariyah",
    "Al Isma'iliyah",
    "Al Jizah",
    "Al Minufiyah",
    "Al Qalyubiyah",
    "Al Wadi Al Jadid",
    "Aswan",
    "Asyut",
    "Bani Suwayf",
    "Bur Sa'id",
    "Dumyat",
    "Janub Sina'",
    "Kafr Ash Shaykh",
    "Matruh",
    "Minya",
    "Mu'ayzilah",
    "Qina",
    "Shamal Sina'",
    "Suhaj",
    "Al Uqsur",
    "Al Wahat Al Khargiyah"
];


const SignupForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const updatedValues = {
            ...values, Address: {
                Governorate: values.Governorate,
                Address: values.Address
            }
        }
        console.log(updatedValues);
        dispatch(Signup({ endPoint: "/user/signup", formData: updatedValues }))
    }

    const formik = useFormik({
        initialValues: {
            Name: null,
            Email: null,
            Password: null,
            Phone: null,
            Governorate: null,
            Address: null
        },
        onSubmit: handleSubmit
    })
    return (
        <div className='py-10 px-32 max-md:px-12'>
            <h1 className='font-bold text-[38px] mb-10'>Create New Account</h1>
            <form className='w-full' onSubmit={formik.handleSubmit}>
                <Input placeholder="Name"
                    name="Name"
                    id="Name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.Name}
                />
                <Input placeholder="Phone"
                    name="Phone"
                    id="Phone"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.Phone}
                />
                <Input placeholder="Email"
                    name="Email"
                    id="Email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.Email}
                />
                <div className='flex items-start justify-between gap-4'>

                    <div className='flex flex-col my-4 w-full'>
                        <label htmlFor="Governorate" className='mb-2'>Governorate</label>

                        <select name="Governorate" id="Governorate"
                            onChange={formik.handleChange}
                            value={formik.values.Governorate}
                            className="rounded-lg outline-0 hover:border-[#916BBF] border p-4 w-full focus:border-[#916BBF]"
                        >
                            <option>select governorate</option>
                            {egyptGovernorates.map((item, index) => {
                                return (<option value={item} key={index}>
                                    {item}
                                </option>)
                            })}
                        </select>
                    </div>
                    <Input placeholder="Address"
                        name="Address"
                        id="Address"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.Address}
                    />
                </div>
                <Input placeholder="Password"
                    type="password"
                    name="Password"
                    id="Password"
                    onChange={formik.handleChange}
                    value={formik.values.Password}
                />
                <button type="submit" className='font-bold text-white py-4 px-12 my-6 rounded-xl hover:scale-95 bg-[#F7A325] w-full transition-all'>Sign Up</button>
            </form>
            <div className="text-sm">
                Already have account,
                <Link to="/login" className="text-[#F7A325]"> Login</Link>
            </div>
        </div>
    );
}

export default SignupForm;
