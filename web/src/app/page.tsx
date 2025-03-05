"use client"

import { useState } from "react";
import SortingVisualizer from "@/app/components/SortingVisualizer";
import SortingForm from "@/app/components/SortingForm";
import SortingComparisons from "./components/SortingComparisons";
import { ChartNoAxesColumnIncreasing, Github, Clapperboard, PencilRuler, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  // Array inicial
  const initialArray = [10, 30, 20, 40, 50, 5];

  // Simulação de iterações (será gerado dinamicamente depois)
  
  // BUBBLE SORT
  const simulatedIterations = [
    [42, 10, 3, 98, 23, 56, 74, 15, 67, 31],
    [10, 42, 3, 98, 23, 56, 74, 15, 67, 31],
    [10, 3, 42, 98, 23, 56, 74, 15, 67, 31],
    [10, 3, 42, 23, 98, 56, 74, 15, 67, 31],
    [10, 3, 42, 23, 56, 98, 74, 15, 67, 31],
    [10, 3, 42, 23, 56, 74, 98, 15, 67, 31],
    [10, 3, 42, 23, 56, 74, 15, 98, 67, 31],
    [10, 3, 42, 23, 56, 74, 15, 67, 98, 31],
    [10, 3, 42, 23, 56, 74, 15, 67, 31, 98],
    [3, 10, 42, 23, 56, 74, 15, 67, 31, 98],
    [3, 10, 23, 42, 56, 74, 15, 67, 31, 98],
    [3, 10, 23, 42, 56, 15, 74, 67, 31, 98],
    [3, 10, 23, 42, 56, 15, 67, 74, 31, 98],
    [3, 10, 23, 42, 56, 15, 67, 31, 74, 98],
    [3, 10, 23, 42, 15, 56, 67, 31, 74, 98],
    [3, 10, 23, 42, 15, 56, 31, 67, 74, 98],
    [3, 10, 23, 15, 42, 56, 31, 67, 74, 98],
    [3, 10, 23, 15, 42, 31, 56, 67, 74, 98],
    [3, 10, 15, 23, 42, 31, 56, 67, 74, 98],
    [3, 10, 15, 23, 31, 42, 56, 67, 74, 98]
  ]

  return (
    <div className="bg-background min-h-dvh">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-75 md:px-[450px] py-4.5 justify-items-center">

        <div className="bg-background rounded-md border-2 border-textSecundary border-dashed w-[350px] h-[175px] p-5 flex flex-col justify-start">
          <div className="bg-DarkerBackground p-2.5 w-fit rounded-xl absolute"><Clapperboard className="text-textHighlight"/></div>
          <h3 className="font-bold text-textPrimary mt-13">Veja as iterações</h3>
          <p className="text-textSecundary mt-2.5 font-semibold">É possível ver o comportamento de cada algoritmo de maneira intuitiva</p>
        </div>

        <div className="bg-background rounded-md border-2 border-textSecundary border-dashed w-[350px] h-[175px] p-5 flex flex-col justify-start">
          <div className="bg-DarkerBackground p-2.5 w-fit rounded-xl absolute"><PencilRuler className="text-textHighlight"/></div>
          <h3 className="font-bold text-textPrimary mt-13">Compare os algoritmos</h3>
          <p className="text-textSecundary mt-2.5 font-semibold">Veja a comparação entre os algoritmos em cada caso para um melhor estudo</p>
        </div>

      </div>

      <div className="flex flex-col items-center px-35 md:px-[375px] h-150 py-5 gap-10">

        <SortingForm />
        <div className="flex flex-row gap-6 items-center">
          <SortingVisualizer iterations={simulatedIterations}/>
          <SortingComparisons />
        </div>
 
      </div>
        
      <footer>
        <div className="flex flex-col md:flex-row items-center justify-between px-20 md:px-70 py-4.5">

          <div className="flex flex-row gap-2">
            <a href="" className="px-1.5 py-1 ">
              <div className="flex flex-row gap-1 items-center cursor-pointer">
                <h1 className="text-textPrimary font-semibold">Licença</h1>
                <ArrowUpRight className="size-3 text-textSecundary font-semibold" />
              </div>
            </a>

            <a href="" className="px-1.5 py-1 ">
              <div className="flex flex-row gap-1 items-center cursor-pointer">
                <h1 className="text-textPrimary font-semibold">Doações</h1>
                <ArrowUpRight className="size-3 text-textSecundary font-semibold" />
              </div>
            </a>

            <a href="" className="px-1.5 py-1 ">
              <div className="flex flex-row gap-1 items-center cursor-pointer">
                <h1 className="text-textPrimary font-semibold">GitHub</h1>
                <ArrowUpRight className="size-3 text-textSecundary font-semibold" />
              </div>
            </a>

            <a href="" className="px-1.5 py-1 ">
              <div className="flex flex-row gap-1 items-center cursor-pointer">
                <h1 className="text-textPrimary font-semibold">Problemas</h1>
                <ArrowUpRight className="size-3 text-textSecundary font-semibold" />
              </div>
            </a>

            <a href="" className="px-1.5 py-1 ">
              <div className="flex flex-row gap-1 items-center cursor-pointer">
                <h1 className="text-textPrimary font-semibold">Sobre</h1>
                <ArrowUpRight className="size-3 text-textSecundary font-semibold" />
              </div>
            </a>
          </div>

          <div className="flex flex-col items-end gap-2 font-semibold text-textSecundary">
              <p>Released under ___ license</p>
              <p>Copyright© 2025</p>
          </div>

        </div>
      </footer>
    </div>
  );
}
