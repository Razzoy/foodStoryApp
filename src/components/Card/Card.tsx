import { useState } from "react";

export type CardProps = {
  title?: string;
  time?: string;
  image?: string;
};

export function Card({ title, time, image }: CardProps) {
  const [isLiked, setIsLiked] = useState(false);

  //url('/src/assets/img/Cheeseburgers.png')

  return (
    <div
      className="bg-center bg-cover rounded-xl w-44 h-64 flex flex-col justify-end"
      style={{
        backgroundImage: `url(${image ?? "/src/assets/img/Cheeseburgers.png"})`,
      }}
    >
      <div className="bg-gradient-to-t from-lime-800 from 100% rounded-xl h-36 flex flex-col justify-end">
        <div className="p-2 flex flex-col">
          <h3 className="text-white self-stretch text-sm font-semibold ml-2">
            {title ?? "Cheeseburgers"}

          </h3>
          <div className="flex justify-between p-2">
            <div className="flex items-center gap-1">
              <img src="/src/assets/icons/Watch.svg" alt="" className="w-3" />
              <p className="text-white text-xs">{time ?? "30 min"}</p>
            </div>
            <button onClick={() => setIsLiked(!isLiked)}>
              {" "}
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill={isLiked ? "#FD7463" : "none"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M13.1667 1C10.5 1 9 3.33363 9 4.5C9 3.33363 7.5 1 4.83333 1C2.16667 1 1.5 3.33363 1.5 4.5C1.5 10.625 9 15 9 15C9 15 16.5 10.625 16.5 4.5C16.5 3.33363 15.8333 1 13.1667 1Z"
                  stroke="#FD7463"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
