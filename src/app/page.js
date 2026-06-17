"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
export default function Home(){
  const router = useRouter();
  function irParaHome(){
    alert("Você clicou no botão")
    
  }
  function irParaMenu(){
    alert("Você clicou no botão")
    
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
    alert("Você clicou no botão")
    
  }
  function irParaLogIn(){
    alert("Você clicou no botão")
    
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
      <div className="w-full h-[400px] relative overflow-hidden">
        <Image 
        src="/banner-p.jpg" 
          alt="Café Espresso bem quente" 
          fill
          priority
          className="object-cover"
        />
      </div>
      <section className="w-full flex-col items-center py-16 px-6 text-center">
        <h1 className="text-[#663c19] text-5xl font-slab">
          Tipos de Café
        </h1>
        
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-y-0 md:divide-x divide-amber-950/30 max-w-6xl w-full mx-auto text-center px-4 mb-4 mt-6 font-slab">
          <div className="flex flex-col items-center px-8">
            <h3 className="text-[#663c19] text-2xl font-slab">
              Expresso
            </h3>
            <p className="text-[#9d7e57] text-base leading-relaxed max-w-xs">O café expresso é um método de extração onde água quente passa por pó de café moído fino sob alta pressão. Ele produz uma bebida densa, concentrada (cerca de 25 - 30 ml) com uma espuma cremosa no topo, conhecida como crema.</p>
          </div>
          <div className="flex flex-col items-center px-8">
            <h3 className="text-[#663c19] text-2xl font-slab">
              Latte
            </h3>
            <p className="text-[#9d7e57] text-base leading-relaxed max-w-xs">O Caffè Latte (ou apenas Latte) é uma bebida italiana clássica feita com café expresso e leite vaporizado. A principal característica do Latte é a textura sedosa do leite, que é levemente aerado para misturar-se perfeitamente ao café, resultando em uma bebida suave e menos intensa que o Cappuccino.</p>
          </div>
          <div className="flex flex-col items-center px-8">
            <h3 className="text-[#663c19] text-2xl font-slab">
              Cafe Gelado
            </h3>
            <p className="text-[#9d7e57] text-base leading-relaxed max-w-xs">O café gelado engloba diferentes métodos de preparo que resultam em bebidas refrescantes, variando em intensidade, textura e dulçor.</p>
          </div>
          <div className="flex flex-col items-center px-8">
            <h3 className="text-[#663c19] text-2xl font-slab">
              Frapuccino
            </h3>
            <p className="text-[#9d7e57] text-base leading-relaxed max-w-xs">O Frappuccino é uma bebida gelada, cremosa e doce, popularizada mundialmente pela rede Starbucks, feita à base de café batido com gelo e outros ingredientes. Diferente do Frappé tradicional (que usa café solúvel batido), o Frappuccino foca na mistura homogênea do gelo triturado com os laticínios e sabores doces.</p>
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
      <section> {/*Seção de imagens e texto */}
        <div className="flex flex-col items-center font-slab">
          <div className="flex items-start gap-45 mt-15">
            <Image 
            src="/bd-1.jpg" 
          alt="Café Espresso bem quente" 
          height={300}
          width={300}
          className=""/>
          <div className="flex flex-col max-w-xs items-center">
        <h2 className="text-[#663c19] text-4xl mb-4">Tipos de Café</h2>
        <p className="text-base leading-relaxed break-all text-[#9d7e57]">
          O mundo do café é incrivelmente vasto, dividindo-se principalmente entre as espécies de grãos e as formas de preparo (as bebidas que encontramos nas cafeterias).
          Como você está montando a interface da sua cafeteria, entender essas distinções ajuda bastante a estruturar o cardápio e os textos do seu site.
        </p>
           </div>
          </div>
          <div className="flex items-start gap-45 mt-15">
            
          <div className="flex flex-col max-w-xs items-center">
        <h2 className="text-[#663c19] text-4xl mb-4">Tipos de Café</h2>
        <p className="text-base leading-relaxed break-all text-[#9d7e57]">
          O mundo do café é incrivelmente vasto, dividindo-se principalmente entre as espécies de grãos e as formas de preparo (as bebidas que encontramos nas cafeterias).
          Como você está montando a interface da sua cafeteria, entender essas distinções ajuda bastante a estruturar o cardápio e os textos do seu site.
        </p>
        </div>
        <Image 
            src="/bd-2.jpg" 
          alt="Café Espresso bem quente" 
          height={300}
          width={300}
          className=""/>
          </div>
          <div className="flex items-start gap-45 mt-15">
            <Image 
            src="/bd-3.jpg" 
          alt="Café Espresso bem quente" 
          height={300}
          width={300}
          className=""/>
          <div className="flex flex-col max-w-xs items-center">
        <h2 className="text-[#663c19] text-4xl mb-4">Tipos de Café</h2>
        <p className="text-base leading-relaxed break-all text-[#9d7e57]">
          O mundo do café é incrivelmente vasto, dividindo-se principalmente entre as espécies de grãos e as formas de preparo (as bebidas que encontramos nas cafeterias).
          Como você está montando a interface da sua cafeteria, entender essas distinções ajuda bastante a estruturar o cardápio e os textos do seu site.
        </p>
           </div>
          </div>
        </div>
      </section>
      <section className=" w-full h-[300px] md:h-[450px] relative mt-15 block">
        <Image 
        src="/ft.jpg"
    alt="Foto da mesa"
    fill
    sizes="100vw"
    className="object-cover object-center"
        />
      </section>
      <div className="text-[#9d7e57] py-16 px-6 md:px-16 font-slab">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 md:divide-x md:divide-[#663c19]">
          <div className="flex items-start gap-4 px-4">
            <div className="w-12 h-12 rounded-full bg-white flex-shrink-0" />
            <p className="text-sm leading-relaxed text-justify">
              Enticing new flavors and returning favorites are here so you can savor the season to the very last drop. Experience new Tropical Butterfly Refreshers, reunite with Horchata and more.
            </p>
          </div>

          <div className="flex items-start gap-4 px-4">
            <div className="w-12 h-12 rounded-full bg-white flex-shrink-0" />
            <p className="text-sm leading-relaxed text-justify">
              Enticing new flavors and returning favorites are here so you can savor the season to the very last drop. Experience new Tropical Butterfly Refreshers, reunite with Horchata and more.
            </p>
          </div>

          <div className="flex items-start gap-4 px-4">
            <div className="w-12 h-12 rounded-full bg-white flex-shrink-0" />
            <p className="text-sm leading-relaxed text-justify">
              Enticing new flavors and returning favorites are here so you can savor the season to the very last drop. Experience new Tropical Butterfly Refreshers, reunite with Horchata and more.
            </p>
          </div>

        </div>
      </div>
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
      <div className="flex flex-row gap-15 text-[#663c19]">
        <Link href="https://instagram.com" target="_blank">
        <FaInstagram size={30} color="#0077b5" /></Link>
      </div>
    </div>

  </div>
  </footer> 
    </main>
  );
}