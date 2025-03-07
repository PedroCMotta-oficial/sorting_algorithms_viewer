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
        <div className="flex flex-col md:flex-row items-center justify-between px-20 md:px-70 py-4.5 top-0 fixed bg-background w-full">

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
        <div className="h-0.5 w-full  bg-black fixed"></div>
      </header>


      <div className="flex flex-row px-75 md:px-[475px] py-4.5 justify-center gap-[40px] mt-[84px]">

        {/* Seções */}
        <div className=" text-white w-[700px]">

          <Element name="como-usar">
            <div>
              <h1 className="text-textPrimary font-bold text-3xl">Como Usar</h1>
            </div>
            
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            

          </Element>

          <hr className="text-textSecundary mt-10 mb-10"/>

          <Element name="significado-cores">
            <div>
              <h1 className="text-textPrimary font-bold text-3xl">Significado das Cores</h1>
            </div>

            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
          </Element>

          <hr className="text-textSecundary mt-10 mb-10"/>

          <Element name="configuracoes">
            <div>
              <h1 className="text-textPrimary font-bold text-3xl">Configurações</h1>
            </div>

            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
          </Element>

          <hr className="text-textSecundary mt-10 mb-10"/>

          <Element name="faq">
            <div>
              <h1 className="text-textPrimary font-bold text-3xl">Dúvidas Comuns</h1>
            </div>

            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...</p>
            <p>Explicação de como usar a ferramenta...Explicação de como usar a ferramenta.. Explicação</p>
          </Element>

        </div>

        {/* Sumário */}
        <Sumary />

      </div>
      
    </div>
  );
}