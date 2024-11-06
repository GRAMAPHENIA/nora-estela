import { GaleriaCard } from "@/components/custom/GaleriaCard";
import { obras } from "@/data/obras";

export default function GaleriaPage() {
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Galería de Obras</h1>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
        Explora una selección de obras destacadas en técnicas de óleo, acrílico y acuarela.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {obras.map((obra) => (
          <GaleriaCard key={obra.id} obra={obra} />
        ))}
      </div>
    </div>
  );
}
