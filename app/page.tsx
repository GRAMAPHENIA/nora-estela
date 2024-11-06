// import { Footer } from "@/components/custom/Footer";
// import { Header } from "@/components/custom/Header";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <>
//       <Header />
//       <main className="relative flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
//         <div className="bg-black bg-opacity-50 p-8 sm:p-12 rounded-lg max-w-3xl text-center text-white my-32">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
//             Bienvenido al Portafolio del Artista
//           </h1>
//           <p className="text-lg sm:text-xl lg:text-2xl mb-8">
//             Explora obras de óleo, acrílico y acuarela, y descubre el curso de iconografía.
//           </p>
//           <Link href="/galeria" passHref>
//             <Button className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-lg text-lg sm:text-xl">
//               Explorar la Galería
//             </Button>
//           </Link>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="min-h-screen bg-[#f5e6d3] px-8 border-2 container pb-10">
      <div className="relative">
        <div className="p-4 "></div>
        <Image
          width={876.78}
          height={329.78}
          src="/header.svg"
          alt="Slider image"
          className="px-8 object-cover w-full "
        />
        <div className="absolute bottom-0 left-1/2 h-[30vh] w-[15%] -translate-x-1/2 translate-y-1/3 transform rounded-full bg-[#9ea8ae] "></div>
        {/* <div className="absolute bottom-0 left-1/2 h-[30vh] w-[15%] -translate-x-1/2 translate-y-[56%] transform rounded-full bg-[#242322]"></div> */}
      </div>

      <div className="container mx-auto mt-24 px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:text-6xl">
              Arte en lo cotidiano.
            </h1>
            <p className="text-lg md:text-xl">
              Explora mis obras y contáctame para más detalles.
            </p>
            <Button className="rounded-full px-6 py-4 text-lg">
              Descubrí más
            </Button>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold">Obras hechas</h2>
            </div>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <Avatar key={i}>
                  <AvatarImage
                    src={`https://placehold.co/40x40?text=User${i}`}
                    alt={`User ${i}`}
                  />
                  <AvatarFallback>U{i}</AvatarFallback>
                </Avatar>
              ))}
              <Avatar>
                <AvatarFallback>+5</AvatarFallback>
              </Avatar>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {["Ol", "Ac", "Ic"].map((planet) => (
                <div key={planet} className="text-center">
                  <Image
                    src={`https://placehold.co/120x120/9ea8ae/ffffff?text=${planet}`}
                    height={120}
                    width={120}
                    className="mx-auto mb-2 rounded-full"
                    alt={planet}
                  />
                  <p className="mb-2 text-sm">Explore {planet}</p>
                  <Button size="icon" className="rounded-full">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
