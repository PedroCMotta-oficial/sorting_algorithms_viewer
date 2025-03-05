import { useState } from "react"

export default function SortingForm() {
  const [algorithm, setAlgorithm] = useState("bubbleSort");

  const generateRandomArray = (size: number) => {
    return Array.from({length: size}, () => Math.floor(Math.random()*100) + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const array = generateRandomArray(10);

    console.log("🔹 Formulário enviado!");
    console.log("📌 Algoritmo escolhido:", algorithm);
    console.log("📊 Lista gerada:", array);
  };

  return(
    <form onSubmit={handleSubmit} className="p-4 bg-gray-700 rounded-lg w-2xs">
      <label className="block text-white mb-2">Escolha o algoritmo:</label>
      <select
        className="w-full p-2 rounded bg-gray-800 text-white"
        value={algorithm}
        onChange={(e) => setAlgorithm(e.target.value)}
      >
        <option value="bubbleSort">Bubble Sort</option>
        <option value="mergeSort">Merge Sort</option>
        <option value="quickSort">Quick Sort</option>
        <option value="radixSort">Radix Sort</option>
        <option value="insertionSort">Insertion Sort</option>
      </select>

      <button type="submit" className="mt-4 w-full bg-green-500 p-2 rounded text-white">
        Run
      </button>
    </form>
  )
}