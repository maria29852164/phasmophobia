import Image from "next/image";
import { Inter } from "next/font/google";
import {CustomTitle} from "@/components/CustomTitle";
import Link from "next/link";
import Logo from '../../public/logo_main.jpg'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex justify-center bg-gray-900  ${inter.className}`}
    >


        <section className="h-screen px-4 md:px-8">
          <div className="container mx-auto max-w-3xl text-center">
            <div className={'flex justify-center py-2'}>
              <Image src={Logo} alt={''} width={200} height={350} />

            </div>

            <CustomTitle title={'Bienvenido a Phasmophobia'}/>

            <p className="text-gray-400 leading-relaxed mb-8 pt-3">
              Phasmophobia es un emocionante juego de terror cooperativo en el que un equipo de hasta 4 jugadores
              investiga ubicaciones embrujadas para identificar diferentes tipos de fantasmas.
            </p>
            <div className="space-x-4">
              <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
              >
                Jugar Ahora
              </Link>
              <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  prefetch={false}
              >
                Más Información
              </Link>
            </div>
          </div>
        </section>

    </main>
  );
}
