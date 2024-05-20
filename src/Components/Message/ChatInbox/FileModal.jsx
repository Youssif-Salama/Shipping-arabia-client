import { Button, Modal } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';

const FileModal = () => {
    const [openModal, setOpenModal] = useState(false);
    const { messageImagesValue } = useSelector((state) => state.GlobalReducer);

    useEffect(() => {
        messageImagesValue && setOpenModal(true);
    }, [messageImagesValue])
    return (
        <div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        {
                            messageImagesValue && <img src={URL.createObjectURL(messageImagesValue)} alt="img" />
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        setOpenModal(false);
                    }} color="green"
                    >accept</Button>
                    <Button color="red" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default FileModal;
