export function AddInstruction() {
  return (
    <div className="flex gap-2 self-stretch text-sm">
      <p>1.</p>
      <input
        type="text"
        placeholder="Write the 1. step of the process..."
        className="border-b-2 w-full outline-none focus:border-black"
      />
    </div>
  );
}
