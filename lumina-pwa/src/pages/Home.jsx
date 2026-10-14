import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import CardHome from "../components/CardHome";
import Coins from "../components/Coins";
import ImgHome from "../assets/bg-home.svg";
import Bell from '../assets/icons/notif.svg';
import Lola from '../assets/lola.svg';
import DaysWeek from "../components/DaysWeek";

const Home = () => {
  return (
    <div className="p-8" style={{ backgroundImage: `url(${ImgHome})` }}>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 justify-center items-center">
          <div className="bg-secondary w-14 h-14 rounded-full flex justify-center items-center border-5 border-white">
            <p class="text-2xl font-bold text-white">1</p>
          </div>
          <Coins />
        </div>
        <div className="bg-primary p-2 rounded-full">
            <img src={Bell} alt="Notificação"/>
        </div>
      </div>

      <div className="my-4">
        <img src={Lola} alt="Avatar Lola" className="max-h-40"/>
      </div>


      <div className="py-4 flex flex-col gap-4">
        <CardHome
          titulo="Treinamento de Fonema"
          bgColor="bg-secondary"
          borderColor="border-b-secondary-dark"
          onStart={() => console.log("Iniciando Treinamento...")}
          PlayColor="text-secondary"
        />

        <CardHome
          titulo="Missão do dia"
          bgColor="bg-quaternary"
          borderColor="border-b-quaternary-dark"
          onStart={() => console.log("Iniciando Missão do dia...")}
          PlayColor="text-quaternary"
        />
      </div>

      <div className="w-full bg-primary rounded-2xl border-b-primary-dark border-b-8 p-4 flex flex-col gap-4">
                <div className="flex justify-between">
                    <p className="font-semibold text-lg text-white">Sua semana</p>
                    <span className="flex justify-between items-center bg-white rounded-full px-2 gap-2">
                        <img src="img/icons/fire.svg" class="w-5"/>
                        <p className="text-[12px]">2 dias na sequência</p>
                    </span>
                </div>
                <div className="grid grid-cols-7 px-2">
                    <DaysWeek children="SEG"/>
                </div>
            </div>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <BottomNav />
      </div>
    </div>
  );
};

export default Home;
