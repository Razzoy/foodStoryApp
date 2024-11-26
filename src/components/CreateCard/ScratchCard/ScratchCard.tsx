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

  // const Ingredient = () => { return <

  //   const Form = () => {
  //     const [inputList, setInputList] = useState([]);

  //     const onAddBtnClick = event => {
  //     setInputList(inputList.concat(<Ingredient />));
  //   };

  function AddIngredientComp() {}
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
            onClick={decrement}
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
            {count}
          </label>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={increment}
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
          {ingredientList.map((ingredient, index) => (
            <div className="flex gap-4">
              <p key={index}>{ingredient.name}</p>
              <p key={index}>{ingredient.quantity}</p>
              <p key={index}>{ingredient.unit}</p>
            </div>
          ))}
          <AddIngredient
            onAdd={setIngredientList}
            currentList={ingredientList}
          />
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
