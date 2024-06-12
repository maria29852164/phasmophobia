import Link from "next/link";
import Image from "next/image";
import GhostIcon from '../../public/ghost.png'
export const Layout= ()=>{
    return (
        <header className="bg-gray-800 py-4 px-6 flex items-center flex-wrap justify-between text-white">
            <div className={'flex items-center'}>
                <div className={'pr-2'}>
                    <Image alt='./ghost.png' src={GhostIcon} height={40} width={20}/>

                </div>
                <h1 className="text-2xl font-bold">Phasmophobia
                </h1>
            </div>

            <nav className="flex flex-wrap gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
                Inicio
                </Link>
                <Link href="/phantoms" className="hover:underline" prefetch={false}>
                    Tipos de Fantasmas
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                    Objetos Malditos
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                    Contacto
                </Link>
            </nav>
        </header>
    )
}