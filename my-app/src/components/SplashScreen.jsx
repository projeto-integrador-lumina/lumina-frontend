"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import LogoNuvem from "@/assets/logo-nuvem.svg";
import LogoLetreiro from "@/assets/logo-letreiro.svg";

const SplashScreen = ({ onFinish }) => {
  const [Visivel, setVisivel] = useState(true);

  //a splash fica visível durante 2.5s antes de iniciar a transição de sair da tela
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisivel(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const elastico = {
    hidden: {
      opacity: 0,
      y: -600,
      scaleY: 1,
      scaleX: 0.8,
    },
    visible: {
      opacity: 1,
      y: [-600, 25, -25, 3, 0],
      scaleY: [1, 1, 1.1, 0.98, 1],
      scaleX: [0.8, 1.2, 0.9, 1.02, 1],
      transition: {
        duration: 1.2,
        ease: [0.25, 2, 0.5, 1],
      },
    },
  };

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {Visivel && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0 }} 
          className="absolute inset-0 z-50 w-full h-full bg-primary flex flex-col justify-center items-center overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="flex justify-center items-center"
          >
            <Image
              src={LogoNuvem}
              alt="Logo Nuvem Lolá"
              priority
              className="w-auto h-auto max-w-[280px]"
            />
          </motion.div>
          <motion.div
            variants={elastico}
            initial="hidden"
            animate="visible"
            className="absolute flex justify-center items-center z-10"
          >
            <Image
              src={LogoLetreiro}
              alt="Lolá"
              priority
              className="w-auto h-auto max-w-[200px]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
