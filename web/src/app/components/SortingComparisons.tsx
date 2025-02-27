import { Trophy } from "lucide-react";

export default function SortingComparisons() {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-2xs h-24 bg-background rounded-sm border-2 border-textSecundary border-dashed flex flex-row items-center justify-between p-[25px]">
        <div>
          <h3 className="font-bold text-textPrimary">1    Merge Sort</h3>
          <p className="font-semibold text-textSecundary">0.5s</p>
        </div>
        <div><Trophy className="text-textHighlight size-10"/></div>
      </div>

      <div className="w-2xs h-24 bg-background rounded-sm border-2 border-textSecundary border-dashed flex flex-row items-center justify-between p-[25px]">
        <div>
          <h3 className="font-bold text-textPrimary">2    Radix Sort</h3>
          <p className="font-semibold text-textSecundary">0.75s</p>
        </div>
        <div>{/*<Trophy className="text-textHighlight size-10"/>*/}</div>
      </div>

      <div className="w-2xs h-24 bg-background rounded-sm border-2 border-textHighlight border-dashed flex flex-row items-center justify-between p-[25px]">
        <div>
          <h3 className="font-bold text-textPrimary">3   Bubble Sort</h3>
          <p className="font-semibold text-textSecundary">1s</p>
        </div>
        <div>{/*<Trophy className="text-textHighlight size-10"/>*/}</div>
      </div>
    </div>
  )
}