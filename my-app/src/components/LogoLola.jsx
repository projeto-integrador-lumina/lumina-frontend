"use client";
import React from 'react';
import Image from 'next/image';
import LogoLola from "@/assets/logo-variante-salmao.svg";

const Logo = ({ className }) => {
    return (
        <Image src={LogoLola} alt="Logo Lolá" className={`${className} object-contain`}/>
    );
};

export default Logo;