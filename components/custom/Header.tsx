"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const sections = [
  {
    title: "Inicio",
    href: "/",
    description: "Descubre las obras y el estilo del artista.",
  },
  {
    title: "Oleo",
    href: "/oleo",
    description: "Explora las obras de óleo, acrílico y acuarela.",
  },
  {
    title: "Acrilico",
    href: "/acrilico",
    description: "Participa en un curso de iconografía y técnicas de pintura.",
  },
  {
    title: "Iconografia",
    href: "/iconografia",
    description: "Conéctate para más información o consultas.",
  },
];

export function Header() {
  return (
    <section className="hidden lg:block justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          {sections.map((section) => (
            <NavigationMenuItem key={section.title}>
              <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]">
                  <ListItem href={section.href} title={section.title}>
                    {section.description}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
