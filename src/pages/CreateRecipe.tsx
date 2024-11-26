import { UrlCard } from "@/components/CreateCard/UrlCard/UrlCard";
import { ScratchCard } from "@/components/CreateCard/ScratchCard/ScratchCard";
import { PhotoCard } from "@/components/CreateCard/PhotoCard/PhotoCard";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CreateRecipe() {

  return (
    <div className="p-20 flex flex-col gap-5">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Add recipe using URL link</AccordionTrigger>
          <AccordionContent>
            <UrlCard />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Create from scratch</AccordionTrigger>
          <AccordionContent>
            <ScratchCard />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Add a photo of recipe</AccordionTrigger>
          <AccordionContent>
            <PhotoCard />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
