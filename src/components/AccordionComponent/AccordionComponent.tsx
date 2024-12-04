import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { ReactNode } from "react";
  
  interface AccordionComponentProps {
    title: string;
    children: ReactNode;
  }
  
  export function AccordionComponent({ title, children }: AccordionComponentProps) {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger type="button">{title}</AccordionTrigger>
          <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }