// Ruta: app/(routes)/oleo/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería de Óleo - Portfolio de Artista",
  description:
    "Explora las obras en óleo del artista, mostrando técnicas y estilos únicos en pintura al óleo.",
};

export default function OleoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-[#f5e6d3]">{children}</section>;
}
