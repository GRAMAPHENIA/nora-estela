// Ruta: app/page.tsx

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Sección de cabecera con imagen */}
      <section className="relative">
        <Image
          src="/header/header-tres.png"
          alt="Imagen del encabezado"
          width={1920}
          height={1080}
          className="lg:max-w-7xl lg:h-[400px] object-contain lg:object-fit m-auto mt-4 px-4 lg:mt-10 opacity-80 contrast-100"
        />
        <div className="absolute bottom-0 left-1/2 h-24 w-24 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-amber-200/50 overflow-hidden border-2 border-gray-200/50">
          {/* Aquí puedes agregar un logo o avatar */}
        </div>
      </section>

      {/* Sección "Arte en lo cotidiano" */}
      <section className="container mx-auto mt-32 px-4 text-center">
        <h1 className="text-4xl font-bold md:text-6xl">
          Arte en lo cotidiano.
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Explora mis obras y contactame para más detalles.
        </p>
        <Button className="mt-6 rounded-full bg-[#6F8090] px-6 py-4 text-lg text-[#f5e6d3] hover:bg-[#5A6B7C]">
          contactar
        </Button>
      </section>

      <section className="container mx-auto mt-24 px-4 text-center">
        <h2 className="text-5xl font-semibold">Realizado</h2>

        {/* Avatares desde la carpeta public */}
        <div className="mt-4 flex justify-center -space-x-4">
          {[
            {
              id: 1,
              src: "/seccion-realizado/uno.png",
              alt: "Icono",
            },
            {
              id: 2,
              src: "/seccion-realizado/dos.png",
              alt: "Icono",
            },
            { id: 3, src: "/seccion-realizado/tres.png", alt: "Jarro verde" },
            {
              id: 4,
              src: "/seccion-realizado/cuatro.png",
              alt: "FLores damazco",
            },
          ].map(({ id, src, alt }) => (
            <Avatar key={id}>
              <AvatarImage src={src} alt={alt} />
              <AvatarFallback>U{id}</AvatarFallback>
            </Avatar>
          ))}
          <Avatar>
            <AvatarFallback>+50</AvatarFallback>
          </Avatar>
        </div>

        {/* Categorías con imágenes desde la carpeta public */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 px-4 sm:px-60">
          {[
            {
              letter: "O",
              text: "el Óleo",
              href: "/oleo",
              image: "/seccion-realizado/oleo.png",
            },
            {
              letter: "A",
              text: "el Acrílico",
              href: "/acrilico",
              image: "/seccion-realizado/acrilico.png",
            },
            {
              letter: "I",
              text: "la Iconografía",
              href: "/iconografia",
              image: "/seccion-realizado/uno.png",
            },
          ].map(({ letter, text, href, image }) => (
            <div key={letter} className="text-center">
              <Image
                src={image}
                height={120}
                width={120}
                alt={`${text}`}
                className="mx-auto mb-2 rounded-full object-cover"
              />
              <p className="mb-2 text-sm text-[#6F8090]">Explora {text}</p>
              <Button
                asChild
                size="icon"
                className="rounded-full bg-[#6F8090] text-[#f5e6d3] hover:bg-[#475768]"
              >
                <Link href={href}>
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="sr-only">Explorar {text}</span>
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de "Obras Destacadas" */}
      <section className="mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-[#333]">
          Obras Destacadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-[#6F8090] text-[#f5e6d3]">
              <Image
                src={`https://placehold.co/300x200/9ea8ae/ffffff?text=Obra+${i}`}
                width={300}
                height={200}
                alt={`Obra ${i}`}
                className="w-full object-cover"
              />
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Obra {i}
                </Badge>
                <CardTitle>Técnica mixta sobre lienzo</CardTitle>
                <CardDescription className="text-[#f5e6d3]">
                  Descripción breve de la obra
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Sección de "Próximos Cursos" */}
      <section className="mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-[#333]">Próximos Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <Card key={i} className="bg-[#6F8090] text-[#f5e6d3]">
              <CardHeader>
                <CardTitle>Clase {i}</CardTitle>
                <CardDescription className="flex items-center text-[#f5e6d3]">
                  <Calendar className="mr-2" /> 15 de Junio, 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Una muestra de mis últimas creaciones inspiradas en la
                  naturaleza urbana.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button variant="secondary">Más información</Button>
                <span className="flex items-center text-sm">
                  <MapPin className="mr-1" /> Galería de Arte Moderno
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="mt-20 pb-20 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#333]">Contacto</h2>
        <Card className="bg-[#6F8090] text-[#f5e6d3]">
          <CardContent className="pt-6">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Nombre"
                  className="bg-[#f5e6d3] text-[#6F8090]"
                />
                <Input
                  placeholder="Email"
                  type="email"
                  className="bg-[#f5e6d3] text-[#6F8090]"
                />
              </div>
              <Input
                placeholder="Asunto"
                className="bg-[#f5e6d3] text-[#6F8090]"
              />
              <Textarea
                placeholder="Mensaje"
                rows={4}
                className="bg-[#f5e6d3] text-[#6F8090]"
              />
              <Button
                type="submit"
                className="w-full bg-[#f5e6d3] text-[#6F8090] hover:bg-[#e0d1be]"
              >
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
