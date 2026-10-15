import React from 'react';
import { Play } from 'lucide-react';
import avatarPiscando from '../assets/avatar-piscando.svg';

const CardHome = ({ titulo, bgColor, borderColor, onStart, PlayColor}) => {
    return (
        <div className={`${bgColor} ${borderColor} w-full h-30 bg-roxo rounded-2xl border-b-8 px-4 pt-4 flex justify-between overflow-hidden`}>
            <div className="flex flex-col gap-2 pb-4">
                <p className="font-semibold text-sm text-white">{titulo}</p>
                <button onClick={onStart} type="button">
                    <div className="flex items-center bg-white gap-2 px-6 w-fit rounded-xl py-1">
                        <Play className={`w-4 h-4 flex ${PlayColor}`}></Play>
                        <span className={`text-[12px] ${PlayColor} font-medium`}>Iniciar</span>
                    </div>
                </button>
            </div>

            <div className="flex items-end">
                <img src={avatarPiscando} alt="Avatar Piscando" className="w-24 block" />
            </div>
        </div>
    );
};

export default CardHome;