import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AddIngredient() {
  return (
    <div className="flex justify-between items-center self-stretch w-full text-sm gap-2">
      <input
        type="text"
        name=""
        id=""
        placeholder="Ingredient"
        className="border-b-2 focus:border-black outline-none w-1/2"
      />
      <input
        type="text"
        placeholder="0"
        className="border-b-2 w-6 text-center outline-none focus:border-black"
      />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Unit of measurement" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Tea spoon</SelectItem>
          <SelectItem value="dark">Table spoon</SelectItem>
          <SelectItem value="system">dl</SelectItem>
          <SelectItem value="bla">cups</SelectItem>
          <SelectItem value="lbi">stk</SelectItem>
          <SelectItem value="bli">grams</SelectItem>
          <SelectItem value="bli">drops</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
