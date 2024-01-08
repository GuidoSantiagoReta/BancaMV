"use client"

import Link from "next/link";
import { dataServices } from './Services.data';
import Image from "next/image";


export function Services() {
    return (


    <div className="relative px-6 py-20 md:py-24 h-600 bg-gray" id="servicios">
            
            <div className="grid max-w-7xl mx-auto md:grid-cols-2">
                <div>
                    
                        <h2 className="text-5xl font-semibold ">
                            <span className="block degradedBlue text-secondary ">lleve la dirección del negocio</span>
                            nosotros administramos el capital<br/>
                            
                        </h2>
                  
                   
                        <p className="max-w-md mt-10 text-justify">Al seleccionar la tarjeta de crédito correcta, puedes optimizar tu situación financiera generando crédito, 
                        recibiendo premios y economizando dinero. Elegí la que más se adapte a tus necesidades</p>
                    
                   
                        <div className="my-8">
                            <Link href="#servicios" className="px-4 py-3 rounded-md bg-customGradient text-white">Eligir Plan</Link>
                        </div>
                    
                </div>

                
                <div className="grid items-center pl-5 md:p-12 w-72 md:w-full scale">
                    {dataServices.map(({ id, icon, title, description }) => (
                        <div key={id}>
                            <div className="grid grid-flow-col gap-6 px-4 py-2 group">
                                <Image src={`/assets/${icon}.png`} alt={title} width={40} height={40} />
                                <div>
                                    <h4 className="text-third">{title}</h4>
                                    <p className="">{description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    
       
    )


}