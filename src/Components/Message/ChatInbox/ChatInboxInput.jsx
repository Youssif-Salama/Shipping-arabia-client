import React, { useState } from 'react';
import { collection, doc, getFirestore, addDoc, updateDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { app } from '../../../firebase.config';
import { jwtDecode } from 'jwt-decode';
import { setRefreshOnSendMessage } from '../../../store/slices/GlobalSlice';

const ChatInboxInput = () => {
    const dispatch = useDispatch();

    const [caughtMessageValue, setMessageValue] = useState('');
    const { Role, _id, Name, Address } = jwtDecode(localStorage.getItem("currentUserToken"));




    const db = getFirestore(app);

    const onClickSendMessage = async () => {
        try {
            const messagesCollection = collection(doc(collection(db, "userChat"), _id), "messages");
            await addDoc(messagesCollection, {
                date: new Date(),
                senderId: _id,
                receiverId: "admin",
                messageValue: caughtMessageValue
            });
            const informationDocument = doc(db, "informationUser", _id);

            const result = await updateDoc(informationDocument, {
                LMessage: caughtMessageValue
            });

        } catch (error) {
            return error;
        }
    };

    return (
        <div className='border sendMessage rounded-xl p-2 flex items-center justify-between bg-white relative z-50'>
            <div className="addFile">
            </div>
            <div className="input w-full">
                <input
                    onChange={(e) => setMessageValue(e.target.value)}
                    type="text"
                    name="message"
                    id="message"
                    className='w-full border-0 outline-none'
                />
            </div>
            <div>
                <button
                    onClick={
                        (e) => {
                            dispatch(setRefreshOnSendMessage(Math.random()))
                            onClickSendMessage()
                            e.target.closest(".sendMessage").querySelector("input").value = "";
                        }
                    }
                    className='bg-[#0a2f351a] py-2 px-6 rounded-lg flex items-center justify-center'>
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatInboxInput;
