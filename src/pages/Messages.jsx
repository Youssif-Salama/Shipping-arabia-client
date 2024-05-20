import { doc, getFirestore, setDoc } from "firebase/firestore"
import ChatHead from "../Components/Message/ChatHead"
import ChatInbox from "../Components/Message/ChatInbox/ChatInbox"
import { app } from "../firebase.config"
import { useEffect } from "react"
import { jwtDecode } from "jwt-decode"

const Messages = () => {
    const { Role, _id, Name, Address } = jwtDecode(localStorage.getItem("currentUserToken"));
    const db = getFirestore(app);
    const addNewMessageDataToFireBaseInformationCollection = async () => {
        try {
            const informationDocument = doc(db, "informationUser", _id);
            const result = await setDoc(informationDocument, {
                id: _id,
                role: Role,
                name: Name,
                address: Address.Governorate
            });
            result && console.log(result);
        }
        catch (error) {
            return error;
        }
    }

    useEffect(() => {
        addNewMessageDataToFireBaseInformationCollection()
    }, [])
    return (
        <div className="w-[80%] m-auto py-12">
            <div className="border rounded-xl pt-2">
                <ChatHead />
                <hr />
                <ChatInbox />
            </div>
        </div>
    )
}

export default Messages



/*
const clickedRowData = {
                                    id: item?._id,
                                    name: item?.Name,
                                    role: item?.Role,
                                    address: item?.Address
                                }
*/
