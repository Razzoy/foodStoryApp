export function Card() {
  return (
    <div className="my-3 bg-[url('/src/assets/img/Cheeseburgers.png')] bg-center bg-cover rounded-xl w-44 h-64 flex flex-col justify-end">
      <div className="bg-gradient-to-t from-lime-800 from 100% rounded-xl h-36 flex flex-col justify-end">
        <div className="p-2 flex flex-col gap-2.5">
          <h3 className="text-white self-stretch text-sm font-semibold">
            Hamburgers
          </h3>
          <div className="flex justify-between pr-4">
            <div className="flex items-center gap-1">
              <img src="/src/assets/icons/Watch.svg" alt="" className="w-3" />
              <p className="text-white text-xs">30 min</p>
            </div>
            <img src="/src/assets/icons/HeartEmpty.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
