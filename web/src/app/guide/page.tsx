"use client";

import { ChartNoAxesColumnIncreasing, Github } from "lucide-react";
import { Element } from "react-scroll";
import Link from "next/link";

import Sumary from "../components/GuidePageSumary";

export default function Guide() {
  return (
    <div  className="bg-background min-h-dvh">

      {/* HEADER */}
      <header>
        <div className="flex flex-col md:flex-row items-center justify-between px-20 md:px-70 py-4.5">

          <Link href="/">
            <div className="flex flex-row gap-2 items-center cursor-pointer">
              <ChartNoAxesColumnIncreasing className="size-10 text-textHighlight"/>
              <h1 className="text-textPrimary font-bold text-2xl">Visualizador de Algoritmos de Ordenação</h1>
            </div>
          </Link>

          <div className="flex flex-row gap-10 items-center ">

            <Link href="/guide" className="font-bold cursor-pointer text-textHighlight">
              <div className="p-3">Guia</div>
            </Link>
            <a href="https://github.com/PedroCMotta-oficial/sorting_algorithms_viewer" className="text-textSecundary cursor-pointer transition-colors duration-250 hover:text-textHighlight">
              <div className="p-3"><Github /></div>
            </a>
            
          </div>
          
        </div>
      </header>


      <div className="flex flex-row px-75 md:px-[450px] py-4.5 justify-center gap-[50px]">

        {/* Seções */}
        <div className="p-4 text-white ">
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
            

          </Element>

          <Element name="significado-cores">
            <h2>Significado das Cores</h2>
            <p>Explicação sobre as cores na animação...</p>
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

          <Element name="configuracoes">
            <h2>Configurações</h2>
            <p>Explicação sobre as opções de personalização...</p>
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

          <Element name="faq">
            <h2>Dúvidas Comuns</h2>
            <p>Respostas para perguntas frequentes...</p>
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
        </div>

        {/* Sumário */}
        <Sumary />

      </div>
      
    </div>
  );
}