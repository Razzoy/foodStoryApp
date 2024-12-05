import { useState } from "react";
import { AddIngredient } from "../AddIngredient";
import { AddInstruction } from "../AddInstruction";

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
          <button onClick={decrement} type="button">
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
          <label htmlFor="" className="self-center text-xl">
            <input value={count} type="hidden" name="servings"></input>
            {count}
          </label>
          <button onClick={increment} type="button">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <h2 className="text-base">Ingredients</h2>
      <div className="flex flex-col items-start gap-3 self-stretch">
        {ingredientList.map((ingredient, index) => (
          <div className="flex gap-1" key={index}>
            <p>{ingredient.quantity}</p>
            <p>{ingredient.unit}</p>
            <p>{ingredient.name}</p>
          </div>
        ))}
        <input
          type="hidden"
          name="ingredients"
          value={JSON.stringify(ingredientList)}
        />

        <AddIngredient onAdd={setIngredientList} currentList={ingredientList} />
      </div>
      <h2 className="text-base">Instructions</h2>
      <div className="flex flex-col items-start gap-3 self-stretch">
        {instructionList.map((instruction, index) => (
          <div className="flex gap-4" key={index}>
            <p>{index + 1}.</p>
            <p>{instruction.text}</p>
          </div>
        ))}
        <input
          type="hidden"
          name="instruction"
          value={JSON.stringify(instructionList)}
        />
        <AddInstruction
          onAdd={setInstructionList}
          currentInstructionList={instructionList}
        />
      </div>
    </div>
  );
}
