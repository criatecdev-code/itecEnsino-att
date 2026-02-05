
import React from 'react';

const WhatsAppButton: React.FC = () => {
    const phoneNumber = '5524974003287'; // Number from Footer
    const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os cursos.'); // Default message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 group"
            aria-label="Fale conosco no WhatsApp"
        >
            {/* Pulse Effect Ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></span>
            {/* Tooltip */}
            <span className="absolute right-full mr-3 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Fale Conosco
            </span>

            {/* Icon */}
            <svg
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="currentColor"
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.45 17.5 2 12.04 2ZM12.05 19.81C10.59 19.81 9.15 19.42 7.87 18.66L7.57 18.48L4.46 19.3L5.29 16.26L5.1 15.95C4.26 14.61 3.82 13.06 3.82 11.91C3.82 7.38 7.51 3.69 12.05 3.69C16.58 3.69 20.27 7.38 20.27 11.91C20.27 16.44 16.58 19.81 12.05 19.81ZM16.32 13.98C16.09 13.86 14.95 13.3 14.73 13.22C14.52 13.14 14.36 13.1 14.2 13.34C14.04 13.58 13.59 14.11 13.43 14.27C13.28 14.43 13.12 14.45 12.89 14.33C12.66 14.21 11.92 13.97 11.04 13.19C10.36 12.58 9.9 11.84 9.77 11.61C9.64 11.38 9.76 11.26 9.87 11.15C9.97 11.05 10.09 10.89 10.21 10.75C10.33 10.61 10.37 10.51 10.45 10.35C10.53 10.19 10.49 10.05 10.43 9.93C10.37 9.81 9.89 8.64 9.69 8.16C9.5 7.7 9.31 7.76 9.16 7.76C9.02 7.76 8.86 7.76 8.7 7.76C8.54 7.76 8.28 7.82 8.06 8.06C7.84 8.3 7.22 8.88 7.22 10.06C7.22 11.24 8.08 12.38 8.2 12.54C8.32 12.7 9.98 15.26 12.53 16.36C14.59 17.25 15.01 17.07 15.46 17.03C15.91 16.99 16.85 16.49 17.05 15.93C17.25 15.37 17.25 14.89 17.18 14.78C17.12 14.66 16.96 14.6 16.73 14.48H16.32V13.98Z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;
