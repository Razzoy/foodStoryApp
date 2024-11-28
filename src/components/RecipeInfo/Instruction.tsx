import { useState } from "react";
import { FetchApi } from "../FetchApi/FetchApi";

export type IngredientProps = {
  index?: number;
  instruction?: { [key: string]: string };
};

export function Instruction({ instruction, index }: IngredientProps) {
  console.log("ingredients:", instruction);
  if (!instruction) {
    return <h1>spinner</h1>;
  }
  return (
    <div className="flex gap-2 w-full justify-between">
      <p>
        {index}. {instruction[0]}
      </p>
    </div>
  );
}
