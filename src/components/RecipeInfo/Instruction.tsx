import { useState } from "react";
import { FetchApi } from "../FetchApi/FetchApi";

export type IngredientProps = {
  step?: number;
  instruction?: string;
};

export function Instruction({ instruction, step }: IngredientProps) {
  console.log("instruction:", instruction);
  if (!instruction) {
    return <h1>spinner</h1>;
  }
  return (
    <div className="flex gap-2 w-full justify-between">
      <p className="font-Nunito">
        {step}. {instruction}
      </p>
    </div>
  );
}
