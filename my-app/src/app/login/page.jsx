"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/LogoLola";
import InputIcon from "@/components/InputIcon";
import Button from "@/components/Button";
import { User, Lock } from 'lucide-react';

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [manterConectado, setManterConectado] = useState(false);

  //muda de rota sem precisar recarregar o navegador
  const router = useRouter();

  const handleSumit = (e) => {
    e.preventDefault(); //processa em segundo plano o envio das informações
    console.log({ usuario, senha, manterConectado });

    //redireciona para a página inicial do jogo
    router.push("/home");
  };

  return (
    <div className="flex-1 flex flex-col bg-white relative min-h-full">
      <div className="h-44 flex items-center justify-center pt-4 bg-secondary">
        <Logo className="h-24" />
      </div>

      <div className="flex-1 bg-white rounded-t-[32px] px-6 pt-8 pb-6 flex flex-col justify-start -mt-4 z-10 shadow-lg">
        <h1 className="text-2xl font-bold text-primary text-center mb-8">
          Login
        </h1>

        <form onSubmit={handleSumit} className="flex flex-col gap-4">
          <InputIcon
            icon={<User className="w-5 h-5 text-primary"/>}
            type="text"
            placeholder="Digite o nome do seu usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          ></InputIcon>

          <InputIcon
            icon={<Lock className="w-5 h-5 text-primary"/>}
            type="password"
            placeholder="Digite a sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          ></InputIcon>

          <Button>Entrar</Button>

          <label className="flex items-center gap-2 mt-2 cursor-pointer text-xs text-text-main font-medium select-none px-1">
            <input
              type="checkbox"
              checked={manterConectado}
              onChange={(e) => setManterConectado(e.target.checked)}
              className="w-4 h-4 accent-coral rounded-full"
            />
            <span>Manter-me conectado</span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
