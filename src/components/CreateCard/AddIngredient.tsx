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
        type="number"
        onChange={(e) => setCount(Number(e.target.value))}
        value={count}
        className="border-b-2 w-6 text-center outline-none focus:border-black"
      />
      <Select onValueChange={(value) => setUnit(value)} value={unit}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Unit of measurement" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Tea spoon">Tea spoon</SelectItem>
          <SelectItem value="Table spoon">Table spoon</SelectItem>
          <SelectItem value="dl">dl</SelectItem>
        </SelectContent>
      </Select>
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
