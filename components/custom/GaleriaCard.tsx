import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Obra } from "@/types/Obra";

type GaleriaCardProps = {
  obra: Obra;
};

export function GaleriaCard({ obra }: GaleriaCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          width={500}
          height={500}
          src={obra.imagenUrl}
          alt={obra.titulo}
          className="rounded-t-md object-cover "
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{obra.titulo}</CardTitle>
        <CardDescription className="text-gray-600 capitalize">
          {obra.tecnica}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{obra.descripcion}</p>
      </CardContent>
    </Card>
  );
}
