"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaSpotify, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
export default function Home(){
  const router = useRouter();
  function irParaHome(){
    console.log("Usuário clicou, preparando para redirecionar...");
    // Encaminha para a página de menu
    router.push('/');
  }
  function irParaMenu(){
    console.log("Usuário clicou, preparando para redirecionar...");
    // Encaminha para a página de menu
    router.push('/menu');
  }
  function irParaPromocao(){
    alert("Você clicou no botão")
    
  }
  function irParaOndeEstamos(){
    alert("Você clicou no botão")
    
  }
  function irParaSobre(){
    alert("Você clicou no botão")
    
  }
  function irParaSignUp(){
    console.log("Usuário clicou, preparando para redirecionar...");
    router.push('/logIn_singUp');
    
  }
  function irParaLogIn(){
    console.log("Usuário clicou, preparando para redirecionar...");
    router.push('/logIn_singUp');
    
  }
  const patrocinioLista = Array(9).fill("Patrocínio");
  return(
    <main className="flex min-h-screen w-full flex-col bg-[#E1C397]">
      <nav className="flex w-full bg-[#C0A279] justify-between p-2 items-center shadow-md">
        <div className="ml-15">
          <Image 
          onClick={irParaHome}
          src="/logo_xamego_rustico (1).png" 
          alt="logo Cafeteria Xâmego" 
          width={82} 
          height={82} 
          className="cursor-pointer"
        />
        </div>
        <div className="flex gap-10 mr-1 items-center font-dancing text-2xl">
          <button onClick={irParaHome}  className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300">Home</button>
          <button onClick={irParaMenu} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300">Menu</button>
          <button onClick={irParaPromocao} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300">Promoção</button>
          <button onClick={irParaOndeEstamos} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300">Onde estamos?</button>
          <button onClick={irParaSobre} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300">Sobre</button>
        </div>
        <div  className="flex gap-10 mr-8 items-center font-dancing text-2xl">
          <button onClick={irParaLogIn} className="text-[#663c19] border-2 rounded-2xl px-6 py-2 cursor-pointer hover:bg-[#663c19] hover:text-[#c0a279] duration-300">Log In</button>
          <button onClick={irParaSignUp} className=" bg-[#663c19] text-[#C0A279] px-6 py-2 rounded-2xl cursor-pointer hover:bg-[#C0A279] hover:text-[#663c19] duration-300">Sing Up</button>
        </div>
      </nav>



      
      <footer className="bg-[#C0A279] pt-12 pb-6 px-6 md:px-16">
  {/* O container principal agora vai distribuir apenas DOIS blocos principais: a esquerda (Logo + Links) e a direita (Redes) */}
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
    
    {/* COLUNA DA ESQUERDA: Agrupa a Logo E os Links embaixo dela */}
    <div className="flex flex-col items-start gap-6"> {/* Aumentei o gap para 6 para dar um espaço elegante entre a logo e o primeiro link */}
      
      <Image
        onClick={irParaHome}
        className="cursor-pointer"
        src="/logo_xamego_rustico (1).png"
        alt="logo Cafeteria Xãmego"
        width={82}
        height={82}
      />

      {/* A DIV DOS LINKS FOI MOVIDA PARA CÁ (Dentro da div da logo) */}
      {/* Corrigido também de 'herf' para 'href' */}
      <div className="text-[#663c19] flex flex-col gap-2 font-slab">
        <a href="#" className="hover:underline duration-300 cursor-pointer hover:text-[#7e6037]">Home</a>
        <a href="#" className="hover:underline duration-300 cursor-pointer hover:text-[#7e6037]">Sobre</a>
        <a href="#" className="hover:underline duration-300 cursor-pointer hover:text-[#7e6037]">Entre em contato</a>
        <a href="#" className="hover:underline duration-300 cursor-pointer hover:text-[#7e6037]">Política e privacidade</a>
        <a href="#" className="hover:underline duration-300 cursor-pointer hover:text-[#7e6037]">Termos de uso</a>
      </div>

    </div>

    {/* COLUNA DA DIREITA: Redes Sociais */}
    <div className="flex flex-col items-start md:items-end gap-3">
      <span className="text-[#663c19] font-semibold">Nos siga nas redes sociais:</span>
      <div className="flex flex-row gap-10 text-[#663c19]">
        <Link href="https://instagram.com" target="_blank">
        <FaInstagram size={40} color="#663c19" /></Link>
        <Link href="https://facebook.com" target="_blank">
        <FaFacebook size={40} color="#663c19" /></Link>
        <Link href="https://spotify.com" target="_blank">
        <FaSpotify size={40} color="#663c19" /></Link>
        <Link href="https://whatsapp.com" target="_blank">
        <FaWhatsapp size={40} color="#663c19" /></Link>
      </div>
    </div>

  </div>
  </footer> 
    </main>
  );
}