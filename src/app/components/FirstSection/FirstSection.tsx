"use client"
import Image from "next/image";

export function FirstSection() {
  return (
    <div className="relative p-4 md:py-20" id="nosotros">
     <div className="grid max-w-7xl mx-auto md:grid-cols-2 md:items-center">
        <div>
            
                <h1 className="text-5xl font-semibold">
                Una innovadora  
                    <span className="block  bg-customGradient rounded text-white">
                    plataforma bancaria digital
                    </span>
                    accesible para todos
                </h1>
        
                <p className="max-w-md mt-10 text-justify">Nuestro grupo de especialistas aplica un procedimiento específico
                para determinar las tarjetas de crédito que podrían ser adecuadas para usted. 
                Analizamos las tasas de interés anual y las tarifas anuales.</p>
        </div>
        <div className="md:self-start">
        <Image 
          src="/assets/svgbank.jpg"
          alt="Card" 
          width={350} 
          height={350} 
          className="h-auto w-72 md:w-full scale-85" 
        />
        </div>
    </div>
</div>
  )
}