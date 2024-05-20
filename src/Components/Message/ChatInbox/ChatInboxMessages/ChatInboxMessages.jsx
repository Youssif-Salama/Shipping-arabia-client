import React, { useEffect, useState } from 'react';
import MessageForm from './MessageForm';
import { collection, getDocs, getFirestore, onSnapshot, orderBy, query } from 'firebase/firestore';
import { app } from '../../../../firebase.config';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

const ChatInboxMessages = ({ data }) => {



    const db = getFirestore(app);
    const { refreshOnSendMessage } = useSelector((state) => state.GlobalReducer);
    const { Role, _id, Name, Address } = jwtDecode(localStorage.getItem("currentUserToken"));

    const [messages, setMessages] = useState([]);

    const getCurrentMessages = async (userId) => {
        try {
            // const userMessagesRef = collection(db, `userChat/${userId}/messages`);
            // const sortedQuery = query(userMessagesRef, orderBy('date', 'asc'));
            // const querySnapshot = await getDocs(sortedQuery);

            // const messagesArray = [];
            // querySnapshot.forEach((doc) => {
            //     messagesArray.push({ id: doc.id, ...doc.data() });
            // });
            if (_id) {
                const userMessagesRef = collection(db, `userChat/${_id}/messages`);
                const sortedQuery = query(userMessagesRef, orderBy('date', 'asc'));

                const unsubscribe = onSnapshot(sortedQuery, (querySnapshot) => {
                    const messagesArray = [];
                    querySnapshot.forEach((doc) => {
                        messagesArray.push({ id: doc.id, ...doc.data() });
                    });
                    setMessages(messagesArray);
                });

                // Cleanup the listener on component unmount
                return () => unsubscribe();
            }

            setMessages(messagesArray);
        } catch (error) {
            console.error("Error getting documents: ", error);
        }
    };

    useEffect(() => {
        if (_id) {
            getCurrentMessages(_id);
        }
    }, [_id, refreshOnSendMessage]);


    return (
        <div className='max-h-[65vh] overflow-y-scroll no-scrollbar p-4 pb-16'>

            {
                messages && messages?.map((item, index) => {
                    return (
                        <div key={index}>
                            <MessageForm data={item} />
                        </div>
                    );
                })
            }

        </div>
    );
}

export default ChatInboxMessages;