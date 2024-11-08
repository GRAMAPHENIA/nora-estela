import { Button } from "@/components/ui/button";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Reemplazo de iconos
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  return (
    <div className="min-h-screen bg-[#f5e6d3] px-8 border-2 container pb-10">
      {/* Sección de cabecera con imagen */}
      <div className="relative">
        <div className="p-4"></div>
        <Image
          width={876.78}
          height={329.78}
          src="/header.svg"
          alt="Imagen del encabezado"
          className="px-8 object-cover w-full"
        />
        {/* Logo centrado dentro de un contenedor circular */}
        <div className="absolute bottom-0 left-1/2 h-[40.5%] w-[11.7%] -translate-x-[81px] translate-y-[50%] transform rounded-full bg-[#6F8090] overflow-hidden"></div>
      </div>

      {/* Sección "Arte en lo cotidiano" centrada */}
      <div className="container mx-auto mt-32 px-4 text-center">
        <h1 className="text-4xl font-bold md:text-6xl">
          Arte en lo cotidiano.
        </h1>
        <p className="text-lg md:text-xl mt-4">
          Explora mis obras y contáctame para más detalles.
        </p>
        <Button className="rounded-full px-6 py-4 text-lg mt-6 bg-[#6F8090] text-[#f5e6d3] hover:bg-[#5A6B7C]">
          Descubrí más
        </Button>

        {/* Redes */}
        {/* <div className="flex justify-center space-x-4 mt-6">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-[#6F8090] text-[#f5e6d3] hover:bg-[#475768]"
          >
            <FaFacebookF className="h-6 w-6 text-[#f5e6d3]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-[#6F8090] text-[#f5e6d3] hover:bg-[#475768]"
          >
            <FaTwitter className="h-6 w-6 text-[#f5e6d3]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-[#6F8090] text-[#f5e6d3] hover:bg-[#475768]"
          >
            <FaInstagram className="h-6 w-6 text-[#f5e6d3]" />
          </Button>
        </div> */}
      </div>

      {/* Sección de "Realizado" ordenada y centrada */}
      <div className="container mx-auto mt-24 px-4 text-center">
        <h2 className="text-5xl font-semibold">Realizado</h2>
        <div className="flex justify-center -space-x-4 mt-4">
          {[1, 2, 3, 4].map((i) => (
            <Avatar key={i}>
              <AvatarImage
                src={`https://placehold.co/40x40?text=U${i}`}
                alt={`User ${i}`}
              />
              <AvatarFallback>U{i}</AvatarFallback>
            </Avatar>
          ))}
          <Avatar>
            <AvatarFallback>+5</AvatarFallback>
          </Avatar>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8 px-60">
          {["O", "A", "I"].map((planet) => (
            <div key={planet} className="text-center">
              <Image
                src={`https://placehold.co/120x120/9ea8ae/ffffff?text=${planet}`}
                height={120}
                width={120}
                className="mx-auto mb-2 rounded-full"
                alt={planet}
              />
              <p className="mb-2 text-sm text-[#f5e6d3]">Explore {planet}</p>
              <Button
                size="icon"
                className="rounded-full bg-[#6F8090] text-[#f5e6d3] hover:bg-[#475768]"
              >
                <ArrowUpRight className="h-4 w-4 " />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de "Obras Destacadas" */}
      <section className="mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-[#333]">
          Obras Destacadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <HoverCard key={i}>
              <HoverCardTrigger asChild>
                <Card className="bg-[#6F8090] text-[#f5e6d3] rounded-lg overflow-hidden">
                  <AspectRatio ratio={16 / 9} className="relative">
                    <Image
                      src={`https://placehold.co/300x200/9ea8ae/ffffff?text=Obra+${i}`}
                      layout="fill"
                      className="object-cover"
                      alt={`Obra ${i}`}
                    />
                  </AspectRatio>
                  <CardHeader className="flex flex-col items-start p-4">
                    <Badge
                      variant="outline"
                      className="bg-[#5A6B7C] text-[#ffe5c4] mb-2 border-none"
                    >
                      Obra {i}
                    </Badge>
                    <CardTitle className="text-xl font-bold">
                      Técnica mixta sobre lienzo
                    </CardTitle>
                    <CardDescription className="text-sm text-[#f5e6d3]">
                      Descripción breve de la obra
                    </CardDescription>
                  </CardHeader>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent
                align="center"
                className="flex justify-center bg-[#6F8090] text-[#f5e6d3] shadow-lg rounded-lg"
              >
                {/* <Button
                variant="outline"
                className="rounded-lg px-6 py-3 bg-[#5A6B7C] text-[#ffe5c4] hover:bg-[#556080] hover:text-[#f5e6d3]"
              >
                Ver detalles
              </Button> */}
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </section>

      {/* Sección de "Próximas Curson" */}
      <section className="mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-[#333]">Próximo Curso</h2>
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
                <Button
                  variant="outline"
                  className="text-[#f5e6d3] hover:bg-[#5A6B7C] hover:text-[#f5e6d3]"
                >
                  Más información
                </Button>
                <span className="flex items-center text-sm text-[#f5e6d3]">
                  <MapPin className="mr-1" /> Galería de Arte Moderno
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="my-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#333]">Contacto</h2>
        <Card className="bg-[#6F8090] text-[#f5e6d3]">
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
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
                className="w-full bg-[#f5e6d3] hover:bg-[#5A6B7C] text-[#6F8090]"
              >
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}

      <section>
        <div className="flex justify-center space-x-4 mt-6">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-[#6F8090] text-[#f5e6d3] hover:bg-[#475768]"
          >
            <FaFacebookF className="h-6 w-6 text-[#f5e6d3]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-[#6F8090] text-[#f5e6d3] hover:bg-[#475768]"
          >
            <FaTwitter className="h-6 w-6 text-[#f5e6d3]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-[#6F8090] text-[#f5e6d3] hover:bg-[#475768]"
          >
            <FaInstagram className="h-6 w-6 text-[#f5e6d3]" />
          </Button>
        </div>
      </section>
    </div>
  );
}
