// Ruta: app/(routes)/ilustracion/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería de Ilustración - Portfolio de Artista",
  description:
    "Explora las ilustraciones creativas y únicas del artista, desde dibujos a mano hasta arte digital.",
};

export default function IlustracionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-[#f5e6d3]">{children}</section>;
}
