"use client";

import { ChartNoAxesColumnIncreasing, Github, Clapperboard, PencilRuler, ArrowUpRight } from "lucide-react";
import { Link, Element} from "react-scroll";


export default function Guide() {
  return (
    <div  className="bg-background min-h-dvh">

      <header>
        <div className="flex flex-col md:flex-row items-center justify-between px-20 md:px-70 py-4.5">

          <Link href="">
            <div className="flex flex-row gap-2 items-center cursor-pointer">
              <ChartNoAxesColumnIncreasing className="size-10 text-textHighlight"/>
              <h1 className="text-textPrimary font-bold text-2xl">Visualizador de Algoritmos de Ordenação</h1>
            </div>
          </Link>

          <div className="flex flex-row gap-10 items-center ">

            <Link href="/guide" className="text-textSecundary font-bold cursor-pointer transition-colors duration-250 hover:text-textHighlight">
              <div className="p-3">Guia</div>
            </Link>
            <a href="https://github.com/PedroCMotta-oficial/sorting_algorithms_viewer" className="text-textSecundary cursor-pointer transition-colors duration-250 hover:text-textHighlight">
              <div className="p-3"><Github /></div>
            </a>
            
          </div>
          
        </div>
      </header>


      {/* Sumário */}
      {/*<nav className="fixed top-0 left-0 bg-white p-4 shadow-md w-full">
        <ul className="flex space-x-4">
          <li><Link to="como-usar" smooth={true} duration={500}>Como Usar</Link></li>
          <li><Link to="significado-cores" smooth={true} duration={500}>Significado das Cores</Link></li>
          <li><Link to="configuracoes" smooth={true} duration={500}>Configurações</Link></li>
          <li><Link to="faq" smooth={true} duration={500}>Dúvidas Comuns</Link></li>
        </ul>
      </nav>*/}

      {/* Seções */}
      <div className="mt-20 p-4">
        <Element name="como-usar">
          <h2>Como Usar</h2>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>
          <p>Explicação de como usar a ferramenta...</p>

        </Element>

        <Element name="significado-cores">
          <h2>Significado das Cores</h2>
          <p>Explicação sobre as cores na animação...</p>
        </Element>

        <Element name="configuracoes">
          <h2>Configurações</h2>
          <p>Explicação sobre as opções de personalização...</p>
        </Element>

        <Element name="faq">
          <h2>Dúvidas Comuns</h2>
          <p>Respostas para perguntas frequentes...</p>
        </Element>
      </div>
    </div>
  );
}