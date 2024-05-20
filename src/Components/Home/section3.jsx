import React from 'react';
import Section3Svg1 from '../../assets/svgs/Home/section3Svg1';
import Section3Svg2 from '../../assets/svgs/Home/section3Svg2';
import Section3Svg3 from '../../assets/svgs/Home/section3Svg3';
import Section3Svg4 from '../../assets/svgs/Home/section3Svg4';


const svgsItems = [
    {
        id: "01",
        title: "Contact Us",
        comp: <Section3Svg4 />
    },
    {
        id: "02",
        title: "Check Your Inbox",
        comp: <Section3Svg3 />
    },
    {
        id: "03",
        title: "Check Status",
        comp: <Section3Svg2 />
    },
    {
        id: "04",
        title: "Delivered",
        comp: <Section3Svg1 />
    },
]
const Section3 = () => {
    return (
        <div className='py-12'>
            <div className="head max-md:text-[8vw] text-[51px] w-full text-center font-semibold text-[#0A2F35]">
                How To Order?
            </div>
            <div className='flex items-center justify-between flex-wrap my-12'>
                {
                    svgsItems.map((item, index) => {
                        return (
                            <div className='flex items-center flex-col'>
                                <div className='text-[#F7A325] text-[32px] font-bold'>
                                    {item.id}
                                </div>
                                <div className="card bg-[#fafafa] w-[168px] rounded-2xl gap-6 flex items-center py-8 flex-col" key={index}>
                                    <div className='bg-white rounded-full p-5'>
                                        <div>
                                            {item.comp}
                                        </div>
                                    </div>
                                    <div className='text-[#0A2F35] font-semibold'>{item.title}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Section3;
