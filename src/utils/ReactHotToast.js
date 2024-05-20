import toast from "react-hot-toast";

export const successToaster = (message) => {
    return toast(message, {
        duration: 4000,
        position: 'top-center',

        // Styling
        style: {
            border: '0',
            borderBottom: '2px solid orange'
        },
        className: '',

        // Custom Icon
        icon: '🧡',

        // Change colors of success/error/loading icon
        iconTheme: {
            primary: '#000',
            secondary: '#fff',
        },

        // Aria
        ariaProps: {
            role: 'status',
            'aria-live': 'polite',
        },
    });
}

export const errorToaster = (errorMessage) => {
    return toast.error(errorMessage, {
        duration: 4000,
        position: 'top-center',

        // Styling
        style: {
            border: '0',
            borderBottom: '2px solid red'
        },
        className: '',

        // Custom Icon
        icon: '❌',

        // Change colors of success/error/loading icon
        iconTheme: {
            primary: '#000',
            secondary: '#fff',
        },

        // Aria
        ariaProps: {
            role: 'status',
            'aria-live': 'polite',
        },
    });
}

