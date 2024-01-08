
import React from 'react'
import Image from "next/image";
import { productCard } from './Products.data';




export function Products()  {
  return (
   <>

<div className="relative px-6 py-20 md:py-14 h-600 bg-third" id="productos">
           
            <div className="block max-w-7xl mx-auto md:grid md:grid-cols-2 md:flex items-center">
             
                    <h2 className="text-5xl font-semibold">Seleccione la tarjeta
                        <span className="block rounded bg-customGradient px-5 text-white"> que mejor se adapte a sus necesidades</span>
                    </h2>
                <div className="px-5">
            
                            {productCard.map(({ image, id }) => (
                                <div key={id}>
                                    <Image src={image} alt="Credit Card" width="500" height="500" />
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        
   </>
  )
}

