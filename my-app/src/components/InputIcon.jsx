import React from 'react';

const InputIcon = ({ icon, type = 'text', placeholder, value, onChange }) => {
    return (
        <div className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-70 text-lg">
                {icon}
            </span>

        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="w-full bg-gray-100 text-text-main placeholder:text-gray-400 pl-12 pr-4 py-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm">
        </input>

    </div>
    );
};

export default InputIcon;