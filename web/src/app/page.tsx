"use client"

import { useState } from "react";
import SortingVisualizer from "@/app/components/SortingVisualizer";
import SortingForm from "@/app/components/SortingForm";

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

  /*
  // MERGE SORT
  const simulatedIterations = [
    [10, 42, 3, 98, 23, 56, 74, 15, 67, 31],
    [3, 10, 42, 98, 23, 56, 74, 15, 67, 31],
    [3, 10, 42, 23, 98, 56, 74, 15, 67, 31],
    [3, 10, 23, 42, 98, 56, 74, 15, 67, 31],
    [3, 10, 23, 42, 98, 56, 74, 15, 67, 31],
    [3, 10, 23, 42, 98, 15, 56, 74, 67, 31],
    [3, 10, 23, 42, 98, 15, 56, 74, 31, 67],
    [3, 10, 23, 42, 98, 15, 31, 56, 67, 74],
    [3, 10, 15, 23, 31, 42, 56, 67, 74, 98]
  ]*/

  
  /*
  // RADIX SORT
  const simulatedIterations = [
    [42, 10, 3, 98, 23, 56, 74, 15, 67, 31],
    [10, 31, 42, 3, 23, 74, 15, 56, 67, 98],
    [3, 10, 15, 23, 31, 42, 56, 67, 74, 98]
  ]*/
  

  return (
    <div className="bg-gray-800 h-dvh">
      <header className="flex flex-row justify-between items-center p-3 ">
        <div></div>
        <h1 className="text-2xl font-bold text-center">Visualizador de Ordenações</h1>
        <nav>
          <a href="https://github.com/PedroCMotta-oficial/sorting_algorithms_viewer">github do projeto</a>
        </nav>
      </header>

      <div className="flex flex-row px-80">
        <SortingForm />
        <SortingVisualizer iterations={simulatedIterations} />
      </div>
      
    </div>
  );
}
