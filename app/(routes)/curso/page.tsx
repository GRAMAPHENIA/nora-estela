import { LeccionCard } from "@/components/custom/LeccionCard";
import { VideoEmbed } from "@/components/custom/VideoEmbed";
import { lecciones } from "@/data/lecciones";


export default function CursoPage() {
  return (
    <div>
      <h1>Curso de Iconografía</h1>
      {lecciones.map((leccion) => (
        <div key={leccion.id}>
          <LeccionCard leccion={leccion} />
          <VideoEmbed url={leccion.videoUrl} />
          <p>{leccion.contenido}</p>
        </div>
      ))}
    </div>
  );
}
