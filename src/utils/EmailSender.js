import emailjs from '@emailjs/browser';
import { errorToaster, successToaster } from './ReactHotToast';

export const sendEmail = (form) => {
    emailjs
        .sendForm(import.meta.env.VITE_APP_email_sender_service, import.meta.env.VITE_APP_email_sender_service_template, form.current, {
            publicKey: import.meta.env.VITE_APP_email_sender_key,
        })
        .then(
            () => {
                successToaster("Email Was Sent Successfully !");
            },
            (error) => {
                errorToaster("Fail To Sent !");
            },
        );
};