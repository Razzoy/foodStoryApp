import { SetStateAction, useState } from "react";

export function AddInstruction({
  onAdd,
  currentInstructionList,
}: {
  onAdd: React.Dispatch<
    React.SetStateAction<
      {
        text: string;
      }[]
    >
  >;
  currentInstructionList: {
    text: string;
  }[];
}) {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col gap-2 self-stretch text-sm">
      <div className="flex gap-2">
        <p>{currentInstructionList.length + 1}.</p>
        <input
          type="text"
          placeholder="Write the 1. step of the process..."
          className="border-b-2 w-full outline-none focus:border-black"
          onChange={(e) => setText(e.target.value)}
          value={text}
          id=""
          name=""
        />
      </div>
      <button
        type="button"
        onClick={() => {
          onAdd([...currentInstructionList, { text }]);
          setText("");
        }}
        className="border-2 border-salmon rounded-xl py-1 px-1.5 self-end"
      >
        {" "}
        <img src="/src/assets/icons/Plus.svg" alt="" />
      </button>
    </div>
  );
}
