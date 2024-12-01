import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

type Recipe = {
  id: string;
  title: string;
  time: number;
  difficulty: string;
  ingredients: { item: string; amount: number; unit: string }[];
  instructions: { step: number; instruction: string }[];
  image: string;
  user_id: number;
  favorite: boolean;
  servings: number;
};

export function FetchApi({
  children,
}: {
  children: (recipes: Recipe[]) => JSX.Element;
}) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      const { data, error } = await supabase.from("Recipes").select();

      if (error) {
        console.error(`Error fetching recipes: ${error.message}`);
      } else if (data) {
        setRecipes(data as Recipe[]);
      }
      // } else {
      //     if (data && Array.isArray(data)) {
      //         setRecipes(data);
      //     } else {
      //         console.warn("Unexpected data format:", data);
      //     }
      // }
    };

    getRecipes();
  }, []);

  useEffect(() => {
    console.log("recipes", recipes);
  }, [recipes]);

  return children(recipes);
}
