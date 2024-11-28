import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { AddIngredient } from "../AddIngredient";
import { AddInstruction } from "../AddInstruction";
import React from "react";
import ReactDOM from "react-dom";

export function ScratchCard() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count === 0) {
      return 0;
    }
    setCount(count - 1);
  }

  const [ingredientList, setIngredientList] = useState<
    {
      name: string;
      quantity: number;
      unit: string;
    }[]
  >([]);

  const [instructionList, setInstructionList] = useState<
    {
      text: string;
    }[]
  >([]);

  return (
    <div className="flex flex-col gap-5 items-start self-stretch mt-2">
      <div className="flex flex-col self-start gap-1">
        <p className="text-sm">How many servings?</p>
        <div className="flex self-start gap-2 items-center">
          <button onClick={decrement}>
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
          </button>
          <label htmlFor="" className="self-center text-xl">
            {count}
          </label>
          <button onClick={increment}>
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
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-base">Ingredients</h2>
        <div className="flex flex-col items-start gap-3 self-stretch">
          {ingredientList.map((ingredient, index) => (
            <div className="flex gap-1">
              <p key={index}>{ingredient.quantity}</p>
              <p key={index}>{ingredient.unit}</p>
              <p key={index}>{ingredient.name}</p>
            </div>
          ))}
          <AddIngredient
            onAdd={setIngredientList}
            currentList={ingredientList}
          />
        </div>
      </div>
      <h2 className="text-base">Instructions</h2>
      <div className="flex flex-col items-start gap-3 self-stretch">
        {instructionList.map((instruction, index) => (
          <div className="flex gap-4">
            <p key={index}>{index + 1}.</p>
            <p key={index}>{instruction.text}</p>
            <input type="text" name={instruction.text} id="" />
          </div>
        ))}
        <AddInstruction
          onAdd={setInstructionList}
          currentInstructionList={instructionList}
        />
      </div>
    </div>
  );
}
