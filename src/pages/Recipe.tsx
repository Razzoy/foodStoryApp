// // import {
// //   Accordion,
// //   AccordionContent,
// //   AccordionItem,
// //   AccordionTrigger,
// // } from "@/components/ui/accordion";
// // import { ScratchCard } from "@/components/CreateCard/ScratchCard/ScratchCard";
// // import { PhotoCard } from "@/components/CreateCard/PhotoCard/PhotoCard";
// // import { UrlCard } from "@/components/CreateCard/UrlCard/UrlCard";
// // import { Ingredient } from "@/components/RecipeInfo/Ingredient";
// // import { Instruction } from "@/components/RecipeInfo/Instruction";
// // import { FetchApi } from "@/components/FetchApi/FetchApi";
// // import { useParams } from "react-router-dom";
// // import { useState } from "react";
// // import HeartIcon from "@/assets/icons/Heart";

// // export function Recipe() {
// //   // const id = "4c02fb42-cd45-4c83-a608-6b6cb5b2a764";
// //   //
// //   const { id } = useParams();
// //   console.log(id);

// //   const [count, setCount] = useState(0);
// //   function increment() {
// //     setCount(count + 1);
// //   }

// //   function decrement() {
// //     setCount(count - 1);
// //   }
// //   const [isLiked, setIsLiked] = useState(false);

