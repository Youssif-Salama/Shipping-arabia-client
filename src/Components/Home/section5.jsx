import React, { useRef } from 'react';
import Input from '../../common/Input';
import { sendEmail } from '../../utils/EmailSender';

const Section5 = () => {

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(form);
    };


    return (
        <div className='py-12'>
            <div className="head max-md:text-[8vw] text-[51px] w-full text-center font-semibold">
                Contact <span className='text-[#F7A325]'>Us</span>
            </div>
            <form ref={form} onSubmit={handleSubmit}>
                <div className='flex items-center justify-between gap-4 max-md:flex-col'>
                    <Input placeholder="User Name"
                        name="UserName"
                        id="UserName"
                        type="text"

                    />
                    <Input placeholder="Email"
                        name="Email"
                        id="Email"
                        type="text"

                    />
                </div>
                <Input placeholder="Telephone"
                    name="Telephone"
                    id="Telephone"
                    type="text"

                />
                <textarea name="Details" id="Details"
                    className="rounded-lg outline-0 hover:border-[#916BBF] border p-4 w-full focus:border-[#916BBF]"
                    placeholder='More Details'
                    rows="12"
                ></textarea>
                <button type="submit" className='font-bold text-white py-4 px-12 my-6 rounded-xl hover:scale-95 bg-[#F7A325] w-full transition-all'>Sen a Request</button>
            </form>
        </div>
    );
}

export default Section5;
