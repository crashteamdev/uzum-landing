"use client";

import React, { ReactNode, useState } from "react";
import { AppAccordion } from "@/shared/components/AppAccordion";
import { clsx } from "clsx";

type T = {
  categoryId?: number | null | undefined;
  content?: string | undefined | null;
  id: number;
  name: string;
  description?: string | null;
  children?: T[];
};
type Props<T> = {
  items: T[];
  accordionContentSlot: (item: T) => ReactNode;
  isFirstOpen?: boolean;
  uncontrolled?: boolean;
  className?: string;
  titleSize?: "default" | "big" | "large";
};

export const AppAccordionGroup: React.FC<Props<T>> = ({
  items,
  accordionContentSlot,
  titleSize = "default",
  className = "",
  isFirstOpen = true,
  uncontrolled = false
}) => {
  const [activeItemId, setActiveItemId] = useState<number | null>(
    isFirstOpen ? items[0]?.id ?? null : null
  );

  return (
    <div className={clsx("flex flex-col gap-6", className)}>
      {items.map((item) => (
        <AppAccordion
          key={item.id}
          open={activeItemId === item.id}
          setOpen={() => setActiveItemId(activeItemId === item.id ? null : item.id)}
          title={item.name ?? ""}
          description={item.description || ""}
          titleSize={titleSize}
          uncontrolled={uncontrolled}
        >
          {accordionContentSlot(item)}
        </AppAccordion>
      ))}
    </div>
  );
};
