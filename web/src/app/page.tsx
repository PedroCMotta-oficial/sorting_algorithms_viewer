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
    <div className="bg-background min-h-dvh">
      <header>
        <div className="flex flex-row items-center justify-between px-20 md:px-70 h-20">

          <div className="flex flex-row gap-2 items-center">
            <ChartNoAxesColumnIncreasing className="size-10 text-textHighlight"/>
            <h1 className="text-textPrimary font-bold text-2xl">Sorting Algorithm Viewer</h1>
          </div>
          
          <div className="flex flex-row gap-10 items-center ">

            <a href="" className="text-textSecundary font-bold">Guide</a>
            <a href="https://github.com/PedroCMotta-oficial/sorting_algorithms_viewer"><Github className="text-textSecundary"/></a>
            
          </div>
          
        </div>
      </header>
        
      <div>

        <div>
          <h3>Seing the sorting iterations has never been easier</h3>
          <p>Understand the process of each sorting algorithm easily</p>
        </div>

      </div>

      <div>

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
