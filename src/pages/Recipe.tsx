import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScratchCard } from "@/components/CreateCard/ScratchCard/ScratchCard";
import { PhotoCard } from "@/components/CreateCard/PhotoCard/PhotoCard";
import { UrlCard } from "@/components/CreateCard/UrlCard/UrlCard";
import { Ingredient } from "@/components/RecipeInfo/Ingredient";
import { Instruction } from "@/components/RecipeInfo/Instruction";
import { FetchApi } from "@/components/FetchApi/FetchApi";
import { useParams } from "react-router-dom";
import { useState } from "react";
import HeartIcon from "@/assets/icons/Heart";

export function Recipe() {
  // const id = "4c02fb42-cd45-4c83-a608-6b6cb5b2a764";
  //
  const { id } = useParams();
  console.log(id);

  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="relative">
          <FetchApi>
            {(recipes) => {
              return (
                <img
                  src={recipes?.find((recipe) => recipe.id === id)?.image}
                  className="w-full h-[400px] object-cover object-center"
                />
              );
            }}
          </FetchApi>
          <FetchApi>
            {(recipes) => {
              return (
                <div className="absolute z-10 top-4 right-4 bg-white/50 rounded-lg flex justify-center p-2">
                  <button onClick={() => setIsLiked(!isLiked)}>
                    <HeartIcon
                      fill={
                        recipes?.find((recipe) => recipe.id === id)?.favorite
                          ? "#FD7463"
                          : "none"
                      }
                      height={30}
                      width={30}
                    />
                  </button>
                </div>
              );
            }}
          </FetchApi>
        </div>
        <div className="flex flex-col gap-5 mx-4">
          <FetchApi>
            {(recipes) => {
              return (
                <h1 className="font-Nunito uppercase text-3xl">
                  {recipes?.find((recipe) => recipe.id === id)?.title}
                </h1>
              );
            }}
          </FetchApi>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="flex self-start gap-2 items-center w-full">
                <button onClick={decrement}>
                  <img src="/src/assets/icons/Minus.svg" alt="" />
                </button>
                <FetchApi>
                  {(recipes) => {
                    return (
                      <p className="text-2xl font-Nunito ">
                        {recipes?.find((recipe) => recipe.id === id)?.servings}
                      </p>
                    );
                  }}
                </FetchApi>
                <button onClick={increment}>
                  <img src="/src/assets/icons/Plus.svg" alt="" />
                </button>
              </div>
              <p className="font-Nunito">Serving</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/src/assets/icons/blackWatch.svg" alt="" />
              <FetchApi>
                {(recipes) => {
                  return (
                    <p className="font-Nunito whitespace-nowrap">
                      {recipes?.find((recipe) => recipe.id === id)?.time} min
                    </p>
                  );
                }}
              </FetchApi>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/src/assets/icons/Muscle.svg" alt="" />
              <FetchApi>
                {(recipes) => {
                  return (
                    <p className="font-Nunito">
                      {recipes?.find((recipe) => recipe.id === id)?.difficulty}
                    </p>
                  );
                }}
              </FetchApi>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Accordion type="single" collapsible className="translate-y-5">
            <AccordionItem
              value="item-1"
              className=" border-customGreen pb-7 rounded-none rounded-t-xl w-full"
            >
              <AccordionTrigger className="focus:no-underline text-xl font-Nunito">
                Ingredients
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col">
                  <FetchApi>
                    {(recipes) => {
                      console.log(recipes);
                      if (!recipes.length) {
                        return <div>Loading...</div>;
                      }
                      return (
                        <div className="flex flex-col gap-7 p-4">
                          {recipes
                            ?.filter((recipe) => recipe.id === id)[0]
                            .ingredients.map((ingredient) => (
                              <Ingredient ingredient={ingredient} />
                            ))}
                        </div>
                      );
                    }}
                  </FetchApi>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="z-[1]">
            <AccordionItem
              value="item-1"
              className="bg-customGreen border-none pb-7 rounded-none rounded-t-xl w-full"
            >
              <AccordionTrigger className="focus:no-underline text-xl font-Nunito">
                Instructions
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col">
                  <FetchApi>
                    {(recipes) => {
                      console.log(recipes);
                      if (!recipes.length) {
                        return <div>Loading...</div>;
                      }
                      return (
                        <div className="flex flex-col gap-7 p-4">
                          {recipes
                            ?.filter((recipe) => recipe.id === id)[0]
                            .instructions.map((instruction) => {
                              return (
                                <Instruction
                                  step={instruction.step}
                                  instruction={instruction.instruction}
                                />
                              );
                            })}
                        </div>
                      );
                    }}
                  </FetchApi>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
