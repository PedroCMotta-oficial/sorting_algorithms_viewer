"use client";

import { ChartNoAxesColumnIncreasing, Github } from "lucide-react";
import { Element } from "react-scroll";
import Link from "next/link";

export default function License() {
  return (
    <div  className="bg-background min-h-dvh">

      <div>
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
      </div>
      
      <div className="mt-[84px]">
        {/*LICENSE AREA*/}
        <p>something for the license area</p>
      </div>

    </div>
  );
}