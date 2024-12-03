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

export default function Ilustracion() {
  const obras = [
    {
      id: 1,
      titulo: "Fantasía urbana",
      año: 2023,
      descripcion:
        "Una ilustración que mezcla elementos de la ciudad con criaturas fantásticas, creando un mundo surrealista.",
    },
    {
      id: 2,
      titulo: "Retratos imaginarios",
      año: 2022,
      descripcion:
        "Una serie de retratos de personajes ficticios, cada uno con su propia historia y personalidad única.",
    },
    {
      id: 3,
      titulo: "Mundos oníricos",
      año: 2024,
      descripcion:
        "Un paisaje onírico que invita al espectador a perderse en un mundo de sueños y fantasía.",
    },
    {
      id: 4,
      titulo: "Naturaleza surrealista",
      año: 2021,
      descripcion:
        "Una exploración de la naturaleza desde una perspectiva surrealista, con plantas y animales reimaginados.",
    },
    {
      id: 5,
      titulo: "Viaje en el tiempo",
      año: 2023,
      descripcion:
        "Una ilustración que fusiona diferentes épocas históricas en una sola imagen llena de detalles.",
    },
    {
      id: 6,
      titulo: "Microcosmos",
      año: 2022,
      descripcion:
        "Una mirada detallada a un mundo microscópico imaginario, lleno de vida y color.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Galería de Ilustración
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          El arte de la ilustración
        </h2>
        <p className="text-lg mb-4">
          Mis ilustraciones son ventanas a mundos imaginarios, donde la fantasía
          se encuentra con la realidad. A través de técnicas tanto tradicionales
          como digitales, creo imágenes que cuentan historias, evocan emociones
          y desafían la percepción del espectador.
        </p>
        <p className="text-lg mb-4">
          Cada ilustración es un viaje creativo, desde los bocetos iniciales
          hasta la obra final. Me inspiro en la literatura, la naturaleza, los
          sueños y la vida cotidiana, transformando estas influencias en
          composiciones únicas y evocadoras.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {obras.map((obra) => (
          <Card key={obra.id} className="bg-[#6F8090] text-[#f5e6d3]">
            <Image
              src={`https://placehold.co/600x400/9ea8ae/ffffff?text=Ilustración+${obra.id}`}
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
                Técnica mixta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{obra.descripcion}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Del papel a la pantalla</h2>
        <p className="text-lg mb-4">
          Mi proceso de ilustración a menudo comienza con bocetos a lápiz, que
          luego desarrollo utilizando una combinación de técnicas tradicionales
          y digitales. Esta fusión me permite mantener la calidez y la textura
          del dibujo a mano, mientras aprovecho la versatilidad y las
          posibilidades infinitas de las herramientas digitales.
        </p>
        <Button className="mt-4">Descubre mi proceso creativo</Button>
      </section>
    </div>
  );
}
