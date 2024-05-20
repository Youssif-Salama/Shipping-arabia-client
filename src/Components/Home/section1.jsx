import React from 'react';
import sec1_img from "../../assets/home-main.png"
import { Link } from 'react-router-dom';
const Section1 = () => {
    return (
        <div className='section1 py-12'>
            <div className='flex items-start justify-between'>
                <div className='flex-1 px-6'>
                    <h1 className='max-md:text-[8vw] text-[51px] text-[#191720] font-bold'>
                        Your Favorite Shipping Delivery Partner
                    </h1>
                    <p>The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep. </p>
                    <Link to="/order">
                        <button className='bg-[#F7A325] py-4 px-12 mt-4 rounded-full text-white font-bold hover:scale-95'>
                            Check My Shippings
                        </button>
                    </Link>
                </div>
                <div className='fex-1 max-md:hidden'>
                    <img src={sec1_img} alt="sec1_img" className='w-[500px] rounded-2xl' />
                </div>
            </div>
        </div>
    );
}

export default Section1;
