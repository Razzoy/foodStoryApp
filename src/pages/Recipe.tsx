import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Ingredient } from "@/components/RecipeInfo/Ingredient";
import { Instruction } from "@/components/RecipeInfo/Instruction";
import { FetchApi } from "@/components/FetchApi/FetchApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HeartIcon from "@/components/HeartIcon/HeartIcon";
import { supabase } from "@/lib/supabaseClient";
import plus from "@/assets/icons/Plus.svg";
import minus from "@/assets/icons/Minus.svg";
import clock from "@/assets/icons/blackWatch.svg";
import muscle from "@/assets/icons/Muscle.svg";


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

export function Recipe() {
  const { id } = useParams<{ id: string }>(); // Get the `id` parameter from the URL
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [serving, setServing] = useState<number>(0);

  useEffect(() => {
    const fetchFavorite = async () => {
      try {
        const { data, error } = await supabase
          .from("Recipes")
          .select("favorite, servings")
          .eq("id", id);

        if (error) throw error;

        if (data && data.length > 0) {
          setIsLiked(data[0].favorite);
          setServing(data[0].servings);
        }
      } catch (error) {
        console.error("Error fetching favorite:", error);
      }
    };

    fetchFavorite();
  }, [id]);

  const updateServings = async (recipeId: string, newServings: number) => {
    try {
      const { error } = await supabase
        .from("Recipes")
        .update({ servings: newServings })
        .eq("id", recipeId);

      if (error) throw error;

      setServing(newServings);
    } catch (error) {
      console.error("Error updating servings:", error);
    }
  };

  return (
    <FetchApi>
      {(recipes: Recipe[]) => {
        const recipe = recipes.find((r) => r.id === id);

        if (!recipe) return <div>Loading...</div>;

        const handleIncrement = () => {
          const newServings = serving + 1;
          updateServings(id!, newServings);
        };

        const handleDecrement = () => {
          if (recipe.servings > 1) {
            const newServings = serving - 1;
            updateServings(id!, newServings);
          }
        };

        console.log("recipe bitch", recipe);

        return (
          <div className="flex flex-col gap-3">
            {/* Recipe Image and Like Button */}
            <div className="relative">
              <img
                src={recipe.image}
                className="w-full h-[400px] object-cover object-center"
                alt={recipe.title}
              />
              <div className="absolute z-10 top-4 right-4 bg-white/50 rounded-lg flex justify-center p-2">
                <HeartIcon
                  recipeID={recipe.id}
                  isFavorite={isLiked}
                  svgprops={{
                    height: 30,
                    width: 30,
                  }}
                />
              </div>
            </div>

            {/* Recipe Title and Meta */}
            <div className="flex flex-col gap-5 mx-4">
              <h1 className="font-Nunito uppercase text-3xl">{recipe.title}</h1>
              <div className="flex flex-row items-center justify-between">
                {/* Servings */}
                <div className="flex flex-col items-center">
                  <div className="flex self-start gap-2 items-center w-full">
                    <button onClick={handleDecrement}>
                      <img src={minus} alt="Decrease" />
                    </button>
                    <p className="text-2xl font-Nunito">{serving}</p>
                    <button onClick={handleIncrement}>
                      <img src={plus} alt="Increase" />
                    </button>
                  </div>
                  <p className="font-Nunito">Serving</p>
                </div>
                {/* Time */}
                <div className="flex flex-col items-center gap-2">
                  <img src={clock} alt="Time" />
                  <p className="font-Nunito whitespace-nowrap">
                    {recipe.time} min
                  </p>
                </div>
                {/* Difficulty */}
                <div className="flex flex-col items-center gap-2">
                  <img src={muscle} alt="Difficulty" />
                  <p className="font-Nunito">{recipe.difficulty}</p>
                </div>
              </div>
            </div>

            {/* Ingredients and Instructions */}
            <div className="flex flex-col">
              <Accordion type="single" collapsible className="translate-y-5">
                <AccordionItem
                  value="item-1"
                  className="border-customGreen pb-7 rounded-none rounded-t-xl w-full"
                >
                  <AccordionTrigger className="focus:no-underline text-xl font-Nunito">
                    Ingredients
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-7 p-4">
                      {recipe.ingredients.map((ingredient) => (
                        <Ingredient
                          ingredient={ingredient}
                          key={ingredient.item}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="z-[1]">
                <AccordionItem
                  value="item-2"
                  className="bg-customGreen border-none pb-7 rounded-none rounded-t-xl w-full"
                >
                  <AccordionTrigger className="focus:no-underline text-xl font-Nunito">
                    Instructions
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-7 p-4">
                      {recipe.instructions.map((instruction) => (
                        <Instruction
                          step={instruction.step}
                          instruction={instruction.instruction}
                          key={instruction.step}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        );
      }}
    </FetchApi>
  );
}