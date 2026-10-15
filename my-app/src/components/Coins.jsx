import React from 'react';
import Coin from  '../assets/icons/coin.svg';

const Coins = () => {
    return (
        <div className="flex bg-primary px-2 py-1 rounded-full gap-2">
            <img src={Coin} alt="Moeda"/>
            <span className="text-white font-semibold">100</span>
        </div>
    );
};

export default Coins;