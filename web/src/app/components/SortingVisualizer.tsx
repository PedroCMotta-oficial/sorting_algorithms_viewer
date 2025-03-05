"use client"

import { useState, useEffect } from "react";

interface SortingVisualizerProps {
  iterations: number[][]; // Lista de estados das iterações
}

export default function SortingVisualizer({ iterations }: SortingVisualizerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    if (currentStep < iterations.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 250); // Tempo entre animações (ajustável)
      return () => clearTimeout(timer);
    }
  }, [currentStep, iterations]);

  const currentArray = iterations[currentStep] || [];

  return (
    <div className="relative w-full h-full bg-background flex items-end justify-center gap-1 p-4 rounded-sm border-2 border-textSecundary border-dashed">
      {currentArray.map((value, index) => (
        <div
          key={index}
          className={`w-6 transition-all duration-300 ${
            activeIndices.includes(index) ? "bg-green-400" : "bg-textHighlight"
          }`}
          style={{ height: `${value * 2}px` }}
        ></div>
      ))}
    </div>
  );
}
