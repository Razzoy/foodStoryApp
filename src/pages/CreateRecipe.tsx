import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AccordionComponent } from "@/components/AccordionComponent/AccordionComponent";
import { ScratchCard } from "@/components/CreateCard/ScratchCard/ScratchCard";
import { PhotoCard } from "@/components/CreateCard/PhotoCard/PhotoCard";
import { UrlCard } from "@/components/CreateCard/UrlCard/UrlCard";
import { useState, FormEvent } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export function CreateRecipe() {
  const navigate = useNavigate();
  const [mealImage, setMealImage] = useState<string[]>([]);
  const [screenShots, setScreenShots] = useState<string[]>([]);
  // const [imageUrls, setImageUrls]= useState<string[]>([]);

  //code for meal image
  const handleAddImages = (image: string) => {
    console.log(image);
    setMealImage((prev) => [...prev, image]);
  };

  const handleRemoveImage = (indexToRemove: number) => {
    const newScreenshots = mealImage.filter(
      (mealImage, index) => index !== indexToRemove
    );
    setMealImage(newScreenshots);
  };
  // const imageUrls = mealImage.map((file)=>URL.createObjectURL(file))

  //code for screen shots
  const handleAddScreenShot = (image: string) => {
    setScreenShots((prev) => [...prev, image]);
  };

  const handleRemoveScreenshot = (indexToRemove: number) => {
    const newScreenshots = screenShots.filter(
      (screenShot, index) => index !== indexToRemove
    );
    setScreenShots(newScreenshots);
  };
  // const screenShotUrls = screenShots.map((file)=>URL.createObjectURL(file))

  // const test = "kalli"

  //   const handleImg=

  const saveData = (e: FormEvent) => {
    e.preventDefault();

    console.log("form submitted");

    const data = new FormData(e.target as HTMLFormElement);

    let obj = Object.fromEntries(data.entries());
    obj.ingredients = JSON.parse(obj.ingredients.toString());
    obj.instruction = JSON.parse(obj.instruction.toString());

    console.log("obj:", obj);
    AddNewRecipeToSupabase(obj);
  };

  const AddNewRecipeToSupabase = async (obj: {
    [k: string]: FormDataEntryValue;
  }) => {
    try {
      // Update Supabase
      const response = await supabase.from("Recipes").insert({
        title: obj.title,
        time: obj.time,
        difficulty: obj.select,
        ingredients: obj.ingredients,
        instructions: obj.instruction,
        image: "",
        servings: obj.servings,
      });

      if (response.error) throw response.error;

      // redirect on success
      if (response.status === 201) {
        navigate("/myRecipes");
      }
    } catch (error) {
      console.error("Error updating favorite:", error);
    }
  };
  return (
    <form onSubmit={saveData}>
      <PhotoCard
        test="first"
        imageUrls={mealImage}
        handleAdd={handleAddImages}
        handleRemoveImage={handleRemoveImage}
      />
      <input
        name="title"
        className="outline-none text-3xl p-8"
        placeholder="Title"
      />
      <div className="flex flex-center justify-center  gap-28  ">
        <div className=" flex flex-col items-center">
          <img
            className="flex -center w-12 p-2"
            src="/src/assets/icons/Muscle.svg"
          />
          <Select name="select">
            <SelectTrigger type="button" className="w-[100px]">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className=" flex flex-col items-center">
          <img className="w-12 p-2" src="/src/assets/icons/blackWatch.svg" />
          <div className="flex gap-1">
            <input
              className="outline-salmon w-[50px] text-center border-b-2 border-salmon focus:border-none"
              placeholder="0"
              name="time"
            />
            <p>min</p>
          </div>
        </div>
      </div>
      <h1 className="text-xl flex justify-center p-6">
        {" "}
        How would you like to add the recipe?{" "}
      </h1>
      <div className="flex flex-col items-center gap-4 mb-10">
        <AccordionComponent title="Create from scratch">
          <ScratchCard />
        </AccordionComponent>
        <AccordionComponent title="Add a photo of recipe">
          <PhotoCard
            test="second"
            imageUrls={screenShots}
            handleAdd={handleAddScreenShot}
            handleRemoveImage={handleRemoveScreenshot}
          />
        </AccordionComponent>
        <AccordionComponent title="Add recipe with URL link">
          <UrlCard />
        </AccordionComponent>
        <button
          type="submit"
          className="bg-customGreen cursor-pointer border-2 border-customGreen hover:bg-white  hover:border-2 hover: hover:text-black py-1 px-6 rounded-lg"
        >
          Save
        </button>
      </div>
    </form>
  );
}
