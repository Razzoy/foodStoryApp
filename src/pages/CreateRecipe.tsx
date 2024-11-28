import { CardApiPlaceholder } from "../components/CardApiPlaceholder/CardApiPlaceholder";
import UploadRecipe from "../components/CardApiPlaceholder/UploadRecipe/UploadRecipe";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ScratchCard } from "@/components/CreateCard/ScratchCard/ScratchCard";
import { PhotoCard } from "@/components/CreateCard/PhotoCard/PhotoCard";
import { UrlCard } from "@/components/CreateCard/UrlCard/UrlCard";

export function CreateRecipe() {
  return (
    <div>
      <CardApiPlaceholder />
      <UploadRecipe />
      <div className="m-8">
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
            <AccordionTrigger>Photo</AccordionTrigger>
            <AccordionContent>
              <PhotoCard />
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
      </div>
    </div>
  );
}
