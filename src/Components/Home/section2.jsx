import React from 'react';
import Section2Svg1 from '../../assets/svgs/Home/section2Svg1';
import Section1Svg2 from '../../assets/svgs/Home/section1Svg2';
import Section2cvg3 from '../../assets/svgs/Home/section2cvg3';
import Section2Svg4 from '../../assets/svgs/Home/section2Svg4';
import Section2Svg5 from '../../assets/svgs/Home/section2Svg5';
import Section2Cvg6 from '../../assets/svgs/Home/section2Cvg6';

const svgsItems1 = [
    {
        title: "Shipping",
        comp: <Section2Svg1 />
    },
    {
        title: "Time",
        comp: <Section1Svg2 />
    },
]
const svgsItems2 = [
    {
        title: "Fats",
        comp: <Section2Cvg6 />
    },
    {
        title: "24 Hours",
        comp: <Section2Svg5 />
    },
]
const Section2 = () => {
    return (
        <div className='py-12'>
            <div className="head max-md:text-[8vw] text-[51px] w-full text-center font-semibold">
                MORE THAN <span className='text-[#F7A325]'>10,000</span> Shipping <br /> ORDERs!
            </div>
            <p className='w-full text-center mt-4'>Welcome to The Biggest Network of Food Ordering & Delivery</p>
            <div className='mt-10 flex items-start justify-between flex-wrap'>
                <div className='flex items-center gap-6 flex-wrap my-6'>
                    {
                        svgsItems1.map((item, index) => {
                            return <div className="card bg-[#fafafa] w-[168px] rounded-2xl gap-6 flex items-center py-8 flex-col" key={index}>
                                <div className='bg-white rounded-full p-5'>
                                    <div>
                                        {item.comp}
                                    </div>
                                </div>
                                <div className='text-[#0A2F35] font-semibold'>{item.title}</div>
                            </div>
                        })
                    }
                </div>
                <div className='bg-[#fafafa] p-6 rounded-2xl my-6'>
                    <div className="tag text-[#323232] font-medium">
                        Find <span className='text-[#F7A325]'>deals</span>, <span className='text-[#009B00]'>free shipping</span>, and more from our Company partners.
                    </div>
                    <div className='flex items-center justify-end mt-4'>
                        <Section2cvg3 />
                    </div>
                </div>
            </div>
            <div className='mt-10 flex items-start justify-between flex-wrap'>
                <div className='bg-[#fafafa] p-6 rounded-2xl my-6'>
                    <div className='mt-4'>
                        <Section2Svg4 />
                    </div>
                    <p className="tag text-[#323232] font-medium mt-4 max-w-[500px]">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                    </p>
                </div>
                <div className='flex items-center gap-6 flex-wrap my-6'>
                    {
                        svgsItems2.map((item, index) => {
                            return <div className="card bg-[#fafafa] w-[168px] rounded-2xl gap-6 flex items-center py-8 flex-col" key={index}>
                                <div className='bg-white rounded-full p-5'>
                                    <div>
                                        {item.comp}
                                    </div>
                                </div>
                                <div className='text-[#0A2F35] font-semibold'>{item.title}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Section2;
