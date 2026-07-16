"use client"
import { useRouter } from "next/navigation";
import { useState } from 'react';
import Image from "next/image"; // Mantido caso você queira usar o componente Image do Next.js
import Link from "next/link";
// Importações de ícones removidas, pois não são usadas no código fornecido

export default function LoginPage() {
  const router = useRouter();
  
  const [username, setUsername] = useState(''); // Corrigido para 'username' para consistência
  const [password, setPassword] = useState(''); // Corrigido para 'password' para consistência e segurança
  const [error, setError] = useState(''); // Corrigido para 'error' para consistência

  const handleLogin = async (event) => {
    event.preventDefault(); // Previne o recarregamento da página ao submeter o formulário
    setError(''); // Limpa mensagens de erro anteriores

    // --- Lógica de Autenticação com Backend (Exemplo) ---
    // Aqui é onde você faria a chamada para o seu backend para verificar as credenciais
    try {
      const response = await fetch('/api/login', { // Substitua '/api/login' pela sua rota de API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Autenticação bem-sucedida
        console.log("Login bem-sucedido!", data);
        // Armazene o token de autenticação ou informações do usuário se necessário
        // Ex: localStorage.setItem('token', data.token);
        router.push('/menu'); // Redireciona para a página de menu
      } else {
        // Autenticação falhou
        setError(data.message || "Usuário ou senha incorretos! Tente novamente.");
      }
    } catch (err) {
      console.error("Erro ao tentar fazer login:", err);
      setError("Senha ou usuário inválidos. Tente novamente mais tarde.");
    }
    
  };

  return (
    <main className="flex min-h-screen w-full flex-col justify-center items-center bg-[#7E6037] p-4 bg-[url('/fundo-lg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col md:flex-row justify-center items-center w-full md:max-w-4xl lg:max-w-5xl min-h-[580px] md:h-auto rounded-3xl md:rounded-[70px] my-8 bg-[#C0A279] shadow-[0px_0px_10px_#633c19] overflow-hidden"> 
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-full p-4 md:p-8 text-[#633c19] font-slab">
          <img 
            src="/simbolo_xamego_x.png" 
            alt="Café com espuma" 
            className="w-[150px] h-[150px] inline-block align-middle object-contain"
          />

          <h2 className="mb-8 text-[30px]">Seja bem-vindo!</h2>
          
          {/* Formulário para melhor semântica e tratamento de submissão */}
          <form onSubmit={handleLogin} className="w-full flex flex-col items-center gap-6 mb-6 text-[#C0A279]">
            <input
              type="text"
              placeholder="Insira seu e-mail ou usuário"
              className="w-full h-10 bg-[#633c19] placeholder-[#C0A279] rounded-2xl px-5 outline-none border-none focus:bg-[#e1c397] focus:text-[#663c19]"
              value={username} // Conecta o input ao estado
              onChange={(e) => setUsername(e.target.value)} // Atualiza o estado ao digitar
            />
            <input
              type="password" // Alterado para 'password' para ocultar a senha
              placeholder="Insira sua senha"
              className="w-full h-10 bg-[#633c19] placeholder-[#C0A279] rounded-2xl px-5 outline-none border-none focus:bg-[#e1c397] focus:text-[#663c19]"
              value={password} // Conecta o input ao estado
              onChange={(e) => setPassword(e.target.value)} // Atualiza o estado ao digitar
            />
            {error && <p className="text-red-500 text-sm">{error}</p>} {/* Exibe mensagem de erro */}
            <button type="submit" className="h-10 w-20 rounded-2xl text-[#C0A279] bg-[#633c19] hover:cursor-pointer hover:shadow-[0px_0px_20px_#633c19] duration-300">Entrar</button>
          </form>

          <p className="text-center mb-1">Para continuar você aceita nossos Termos e Política de privacidade</p>
          <Link href="/cadastro" className="font-slab text-sm text-center  cursor-pointer hover:underline hover:font-bold">
            Não possui uma conta?! Vamos criar
          </Link>
        </div>
        <div className="hidden md:block w-full md:w-1/2 h-full">
          <img 
            src="/login.jpg" 
            alt="Dois cafés com espuma na mesa" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
