import { Leccion } from "@/types/Leccion";

interface LeccionCardProps {
  leccion: Leccion;
}

export const LeccionCard: React.FC<LeccionCardProps> = ({ leccion }) => (
  <div className="leccion-card">
    <h3>{leccion.titulo}</h3>
    <p>{leccion.resumen}</p>
  </div>
);
