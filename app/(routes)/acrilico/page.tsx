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

export default function Acrilico() {
  const obras = [
    {
      id: 1,
      titulo: "Explosión de color",
      año: 2023,
      descripcion:
        "Una composición abstracta que celebra la vivacidad y versatilidad de los colores acrílicos.",
    },
    {
      id: 2,
      titulo: "Geometría urbana",
      año: 2022,
      descripcion:
        "Un estudio de formas geométricas inspirado en la arquitectura moderna de la ciudad.",
    },
    {
      id: 3,
      titulo: "Fluido abstracto",
      año: 2024,
      descripcion:
        "Una exploración de técnicas de vertido de acrílico, creando patrones orgánicos y fluidos.",
    },
    {
      id: 4,
      titulo: "Capas de emoción",
      año: 2021,
      descripcion:
        "Un retrato expresivo que utiliza capas de acrílico para transmitir profundidad emocional.",
    },
    {
      id: 5,
      titulo: "Naturaleza en movimiento",
      año: 2023,
      descripcion:
        "Una representación dinámica de un paisaje natural, capturando el movimiento del viento y el agua.",
    },
    {
      id: 6,
      titulo: "Texturas urbanas",
      año: 2022,
      descripcion:
        "Una pieza que explora las diversas texturas encontradas en el entorno urbano, recreadas con técnicas acrílicas.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Galería de Acrílico
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          El mundo vibrante del acrílico
        </h2>
        <p className="text-lg mb-4">
          El acrílico es mi medio para expresar energía y dinamismo. Su rápido
          secado y versatilidad me permiten crear obras que capturan la esencia
          del momento, con colores vibrantes y texturas audaces. A través de
          esta técnica, exploro temas contemporáneos y abstracciones que
          reflejan la velocidad y la intensidad de la vida moderna.
        </p>
        <p className="text-lg mb-4">
          Cada pieza en acrílico es una oportunidad para experimentar con nuevas
          técnicas, desde el vertido y las texturas gruesas hasta las veladuras
          delicadas. La adaptabilidad del acrílico me permite fusionar estilos y
          crear obras que desafían las expectativas.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {obras.map((obra) => (
          <Card key={obra.id} className="bg-[#6F8090] text-[#f5e6d3]">
            <Image
              src={`https://placehold.co/600x400/9ea8ae/ffffff?text=Acrílico+${obra.id}`}
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
                Acrílico sobre lienzo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{obra.descripcion}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Innovación en acrílico</h2>
        <p className="text-lg mb-4">
          Constantemente busco nuevas formas de trabajar con acrílicos,
          incorporando materiales mixtos y técnicas experimentales. Desde el uso
          de espátulas y rodillos hasta la incorporación de elementos collage,
          cada obra es un viaje de descubrimiento técnico y expresivo.
        </p>
        <Button className="mt-4">Explora mis técnicas acrílicas</Button>
      </section>
    </div>
  );
}
