import React from 'react';
import ChatInboxHead from './ChatInboxHead';
import ChatInboxMessages from './ChatInboxMessages/ChatInboxMessages';
import ChatInboxInput from './ChatInboxInput';


const ChatInbox = () => {
    return (
        <div className='relative'>
            <div>
                <div className='h-[calc(64.5vh-25px)] max-md:h-[calc(64.5vh-45px)]'>
                    <ChatInboxMessages />
                </div>
                <div className='z-50 relative'>
                    <ChatInboxInput />
                </div>
            </div >
        </div>
    );
}

export default ChatInbox;