// //   return (
// //     <>
// //       <div className="flex flex-col gap-5">
// //         <div className="relative">
// //           <FetchApi>
// //             {(recipes) => {
// //               return (
// //                 <img
// //                   src={recipes?.find((recipe) => recipe.id === id)?.image}
// //                   className="w-full h-[400px] object-cover object-center"
// //                 />
// //               );
// //             }}
// //           </FetchApi>
// //           <FetchApi>
// //             {(recipes) => {
// //               return (
// //                 <div className="absolute z-10 top-4 right-4 bg-white/50 rounded-lg flex justify-center p-2">
// //                   <button id="Supabase" onClick={() => setIsLiked(!isLiked)}>
// //                     <HeartIcon
// //                       fill={
// //                         recipes?.find((recipe) => recipe.id === id)?.favorite
// //                           ? "#FD7463"
// //                           : "none"
// //                       }
// //                       height={30}
// //                       width={30}
// //                     />
// //                   </button>
// //                 </div>
// //               );
// //             }}
// //           </FetchApi>
// //         </div>
// //         <div className="flex flex-col gap-5 mx-4">
// //           <FetchApi>
// //             {(recipes) => {
// //               return (
// //                 <h1 className="font-Nunito uppercase text-3xl">
// //                   {recipes?.find((recipe) => recipe.id === id)?.title}
// //                 </h1>
// //               );
// //             }}
// //           </FetchApi>
// //           <div className="flex flex-row items-center justify-between">
// //             <div className="flex flex-col items-center">
// //               <div className="flex self-start gap-2 items-center w-full">
// //                 <button onClick={decrement}>
// //                   <img src="/src/assets/icons/Minus.svg" alt="" />
// //                 </button>
// //                 <FetchApi>
// //                   {(recipes) => {
// //                     return (
// //                       <p className="text-2xl font-Nunito ">
// //                         {recipes?.find((recipe) => recipe.id === id)?.servings}
// //                       </p>
// //                     );
// //                   }}
// //                 </FetchApi>
// //                 <button onClick={increment}>
// //                   <img src="/src/assets/icons/Plus.svg" alt="" />
// //                 </button>
// //               </div>
// //               <p className="font-Nunito">Serving</p>
// //             </div>
// //             <div className="flex flex-col items-center gap-2">
// //               <img src="/src/assets/icons/blackWatch.svg" alt="" />
// //               <FetchApi>
// //                 {(recipes) => {
// //                   return (
// //                     <p className="font-Nunito whitespace-nowrap">
// //                       {recipes?.find((recipe) => recipe.id === id)?.time} min
// //                     </p>
// //                   );
// //                 }}
// //               </FetchApi>
// //             </div>
// //             <div className="flex flex-col items-center gap-2">
// //               <img src="/src/assets/icons/Muscle.svg" alt="" />
// //               <FetchApi>
// //                 {(recipes) => {
// //                   return (
// //                     <p className="font-Nunito">
// //                       {recipes?.find((recipe) => recipe.id === id)?.difficulty}
// //                     </p>
// //                   );
// //                 }}
// //               </FetchApi>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="flex flex-col">
// //           <Accordion type="single" collapsible className="translate-y-5">
// //             <AccordionItem
// //               value="item-1"
// //               className=" border-customGreen pb-7 rounded-none rounded-t-xl w-full"
// //             >
// //               <AccordionTrigger className="focus:no-underline text-xl font-Nunito">
// //                 Ingredients
// //               </AccordionTrigger>
// //               <AccordionContent>
// //                 <div className="flex flex-col">
// //                   <FetchApi>
// //                     {(recipes) => {
// //                       console.log(recipes);
// //                       if (!recipes.length) {
// //                         return <div>Loading...</div>;
// //                       }
// //                       return (
// //                         <div className="flex flex-col gap-7 p-4">
// //                           {recipes
// //                             ?.filter((recipe) => recipe.id === id)[0]
// //                             .ingredients.map((ingredient) => (
// //                               <Ingredient ingredient={ingredient} />
// //                             ))}
// //                         </div>
// //                       );
// //                     }}
// //                   </FetchApi>
// //                 </div>
// //               </AccordionContent>
// //             </AccordionItem>
// //           </Accordion>
// //           <Accordion type="single" collapsible className="z-[1]">
// //             <AccordionItem
// //               value="item-1"
// //               className="bg-customGreen border-none pb-7 rounded-none rounded-t-xl w-full"
// //             >
// //               <AccordionTrigger className="focus:no-underline text-xl font-Nunito">
// //                 Instructions
// //               </AccordionTrigger>
// //               <AccordionContent>
// //                 <div className="flex flex-col">
// //                   <FetchApi>
// //                     {(recipes) => {
// //                       console.log(recipes);
// //                       if (!recipes.length) {
// //                         return <div>Loading...</div>;
// //                       }
// //                       return (
// //                         <div className="flex flex-col gap-7 p-4">
// //                           {recipes
// //                             ?.filter((recipe) => recipe.id === id)[0]
// //                             .instructions.map((instruction) => {
// //                               return (
// //                                 <Instruction
// //                                   step={instruction.step}
// //                                   instruction={instruction.instruction}
// //                                 />
// //                               );
// //                             })}
// //                         </div>
// //                       );
// //                     }}
// //                   </FetchApi>
// //                 </div>
// //               </AccordionContent>
// //             </AccordionItem>
// //           </Accordion>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

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
import HeartIcon from "@/assets/icons/Heart";
import { supabase } from "@/lib/supabaseClient";

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
                      <img src="/src/assets/icons/Minus.svg" alt="Decrease" />
                    </button>
                    <p className="text-2xl font-Nunito">{serving}</p>
                    <button onClick={handleIncrement}>
                      <img src="/src/assets/icons/Plus.svg" alt="Increase" />
                    </button>
                  </div>
                  <p className="font-Nunito">Serving</p>
                </div>
                {/* Time */}
                <div className="flex flex-col items-center gap-2">
                  <img src="/src/assets/icons/blackWatch.svg" alt="Time" />
                  <p className="font-Nunito whitespace-nowrap">
                    {recipe.time} min
                  </p>
                </div>
                {/* Difficulty */}
                <div className="flex flex-col items-center gap-2">
                  <img src="/src/assets/icons/Muscle.svg" alt="Difficulty" />
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
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Ingredient } from "@/components/RecipeInfo/Ingredient";
// import { Instruction } from "@/components/RecipeInfo/Instruction";
// import { FetchApi } from "@/components/FetchApi/FetchApi";
// import { useParams } from "react-router-dom";
// import { useRecipeActions } from "@/lib/useRecipeActions"; // Import the custom hook
// import HeartIcon from "@/assets/icons/Heart";

// export function Recipe() {
//   const { id } = useParams<{ id: string }>(); // Get the `id` parameter from the URL

