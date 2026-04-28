import { Reveal } from "./Reveal";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro?: string; children?: ReactNode }) {
  return (
    <section className="border-b border-border">
      <div className="container-page pt-16 pb-20 md:pt-28 md:pb-28">
        <Reveal>
          {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
          <h1 className="display-lg max-w-4xl">{title}</h1>
          {intro && <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">{intro}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}