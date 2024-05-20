import React from 'react';

const Input = ({ name, id, value, onChange, placeholder, type }) => {
    return (
        <div className="flex flex-col my-4 w-full">
            <label htmlFor={name} className='mb-2'>{placeholder}</label>
            <input
                className="rounded-lg outline-0 hover:border-[#916BBF] border p-4 w-full focus:border-[#916BBF]"
                placeholder={placeholder}
                type={type} name={name} id={id} onChange={onChange} value={value} required />
        </div>
    );
}

export default Input;
