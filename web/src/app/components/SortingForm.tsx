import { useState } from "react"

export default function SortingForm() {
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const [arraySize, setArraySize] = useState(10);

  const generateRandomArray = (size: number) => {
    return Array.from({length: size}, () => Math.floor(Math.random()*100) + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const array = generateRandomArray(arraySize);

    console.log("🔹 Formulário enviado!");
    console.log("📌 Algoritmo escolhido:", algorithm);
    console.log("📊 Lista gerada:", array);
  };

  return(
    <form onSubmit={handleSubmit} className="p-4 bg-lighterBackground rounded-lg w-2xs">
      <label className="block text-white mb-2">Escolha o algoritmo:</label>
      <select
        className="w-full p-2 rounded bg-background text-white"
        value={algorithm}
        onChange={(e) => setAlgorithm(e.target.value)}
      >
        <option value="bubbleSort">Bubble Sort</option>
        <option value="mergeSort">Merge Sort</option>
        <option value="quickSort">Quick Sort</option>
        <option value="radixSort">Radix Sort</option>
        <option value="insertionSort">Insertion Sort</option>
      </select>

      <select
        className="w-full p-2 rounded bg-background text-white mt-3"
        value={arraySize}
        onChange={(e) => setArraySize(Number(e.target.value))}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>

      <button type="submit" className="mt-4 w-full bg-textHighlight p-2 rounded text-white font-bold">
        Run
      </button>
    </form>
  )
}