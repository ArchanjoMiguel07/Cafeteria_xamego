"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaSpotify, FaTwitter, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Home() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  function irParaHome(){
    console.log("Usuário clicou, preparando para redirecionar...");
    router.push('/');
    setIsMenuOpen(false); // Close menu on navigation
  }
  function irParaMenu(){
    console.log("Usuário clicou, preparando para redirecionar...");
    router.push('/menu');
    setIsMenuOpen(false); // Close menu on navigation
  }
  function irParaOndeEstamos(){
    console.log("Usuário clicou, preparando para redirecionar...")
    router.push('/localizacao');
    setIsMenuOpen(false); // Close menu on navigation
  }
  function irParaSobre(){
    alert("Você clicou no botão")
    setIsMenuOpen(false); // Close menu on navigation
  }
  function irParaSignUp(){
    console.log("Usuário clicou, preparando para redirecionar...");
    router.push('/logIn_singUp');
    setIsMenuOpen(false); // Close menu on navigation
  }
  function irParaLogIn(){
    console.log("Usuário clicou, preparando para redirecionar...");
    router.push('/logIn_singUp');
    setIsMenuOpen(false); // Close menu on navigation
  }
  const patrocinioLista = Array(9).fill("Patrocínio");

  return (
    <main className="flex min-h-screen w-full flex-col bg-[#E1C397]">
      <nav className="flex w-full bg-[#C0A279] justify-between p-2 items-center shadow-md relative">
        <div className="ml-4 md:ml-15">
          <Image
            onClick={irParaHome}
            src="/logo_xamego_rustico (1).png"
            alt="logo Cafeteria Xâmego"
            width={82}
            height={82}
            className="cursor-pointer"
          />
        </div>

        {/* Hamburger menu icon for mobile */}
        <div className="md:hidden flex items-center mr-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#663c19] focus:outline-none">
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-10 mr-1 items-center font-slab text-2xl">
          <button onClick={irParaHome} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300">Home</button>
          <button onClick={irParaMenu} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300">Menu</button>
          <button onClick={irParaOndeEstamos} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300">Onde estamos?</button>
          <button onClick={irParaSobre} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300">Sobre</button>
        </div>
        <div className="hidden md:flex gap-10 mr-8 items-center font-dancing text-2xl">
          <button onClick={irParaLogIn} className="text-[#663c19] border-2 rounded-2xl px-6 py-2 cursor-pointer hover:bg-[#663c19] hover:text-[#c0a279] duration-300">Log In</button>
          <button onClick={irParaSignUp} className=" bg-[#663c19] text-[#C0A279] px-6 py-2 rounded-2xl cursor-pointer hover:bg-[#C0A279] hover:text-[#663c19] duration-300">Sign Up</button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#C0A279] shadow-lg flex flex-col items-center py-4 z-20">
            <button onClick={irParaHome} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300 py-2">Home</button>
            <button onClick={irParaMenu} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300 py-2">Menu</button>
            <button onClick={irParaOndeEstamos} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300 py-2">Onde estamos?</button>
            <button onClick={irParaSobre} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300 py-2">Sobre</button>
            <div className="flex flex-col gap-4 mt-4">
              <button onClick={irParaLogIn} className="text-[#663c19] border-2 rounded-2xl px-6 py-2 cursor-pointer hover:bg-[#663c19] hover:text-[#c0a279] duration-300">Log In</button>
              <button onClick={irParaSignUp} className=" bg-[#663c19] text-[#C0A279] px-6 py-2 rounded-2xl cursor-pointer hover:bg-[#C0A279] hover:text-[#663c19] duration-300">Sign Up</button>
            </div>
          </div>
        )}
      </nav>

      <footer className="bg-[#C0A279] pt-8 pb-4 px-4 md:pt-12 md:pb-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              onClick={irParaHome}
              className="cursor-pointer"
              src="/logo_xamego_rustico (1).png"
              alt="logo Cafeteria Xãmego"
              width={70}
              height={70}
            />
            <div className="text-[#663c19] flex flex-col items-center md:items-start gap-2 font-slab text-sm md:text-base">
              <a href="#" className="hover:underline duration-300 cursor-pointer hover:text-[#7e6037]">Home</a>
              <a href="#" className="hover:underline duration-300 cursor-pointer hover:text-[#7e6037]">Sobre</a>
              <a href="#" className="hover:underline duration-300 cursor-pointer hover:text-[#7e6037]">Entre em contato</a>
              <a href="#" className="hover:underline duration-300 cursor-pointer hover:text-[#7e6037]">Política e privacidade</a>
              <a href="#" className="hover:underline duration-300 cursor-pointer hover:text-[#7e6037]">Termos de uso</a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-[#663c19] font-semibold text-base md:text-lg">Nos siga nas redes sociais:</span>
            <div className="flex flex-row gap-6 md:gap-10 text-[#663c19]">
              <Link href="https://instagram.com" target="_blank">
                <FaInstagram className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" color="#663c19" />
              </Link>

              <Link href="https://facebook.com" target="_blank">
                <FaFacebook className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" color="#663c19" />
              </Link>

              <Link href="https://spotify.com" target="_blank">
                <FaSpotify className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" color="#663c19" />
              </Link>

              <Link href="https://whatsapp.com" target="_blank">
                <FaWhatsapp className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" color="#663c19" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
