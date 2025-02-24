export default function SortingForm() {
  return(
    <form className="p-4 bg-gray-700 rounded-lg">
      <label className="block text-white mb-2">Escolha o algoritmo:</label>
      <select className="w-full p-2 rounded bg-gray-800 text-white">
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