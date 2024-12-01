import HeartIcon from "@/assets/icons/Heart";
import { useState } from "react";

export type CardProps = {
  title?: string;
  time?: string;
  image?: string;
  recipeId?: string;
};

export function Card({ title, time, image, recipeId }: CardProps) {
  const [isLiked, setIsLiked] = useState(false);

  //url('/src/assets/img/Cheeseburgers.png')

  return (
    <div className="relative">
      <a
        className="bg-center bg-cover rounded-xl h-64 flex flex-col justify-end"
        style={{
          backgroundImage: `url(${
            image ?? "/src/assets/img/Cheeseburgers.png"
          })`,
        }}
        href={"/recipe/" + recipeId}
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
            </div>
          </div>
        </div>
      </a>
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute z-10 bottom-4 right-4"
      >
        <HeartIcon fill={isLiked ? "#FD7463" : "none"} />
      </button>
    </div>
  );
}
