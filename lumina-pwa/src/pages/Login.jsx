import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/LogoLola";
import InputIcon from "../components/InputIcon";
import Button from "../components/Button";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [manterConectado, setManterConectado] = useState(false);

  //muda de rota sem precisar recarregar o navegador
  const navigate = useNavigate();

  const handleSumit = (e) => {
    e.prevetDefault(); //processa em segundo plano o envio das informações
    console.log({ email, senha, manterConectado });

    //redireciona para a página inicial do jogo
    navigate("/home");
  };

  return (
    <div className="flex-1 flex flex-col bg-white relative min-h-full">
      <div className="h-44 flex items-center justify-center pt-4 bg-secondary">
        <Logo className="h-24" />
      </div>

      <div className="flex-1 bg-white rounded-t-[32px] px-6 pt-8 pb-6 flex flex-col justify-start -mt-4 z-10 shadow-lg">
        <h1 className="text-2xl font-bold text-primary text-center tracking-wider mb-8">
          LOGIN
        </h1>

        <form onSubmit={handleSumit} className="flex flex-col gap-4">
          <label for="usuario" class="sr-only">
            Usuário
          </label>
          <InputIcon
            icon=""
            type="text"
            placeholder="Digite o nome do seu usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          ></InputIcon>

          <label for="senha" class="sr-only">
            Senha
          </label>
          <InputIcon
            icon=""
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
              className="w-4 h-4 accent-coral rounded-full cursor-pointer"
            />
            <span>Manter-me conectado</span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
