import {CustomPhantom} from "@/components/CustomPhantom";
import Phamthom from '../../../public/phasmophobia.webp'
  const  Phantoms = ()=>{
      return (
          <div className="bg-gray-900 text-gray-200 min-h-screen">

              <main>
                  <section id="about" className="py-12 px-4 md:px-8">
                      <div className="container mx-auto max-w-3xl">
                          <h2 className="text-3xl font-bold mb-4">Sobre Phasmophobia</h2>
                          <p className="text-gray-400 leading-relaxed">
                              Phasmophobia es un emocionante juego de terror cooperativo en el que un equipo de hasta 4 jugadores
                              investiga ubicaciones embrujadas para identificar diferentes tipos de fantasmas. Cada fantasma tiene sus
                              propias características y comportamientos únicos, lo que hace que cada partida sea una experiencia
                              diferente y llena de suspenso.
                          </p>
                      </div>
                  </section>
                  <section id="gallery" className="py-12 px-4 md:px-8">
                      <div className="container mx-auto">
                          <h2 className="text-3xl font-bold mb-8">Tipos de Fantasmas</h2>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                              <CustomPhantom img={Phantoms} titlePhantom={'Poltergeist'} description={'Un fantasma que mueve y arroja objetos de forma violenta.'}/>
                              <CustomPhantom img={Phantoms} titlePhantom={'Poltergeist'} description={'Un fantasma que mueve y arroja objetos de forma violenta.'}/>

                              <CustomPhantom img={Phantoms} titlePhantom={'Poltergeist'} description={'Un fantasma que mueve y arroja objetos de forma violenta.'}/>

                          </div>
                      </div>
                  </section>
              </main>

          </div>
      )
}

export default Phantoms