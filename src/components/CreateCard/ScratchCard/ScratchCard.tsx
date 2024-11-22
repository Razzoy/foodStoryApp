import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AddIngredient } from "../AddIngredient";
import { AddInstruction } from "../AddInstruction";

export function ScratchCard() {
  return (
    <div className="flex flex-col gap-5 items-start self-stretch mt-2">
      <div className="flex flex-col self-start gap-1">
        <p className="text-sm">How many servings?</p>
        <div className="flex self-start gap-2 items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="minus-sign-stroke-rounded">
              <path
                id="Vector"
                d="M11.6667 7H2.33337"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <label htmlFor="" className="self-center text-xl">
            0
          </label>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="plus-sign-stroke-rounded">
              <path
                id="Vector"
                d="M12 4V20M20 12H4"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <div>
        <h2 className="text-xl">Ingredients</h2>
        <div className="flex flex-col items-start gap-3 self-stretch">
          <AddIngredient />
          <button className="border-2 border-salmon rounded-xl py-1 px-1.5 self-end">
            {" "}
            <img src="/src/assets/icons/Plus.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 self-stretch">
        <h2 className="text-xl">Instructions</h2>
        <AddInstruction />
        <button className="border-2 border-salmon rounded-xl py-1 px-1.5 self-end">
          {" "}
          <img src="/src/assets/icons/Plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
