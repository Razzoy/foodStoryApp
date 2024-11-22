import { UrlCard } from "@/components/CreateCard/UrlCard/UrlCard";
import { CreateCard } from "../components/CreateCard/CreateCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScratchCard } from "@/components/CreateCard/ScratchCard/ScratchCard";

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
    </div>
  );
}
