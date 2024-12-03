// Ruta: app/(routes)/acrilico/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galería de Acrílico - Portfolio de Artista',
  description: 'Descubre las vibrantes obras en acrílico del artista, explorando colores vivos y texturas únicas.',
}

export default function AcrilicoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-[#f5e6d3]">
      {children}
    </section>
  )
}