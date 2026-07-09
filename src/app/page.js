"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaSpotify, FaTwitter, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useState } from "react"; // Import useState

export default function Home(){
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
  return(
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
          <button onClick={irParaHome}  className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300">Home</button>
          <button onClick={irParaMenu} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300">Menu</button>
          <button onClick={irParaOndeEstamos} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300">Onde estamos?</button>
          <button onClick={irParaSobre} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300">Sobre</button>
        </div>
        <div  className="hidden md:flex gap-10 mr-8 items-center font-dancing text-2xl">
          <button onClick={irParaLogIn} className="text-[#663c19] border-2 rounded-2xl px-6 py-2 cursor-pointer hover:bg-[#663c19] hover:text-[#c0a279] duration-300">Log In</button>
          <button onClick={irParaSignUp} className=" bg-[#663c19] text-[#C0A279] px-6 py-2 rounded-2xl cursor-pointer hover:bg-[#C0A279] hover:text-[#663c19] duration-300">Sing Up</button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#C0A279] shadow-lg flex flex-col items-center py-4 z-20">
            <button onClick={irParaHome}  className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300 py-2">Home</button>
            <button onClick={irParaMenu} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300 py-2">Menu</button>
            <button onClick={irParaOndeEstamos} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300 py-2">Onde estamos?</button>
            <button onClick={irParaSobre} className="text-[#663c19] cursor-pointer hover:text-[#7e6037] duration-300 py-2">Sobre</button>
            <div className="flex flex-col gap-4 mt-4">
              <button onClick={irParaLogIn} className="text-[#663c19] border-2 rounded-2xl px-6 py-2 cursor-pointer hover:bg-[#663c19] hover:text-[#c0a279] duration-300">Log In</button>
              <button onClick={irParaSignUp} className=" bg-[#663c19] text-[#C0A279] px-6 py-2 rounded-2xl cursor-pointer hover:bg-[#C0A279] hover:text-[#663c19] duration-300">Sing Up</button>
            </div>
          </div>
        )}
      </nav>

      <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden ">
        <Image 
        src="/banner-p.jpg" 
          alt="Café Espresso bem quente" 
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/30" /> 
        <div className="relative z-10 text-white p-6 md:p-25 md:ml-10 font-slab top-1/2 -translate-y-1/2">
        <h1 className="text-3xl md:text-4xl font-slab text-[#C0A279] mb-4"> 
          Um abraço em forma <br></br>de xícara</h1>
          <p className="text-[#E1C397] text-base md:text-lg">Sinta o verdadeiro sabor do café!</p>
          </div>
      </div>

      <section className="w-full flex-col items-center py-10 md:py-16 px-4 md:px-6 text-center">
        <h1 className="text-[#663c19] text-4xl md:text-5xl font-slab mb-8">
          Tipos de Café
        </h1>
        
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-12 lg:gap-y-0 md:divide-x divide-amber-950/30 max-w-6xl w-full mx-auto text-center px-4 mb-4 mt-6 font-slab">
          <div className="flex flex-col items-center px-4 sm:px-8">
            <h3 className="text-[#663c19] text-xl md:text-2xl font-slab mb-2">
              Expresso
            </h3>
            <p className="text-[#9d7e57] text-sm md:text-base leading-relaxed max-w-xs">O café expresso é um método de extração onde água quente passa por pó de café moído fino sob alta pressão. Ele produz uma bebida densa, concentrada (cerca de 25 - 30 ml) com uma espuma cremosa no topo, conhecida como crema.</p>
          </div>
          <div className="flex flex-col items-center px-4 sm:px-8">
            <h3 className="text-[#663c19] text-xl md:text-2xl font-slab mb-2">
              Latte
            </h3>
            <p className="text-[#9d7e57] text-sm md:text-base leading-relaxed max-w-xs">O Caffè Latte (ou apenas Latte) é uma bebida italiana clássica feita com café expresso e leite vaporizado. A principal característica do Latte é a textura sedosa do leite, que é levemente aerado para misturar-se perfeitamente ao café, resultando em uma bebida suave e menos intensa que o Cappuccino.</p>
          </div>
          <div className="flex flex-col items-center px-4 sm:px-8">
            <h3 className="text-[#663c19] text-xl md:text-2xl font-slab mb-2">
              Cafe Gelado
            </h3>
            <p className="text-[#9d7e57] text-sm md:text-base leading-relaxed max-w-xs">O café gelado engloba diferentes métodos de preparo que resultam em bebidas refrescantes, variando em intensidade, textura e dulçor.</p>
          </div>
          <div className="flex flex-col items-center px-4 sm:px-8">
            <h3 className="text-[#663c19] text-xl md:text-2xl font-slab mb-2">
              Frapuccino
            </h3>
            <p className="text-[#9d7e57] text-sm md:text-base leading-relaxed max-w-xs">O Frappuccino é uma bebida gelada, cremosa e doce, popularizada mundialmente pela rede Starbucks, feita à base de café batido com gelo e outros ingredientes. Diferente do Frappé tradicional (que usa café solúvel batido), o Frappuccino foca na mistura homogênea do gelo triturado com os laticínios e sabores doces.</p>
          </div>
        </div>
      </section>

      <div className="items-center overflow-hidden py-3 whitespace-nowrap flex text-center gap-10 text-2xl font-pacifico w-full bg-[#7e6037] text-[#c0a279]">
          {/*bloco  para criar o loop da barra de patrocínio */}
        {/* Bloco 1: A fileira original */}
        <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around gap-10">
          {patrocinioLista.map((item, index) => (
            <h1 key={`original-${index}`}>{item}</h1>
          ))}
        </div>

        {/* Bloco 2: A cópia idêntica para o looping infinito funcionar sem emendas */}
        <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around gap-10" aria-hidden="true">
          {patrocinioLista.map((item, index) => (
            <h1 key={`copia-${index}`}>{item}</h1>
          ))}
        </div>
      </div>

      <section className="py-10 md:py-16">
        <div className="flex flex-col items-center font-slab px-4">
          {/* Bloco 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mt-10 md:mt-15 mb-10 md:mb-15 max-w-4xl">
            <Image 
            src="/pr-1.jpg" 
            alt="Café Espresso bem quente" 
            height={250} // Adjusted for responsiveness
            width={250} // Adjusted for responsiveness
            className="rounded-lg shadow-lg scale-150 mr-0 mb-10 md:mb-15 md:mr-4"
            />
            <div className="flex flex-col max-w-md items-center md:items-start text-center md:text-left">
              <h2 className="text-[#663c19] text-3xl md:text-4xl mb-4">Tipos de Café</h2>
              <p className="text-base leading-relaxed text-[#9d7e57]">
                O mundo do café é incrivelmente vasto, dividindo-se principalmente entre as espécies de grãos e as formas de preparo (as bebidas que encontramos nas cafeterias).
                Como você está montando a interface da sua cafeteria, entender essas distinções ajuda bastante a estruturar o cardápio e os textos do seu site.
              </p>
            </div>
          </div>

          {/* Bloco 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-16 mt-10 md:mt-15 mb-10 md:mb-15 max-w-4xl">
            <Image 
            src="/pr-2.jpg" 
            alt="Café Espresso bem quente" 
            height={250} // Adjusted for responsiveness
            width={250} // Adjusted for responsiveness
            className="rounded-lg shadow-lg scale-150 mr-0 mb-10 md:mb-15 md:mr-4"
            />
            <div className="flex flex-col max-w-md items-center md:items-start text-center md:text-left">
              <h2 className="text-[#663c19] text-3xl md:text-4xl mb-4">Tipos de Café</h2>
              <p className="text-base leading-relaxed text-[#9d7e57]">
                O mundo do café é incrivelmente vasto, dividindo-se principalmente entre as espécies de grãos e as formas de preparo (as bebidas que encontramos nas cafeterias).
                Como você está montando a interface da sua cafeteria, entender essas distinções ajuda bastante a estruturar o cardápio e os textos do seu site.
              </p>
            </div>
          </div>

          {/* Bloco 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mt-10 md:mt-15 mb-10 md:mb-15 max-w-4xl">
            <Image 
            src="/pr-4.jpg" 
            alt="Café Espresso bem quente" 
            height={250} // Adjusted for responsiveness
            width={250} // Adjusted for responsiveness
            className="rounded-lg shadow-lg scale-150 mr-0 mb-10 md:mb-15 md:mr-4"
            />
            <div className="flex flex-col max-w-md items-center md:items-start text-center md:text-left">
              <h2 className="text-[#663c19] text-3xl md:text-4xl mb-4">Tipos de Café</h2>
              <p className="text-base leading-relaxed text-[#9d7e57]">
                O mundo do café é incrivelmente vasto, dividindo-se principalmente entre as espécies de grãos e as formas de preparo (as bebidas que encontramos nas cafeterias).
                Como você está montando a interface da sua cafeteria, entender essas distinções ajuda bastante a estruturar o cardápio e os textos do seu site.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" w-full h-[200px] md:h-[300px] lg:h-[450px] relative mt-10 md:mt-15 block">
        <Image 
        src="/ft.jpg"
        alt="Foto da mesa"
        fill
        sizes="100vw"
        className="object-cover object-center"
        />
      </section>

      <div className="text-[#9d7e57] py-10 md:py-16 px-4 md:px-16 font-slab">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 md:divide-x divide-[#663c19]">
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex-shrink-0 mb-4" />
            <p className="text-sm leading-relaxed text-justify">
              Enticing new flavors and returning favorites are here so you can savor the season to the very last drop. Experience new Tropical Butterfly Refreshers, reunite with Horchata and more.
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex-shrink-0 mb-4" />
            <p className="text-sm leading-relaxed text-justify">
              Enticing new flavors and returning favorites are here so you can savor the season to the very last drop. Experience new Tropical Butterfly Refreshers, reunite with Horchata and more.
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex-shrink-0 mb-4" />
            <p className="text-sm leading-relaxed text-justify">
              Enticing new flavors and returning favorites are here so you can savor the season to the very last drop. Experience new Tropical Butterfly Refreshers, reunite with Horchata and more.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-[#C0A279] pt-8 pb-4 px-4 md:pt-12 md:pb-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              onClick={irParaHome}
              className="cursor-pointer"
              src="/logo_xamego_rustico (1).png"
              alt="logo Cafeteria Xãmego"
              width={70} // Adjusted for responsiveness
              height={70} // Adjusted for responsiveness
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
