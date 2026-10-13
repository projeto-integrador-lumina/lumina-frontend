import React, { useState } from 'react';
import BottomNav from '../components/BottomNav';
import CardHome from '../components/CardHome';

const Home = () => {
    return (
    <div>
        <div className="p-8 flex flex-col gap-4">
            <CardHome titulo="Treinamento de Fonema" bgColor="bg-secondary" borderColor="border-b-secondary-dark" onStart={() => console.log('Iniciando Treinamento...')} PlayColor="text-secondary" />

            <CardHome titulo="Missão do dia" bgColor="bg-quaternary" borderColor="border-b-quaternary-dark" onStart={() => console.log('Iniciando Missão do dia...')} PlayColor="text-quaternary" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20">
            <BottomNav />
        </div>
    </div>
    );
};

export default Home;