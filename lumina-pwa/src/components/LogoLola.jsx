import React from 'react';
import LogoLola from "../assets/logo-nuvem.svg";

const Logo = ({ className }) => {
    return (
        <img src={LogoLola} alt="Logo Lolá" className={`${className} object-contain`}></img>
    );
};

export default Logo;