//   const { isLiked, serving, toggleFavorite, updateServings } = useRecipeActions(
//     id!
//   ); // Use the custom hook

//   return (
//     <FetchApi>
//       {(recipes) => {
//         const recipe = recipes.find((r) => r.id === id);

//         if (!recipe) return <div>Loading...</div>;

//         const handleIncrement = () => {
//           const newServings = serving + 1;
//           updateServings(id!, newServings);
//         };

//         const handleDecrement = () => {
//           if (serving > 1) {
//             const newServings = serving - 1;
//             updateServings(id!, newServings);
//           }
//         };

//         return (
//           <div className="flex flex-col gap-3">
//             {/* Recipe Image and Like Button */}
//             <div className="relative">
//               <img
//                 src={recipe.image}
//                 className="w-full h-[400px] object-cover object-center"
//                 alt={recipe.title}
//               />
//               <div className="absolute z-10 top-4 right-4 bg-white/50 rounded-lg flex justify-center p-2">
//                 <button
//                   onClick={async () => {
//                     await toggleFavorite(recipe.id, isLiked);
//                   }}
//                 >
//                   <HeartIcon
//                     fill={isLiked ? "#FD7463" : "none"}
//                     height={30}
//                     width={30}
//                   />
//                 </button>
//               </div>
//             </div>

//             {/* Recipe Title and Meta */}
//             <div className="flex flex-col gap-5 mx-4">
//               <h1 className="font-Nunito uppercase text-3xl">{recipe.title}</h1>
//               <div className="flex flex-row items-center justify-between">
//                 {/* Servings */}
//                 <div className="flex flex-col items-center">
//                   <div className="flex self-start gap-2 items-center w-full">
//                     <button onClick={handleDecrement}>
//                       <img src="/src/assets/icons/Minus.svg" alt="Decrease" />
//                     </button>
//                     <p className="text-2xl font-Nunito">{serving}</p>
//                     <button onClick={handleIncrement}>
//                       <img src="/src/assets/icons/Plus.svg" alt="Increase" />
//                     </button>
//                   </div>
//                   <p className="font-Nunito">Serving</p>
//                 </div>
//                 {/* Time */}
//                 <div className="flex flex-col items-center gap-2">
//                   <img src="/src/assets/icons/blackWatch.svg" alt="Time" />
//                   <p className="font-Nunito whitespace-nowrap">
//                     {recipe.time} min
//                   </p>
//                 </div>
//                 {/* Difficulty */}
//                 <div className="flex flex-col items-center gap-2">
//                   <img src="/src/assets/icons/Muscle.svg" alt="Difficulty" />
//                   <p className="font-Nunito">{recipe.difficulty}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Ingredients and Instructions */}
//             <div className="flex flex-col">
//               <Accordion type="single" collapsible className="translate-y-5">
//                 <AccordionItem
//                   value="item-1"
//                   className="border-customGreen pb-7 rounded-none rounded-t-xl w-full"
//                 >
//                   <AccordionTrigger className="focus:no-underline text-xl font-Nunito">
//                     Ingredients
//                   </AccordionTrigger>
//                   <AccordionContent>
//                     <div className="flex flex-col gap-7 p-4">
//                       {recipe.ingredients.map((ingredient) => (
//                         <Ingredient
//                           ingredient={ingredient}
//                           key={ingredient.item}
//                         />
//                       ))}
//                     </div>
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//               <Accordion type="single" collapsible className="z-[1]">
//                 <AccordionItem
//                   value="item-2"
//                   className="bg-customGreen border-none pb-7 rounded-none rounded-t-xl w-full"
//                 >
//                   <AccordionTrigger className="focus:no-underline text-xl font-Nunito">
//                     Instructions
//                   </AccordionTrigger>
//                   <AccordionContent>
//                     <div className="flex flex-col gap-7 p-4">
//                       {recipe.instructions.map((instruction) => (
//                         <Instruction
//                           step={instruction.step}
//                           instruction={instruction.instruction}
//                           key={instruction.step}
//                         />
//                       ))}
//                     </div>
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//             </div>
//           </div>
//         );
//       }}
//     </FetchApi>
//   );
// }
