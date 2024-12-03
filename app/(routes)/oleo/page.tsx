import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Oleo() {
  const obras = [
    {
      id: 1,
      titulo: "Atardecer en la ciudad",
      año: 2023,
      descripcion:
        "Una vista panorámica de la ciudad al atardecer, con tonos cálidos y reflejos en los edificios.",
    },
    {
      id: 2,
      titulo: "Retrato de la soledad",
      año: 2022,
      descripcion:
        "Un retrato emotivo que captura la esencia de la soledad humana en un entorno urbano.",
    },
    {
      id: 3,
      titulo: "Naturaleza viva",
      año: 2024,
      descripcion:
        "Un vibrante bodegón que celebra la belleza de la naturaleza con frutas y flores exóticas.",
    },
    {
      id: 4,
      titulo: "Abstracción en azul",
      año: 2021,
      descripcion:
        "Una exploración abstracta de formas y tonalidades azules, evocando sensaciones de calma y profundidad.",
    },
    {
      id: 5,
      titulo: "Paisaje onírico",
      año: 2023,
      descripcion:
        "Un paisaje surrealista que mezcla elementos naturales con visiones oníricas.",
    },
    {
      id: 6,
      titulo: "Estudio de luz",
      año: 2022,
      descripcion:
        "Un estudio detallado de cómo la luz interactúa con diferentes objetos y texturas.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Galería de Óleo</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sobre mis obras en óleo</h2>
        <p className="text-lg mb-4">
          Mis pinturas al óleo son una exploración de color, luz y emoción. Cada
          pieza es el resultado de horas de trabajo meticuloso, capas de
          pigmento aplicadas con precisión para crear profundidad y textura. A
          través de esta técnica tradicional, busco capturar la esencia de mis
          sujetos, ya sean paisajes urbanos, naturalezas muertas o retratos
          emotivos.
        </p>
        <p className="text-lg mb-4">
          El óleo me permite jugar con la luminosidad y la opacidad, creando
          obras que invitan al espectador a sumergirse en un mundo de matices y
          sensaciones. Cada pincelada es una decisión consciente, una parte
          integral de la narrativa visual que quiero contar.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {obras.map((obra) => (
          <Card key={obra.id} className="bg-[#6F8090] text-[#f5e6d3]">
            <Image
              src={`https://placehold.co/600x400/9ea8ae/ffffff?text=Óleo+${obra.id}`}
              width={600}
              height={400}
              alt={obra.titulo}
              className="w-full object-cover"
            />
            <CardHeader>
              <Badge variant="secondary" className="w-fit">
                {obra.año}
              </Badge>
              <CardTitle>{obra.titulo}</CardTitle>
              <CardDescription className="text-[#f5e6d3]">
                Óleo sobre lienzo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{obra.descripcion}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Proceso creativo</h2>
        <p className="text-lg mb-4">
          Mi proceso para crear una pintura al óleo comienza con bocetos y
          estudios de composición. Luego, preparo el lienzo con una base que
          complementará los colores finales. La pintura en sí es un proceso de
          construcción gradual, comenzando con las formas básicas y añadiendo
          detalle y profundidad con cada sesión.
        </p>
        <Button className="mt-4">Descubre más sobre mi proceso</Button>
      </section>
    </div>
  );
}
