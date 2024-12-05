import { SVGProps } from "react";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type HeartProps = {
  isFavorite: boolean;
  svgprops?: SVGProps<SVGSVGElement>;
  recipeID: string;
};

const HeartIcon = ({ isFavorite, svgprops, recipeID }: HeartProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(isFavorite);

  const toggleFavorite = async (currentFavorite: boolean) => {
    const updatedFavorite = !currentFavorite;

    try {
      // Update Supabase
      const response = await supabase
        .from("Recipes")
        .update({ favorite: updatedFavorite })
        .eq("id", recipeID);

      if (response.error) throw response.error;

      // Update local state
      console.log("updatedFavorite", updatedFavorite);
      setIsLiked(updatedFavorite);
    } catch (error) {
      console.error("Error updating favorite:", error);
    }
  };

  return (
    <button
      className={svgprops?.width ? "" : "absolute z-10 bottom-4 right-4"}
      onClick={async () => {
        await toggleFavorite(isLiked);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 16"
        width={18}
        height={16}
        fill={isLiked ? "#FD7463" : "none"}
        {...svgprops}
      >
        <path
          stroke="#FD7463"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13.167 1C10.5 1 9 3.334 9 4.5 9 3.334 7.5 1 4.833 1 2.167 1 1.5 3.334 1.5 4.5 1.5 10.625 9 15 9 15s7.5-4.375 7.5-10.5c0-1.166-.667-3.5-3.333-3.5Z"
        />
      </svg>
    </button>
  );
};
export default HeartIcon;
