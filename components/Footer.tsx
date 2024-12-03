// Ruta: components/Footer.tsx
// Este componente representa el pie de página

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#6F8090] text-[#f5e6d3] py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Button variant="ghost" size="icon" className="rounded-full bg-[#5A6B7C] hover:bg-[#475768]">
            <FaFacebookF className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-[#5A6B7C] hover:bg-[#475768]">
            <FaTwitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-[#5A6B7C] hover:bg-[#475768]">
            <FaInstagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Button>
        </div>
        <p>&copy; 2024 Portfolio de Artista. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}