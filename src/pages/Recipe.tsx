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

export function Recipe() {
  const id = "4c02fb42-cd45-4c83-a608-6b6cb5b2a764";

  return (
    <>
      <div className="flex flex-col justify-center w-full">
        <img src=""></img>
        <h1 className="font-Nunito p-8 text-4xl">Title</h1>
        <div>
          <div className="flex flex-center gap-28 justify-center">
            <div className="flex flex-col items-center">
              <div className=" flex ">
                <img className="w-4" src="src/assets/icons/Minus.svg"></img>
                <p className="text-2xl font-Nunito ">2</p>
                <img className="w-4" src="src/assets/icons/Plus.svg"></img>
              </div>
              <p className="font-Nunito">Serving</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-8 " src="src/assets/icons/blackWatch.svg"></img>
              <p className="font-Nunito">Min</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-8" src="src/assets/icons/Muscle.svg"></img>
              <p className="font-Nunito">Easy</p>
            </div>
          </div>
          <div className="m-10 flex flex-col gap-10">
            <Accordion type="single" collapsible className="">
              <AccordionItem
                value="item-1"
                className=" border-customGreen pb-7 rounded-none rounded-t-xl"
              >
                <AccordionTrigger>Ingredients</AccordionTrigger>
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
            <Accordion type="single" collapsible className="">
              <AccordionItem
                value="item-1"
                className="bg-customGreen border-none pb-7 rounded-none rounded-t-xl"
              >
                <AccordionTrigger>Instructions</AccordionTrigger>
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
                              .instructions.map((instruction, index) => (
                                <Instruction
                                  instruction={instruction}
                                  index={index + 1}
                                />
                              ))}
                          </div>
                        );
                      }}
                    </FetchApi>
                  </div>
                  <div className="flex gap-2">
                    <p>1.</p>
                    <p>Turn the oven up to 180 degree</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
