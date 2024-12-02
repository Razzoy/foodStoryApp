import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScratchCard } from "@/components/CreateCard/ScratchCard/ScratchCard";
import { PhotoCard } from "@/components/CreateCard/PhotoCard/PhotoCard";
import { UrlCard } from "@/components/CreateCard/UrlCard/UrlCard";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export function CreateRecipe() {
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

  const saveData = (e: {
    preventDefault: () => void;
    target: HTMLFormElement | undefined;
  }) => {
    e.preventDefault();

    const data = new FormData(e.target);
    // now move it
    console.log(data.entries());
    data.forEach((d) => console.log(d));
    for (var p of data) {
      let name = p[0];
      let value = p[1];

      console.log(name, value);
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
            <SelectTrigger className="w-[100px]">
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
          <input
            className="outline-none w-[50px]"
            placeholder="Time"
            name="time"
          />
        </div>
      </div>
      <h1 className="text-xl flex justify-center p-6">
        {" "}
        How would you like to add the recipe?{" "}
      </h1>
      <div className="flex flex-col items-center gap-4 ">
        <Accordion type="single" collapsible>
          <AccordionItem className="border-salmon" value="item-1">
            <AccordionTrigger>Create from scratch</AccordionTrigger>
            <AccordionContent>
              <ScratchCard />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Photo</AccordionTrigger>
            <AccordionContent>
              <PhotoCard
                test="second"
                imageUrls={screenShots}
                handleAdd={handleAddScreenShot}
                handleRemoveImage={handleRemoveScreenshot}
              />
              {/* <PhotoCard imageUrl={screenShot ? URL.createObjectURL(screenShot):undefined} handleSelectImage={setScreenShot}/>           */}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>URL</AccordionTrigger>
            <AccordionContent>
              <UrlCard />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <button className="bg-customGreen cursor-pointer border-2 border-customGreen hover:bg-white  hover:border-2 hover: hover:text-black py-1 px-6 rounded-lg">
          Save
        </button>
      </div>
    </form>
  );
}
