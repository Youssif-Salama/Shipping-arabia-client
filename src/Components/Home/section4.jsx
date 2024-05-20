import React from 'react';
import { Slide } from 'react-slideshow-image';
import Section4Svg1 from '../../assets/svgs/Home/section4Svg1';


const Section4 = () => {
    return (
        <div className='py-12'>
            <div className='mb-6 text-center'>

                <div className="head max-md:text-[8vw] text-[51px] w-full text-center font-semibold">
                    Our Clients Feedback
                </div>
                <p>The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep.</p>

            </div>
            <Slide
                autoplay={false}
                onChange={function noRefCheck() { }}
                onStartChange={function noRefCheck() { }}
            >
                <div className='w-full flex items-center justify-center'>
                    <div className="each-slide-effect max-w-[500px] text-center my-6">
                        <div className='w-full flex items-center justify-center mb-6'>
                            <Section4Svg1 />
                        </div>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</p>
                        <div className="mt-8">
                            <p className='font-bold'>Mitchell Marsh</p>
                            <p className='opacity-65 text-sm'>CEO, Bexon Agency</p>
                        </div>
                    </div>
                </div>
            </Slide>

        </div>
    );
}

export default Section4;
