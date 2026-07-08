"use client";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaSpotify, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
export default function Home(){
  const router = useRouter();
  
  const[email, setEmail]= useState('');
  const[senha, setSenha]= useState('');
  const[erro, setErro]= useState('');

  function lidarComLogin(event){
    event.preventDefaut();
    console.log("O usuário tentou entrar...")

    if (email=== '' || senha===''){
      setErro('Por favor, preencha todos os campos!');
      return;
    }
      
  }
  return(
    <main className="flex min-h-screen w-full flex-col justify-center items-center bg-[#7E6037]">
      <div className="flex justify-center items-center h-[580px] w-[928px] rounded-[70px] mt-[20px] mb-[20px] bg-[#C0A279] shadow-[10px_10px_30px_#633c19] overflow-hidden"> 
        <div className="flex flex-col justify-center items-center w-1/2 h-full text-[#633c19] font-dancing">
        <img 
      src="/simbolo_xamego_x.png" 
      alt="Café com espuma" 
      className="w-[150px] h-[150px] inline-block align-middle object-contain"
    />

        <h2 className="mb-8 text-[30px]">Seja bem-vindo</h2>
        <div className="w-full flex flex-col items-center gap-6 mb-6 text-[#C0A279]">
          <input
          type= "text"
          placeholder="Insira seu e-mail ou usuário"
          className="w-100 h-10 bg-[#633c19] placeholder-[#C0A279]  rounded-2xl px-5 outline-none border-none"
          />
          <input
          type= "text"
          placeholder="Insira sua senha"
          className="w-100 h-10 bg-[#633c19] placeholder-[#C0A279] rounded-2xl px-5 outline-none border-none"
          />
          <button className="h-10 w-20 rounded-2xl text-[#C0A279] bg-[#633c19] hover:cursor-pointer hover:shadow-[0px_0px_20px_#633c19] duration-300">Entrar</button>

        </div>
        <p className="text-center mb-1">Para continuar você aceita nossos Termos e Política de privacidade</p>
        <p className="font-dancing text-sm text-center cursor-pointer hover:underline hover:font-bold">
        Não possui uma conta?! Vamos criar
      </p>
        </div>
        <div className="w-1/2 h-full">
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