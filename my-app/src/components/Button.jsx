import React from 'react';

const Button = ({ children, onClick, type ='submit', variant = 'primary', className= '' }) => {
    const style = "py-3.5 px-6 rounded-full font-medium tracking-wider shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white"
    };

    return (
        <button type={type} onClick={onClick} className={`${style} ${variants[variant] || variants.primary} ${className}`}>
            {children}
        </button>
    );
};

export default Button;