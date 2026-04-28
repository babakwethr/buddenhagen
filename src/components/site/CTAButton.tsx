import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "accent" | "dark" | "outline";

const variantClass: Record<Variant, string> = {
  accent: "bg-accent text-accent-foreground hover:bg-[var(--copper-deep)]",
  dark: "bg-foreground text-background hover:bg-foreground/90",
  outline: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
};

type LinkProps = Omit<ComponentProps<typeof Link>, "children"> & { children: ReactNode; variant?: Variant; className?: string };

export function CTAButton({ children, variant = "accent", className, ...rest }: LinkProps) {
  return (
    <Link
      {...rest}
      className={cn(
        "inline-flex items-center gap-2 px-6 py-3.5 text-xs md:text-sm font-display uppercase tracking-wider transition-colors",
        variantClass[variant],
        className,
      )}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}

export function CTAExternal({ href, children, variant = "outline", className }: { href: string; children: ReactNode; variant?: Variant; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 px-6 py-3.5 text-xs md:text-sm font-display uppercase tracking-wider transition-colors",
        variantClass[variant],
        className,
      )}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}