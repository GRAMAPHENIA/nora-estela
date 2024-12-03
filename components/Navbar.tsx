// Ruta: components/Navbar.tsx
// Este componente representa la barra de navegación principal

"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Header } from "./custom/Header";

const NavItems = () => (
  <>
    <Button asChild variant="ghost">
      <Link href="/" className="text-[#f5e6d3]">
        Inicio
      </Link>
    </Button>
    <Button asChild variant="ghost">
      <Link href="/oleo" className="text-[#f5e6d3]">
        Óleo
      </Link>
    </Button>
    <Button asChild variant="ghost">
      <Link href="/acrilico" className="text-[#f5e6d3]">
        Acrílico
      </Link>
    </Button>
    <Button asChild variant="ghost">
      <Link href="/ilustracion" className="text-[#f5e6d3]">
        Ilustración
      </Link>
    </Button>
  </>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-card p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-[#f5e6d3] text-2xl font-bold">
          Logo
        </Link>

        {/* Navegacion */}
        <Header />

        <div className="hidden md:flex space-x-4">Redes</div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[240px] sm:w-[300px] bg-[#6F8090]"
          >
            <nav className="flex flex-col space-y-4 mt-4">
              <NavItems />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
