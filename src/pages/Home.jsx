import React from 'react';
import Section1 from '../Components/Home/section1';
import Section2 from '../Components/Home/section2';
import Section3 from '../Components/Home/section3';
import Section4 from '../Components/Home/section4';
import Section5 from '../Components/Home/section5';

const Home = () => {
    return (
        <div className='w-[80%] m-auto'>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </div>
    );
}

export default Home;
