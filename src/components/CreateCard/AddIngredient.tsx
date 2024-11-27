import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SetStateAction, useState } from "react";

export function AddIngredient({
  onAdd,
  currentList,
}: {
  onAdd: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        quantity: number;
        unit: string;
      }[]
    >
  >;
  currentList: {
    name: string;
    quantity: number;
    unit: string;
  }[];
}) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center self-stretch w-full text-sm gap-2">
        <input
          type="text"
          name=""
          id=""
          placeholder="Ingredient"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border-b-2 focus:border-black outline-none w-1/2"
        />
        <input
          type="text"
          onChange={(e) => setCount(Number(e.target.value))}
          value={count}
          className="border-b-2 w-1/5 text-center outline-none focus:border-black"
        />
        <Select onValueChange={(value) => setUnit(value)} value={unit}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Unit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tsp.">Teaspoon</SelectItem>
            <SelectItem value="tbsp.">Tablespoon</SelectItem>
            <SelectItem value="cups">Cups</SelectItem>
            <SelectItem value="dl.">Decilitres</SelectItem>
            <SelectItem value="ml.">Millilitres</SelectItem>
            <SelectItem value="gr.">Grams</SelectItem>
            <SelectItem value="pints">Pint</SelectItem>
            <SelectItem value="oz.">Ounces</SelectItem>
            <SelectItem value="pounds">Pounds</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <button
        onClick={() => onAdd([...currentList, { name, quantity: count, unit }])}
        className="border-2 border-salmon rounded-xl py-1 px-1.5 self-end"
      >
        {" "}
        <img src="/src/assets/icons/Plus.svg" alt="" />
      </button>
    </div>
  );
}
