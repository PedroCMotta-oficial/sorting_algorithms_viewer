"use client"

import { useState } from "react";
import SortingVisualizer from "@/app/components/SortingVisualizer";
import SortingForm from "@/app/components/SortingForm";
import { ChartNoAxesColumnIncreasing, Github } from "lucide-react";

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

          <a href="">
            <div className="flex flex-row gap-2 items-center cursor-pointer">
              <ChartNoAxesColumnIncreasing className="size-10 text-textHighlight"/>
              <h1 className="text-textPrimary font-bold text-2xl">Visualizador de Algoritmos de Ordenação</h1>
            </div>
          </a>

          
          <div className="flex flex-row gap-10 items-center ">

            <a href="" className="text-textSecundary font-bold cursor-pointer transition-colors duration-250 hover:text-textHighlight">
              <div className="p-3">Guia</div>
            </a>
            <a href="https://github.com/PedroCMotta-oficial/sorting_algorithms_viewer" className="text-textSecundary cursor-pointer transition-colors duration-250 hover:text-textHighlight">
              <div className="p-3"><Github /></div>
            </a>
            
          </div>
          
        </div>
      </header>

      {/*
      <div className="px-35 md:px-90 py-5">

        <div className="px-2.5 py-1 bg-DarkerBackground text-textSecundary font-bold rounded-xl w-fit">
          v0.1
        </div>
        <div className="mt-2">
          <h3 className="text-6xl font-extrabold text-textPrimary">
            <span className="text-textHighlight">Visualize </span>
            a <br />ordenação
          </h3>
          <p className="text-textSecundary font-bold mt-7 text-2xl">Mais de 5 algoritmos para visualizar</p>
        </div>

      </div>
      */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-75 md:px-[450px] py-4.5 justify-items-center">

        <div className="bg-gridItemBackgroundColor w-[350px] h-[175px] rounded-2xl">

        </div>
        
        <div className="bg-gridItemBackgroundColor w-[350px] h-[175px] rounded-2xl">

        </div>

      </div>

      <div className="flex flex-row px-35 md:px-90 h-150 py-5">

        <SortingForm />
        <SortingVisualizer iterations={simulatedIterations}/>

      </div>
        
      <footer>

        <div>
            <p>Released under ___ license</p>
            <p>Copyright c 2025 SAV Contributors</p>
        </div>

        <div>
          <div>
            <a href="">License</a>
            <a href="">Donate</a>
            <a href="">Github</a>
            <a href="">Issues</a>
          </div>
        </div>

      </footer>
    </div>
  );
}
