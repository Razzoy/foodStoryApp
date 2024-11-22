import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ScratchCard() {
  return (
    <div>
      <p>How many servings</p>
      <h2>Ingredients</h2>
      <div className="flex flex-row gap-1">
        <input
          type="text"
          name=""
          id=""
          placeholder="Ingredient"
          className="border-b-2 border-salmon"
        />
        <input
          type="text"
          placeholder="0"
          className="border-b-2 border-salmon"
        />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Tea spoon</SelectItem>
            <SelectItem value="dark">Table spoon</SelectItem>
            <SelectItem value="system">dl</SelectItem>
            <SelectItem value="bla">cups</SelectItem>
            <SelectItem value="lbi">stk</SelectItem>
            <SelectItem value="bli">grams</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <button className="border-2 border-salmon rounded-xl py-1 px-2">
        {" "}
        <img src="/src/assets/icons/Plus.svg" alt="" />
      </button>
      <h2>Instructions</h2>
      <button className="border-2 border-salmon rounded-xl py-1 px-2">
        {" "}
        <img src="/src/assets/icons/Plus.svg" alt="" />
      </button>
    </div>
  );
}
