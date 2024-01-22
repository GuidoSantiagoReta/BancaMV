import React from 'react'
import Link from 'next/link'
import { socialNetworks } from './Footer.data';


export function Footer() {
  return (

      <div className ="max-w-8xl p-6 mx-auto bg-gray h-30" id="contacto"> 
        <div className="flex gap-5 items-center justify-center sm:flex mb-4">
          <p>Seguinos en nuestras Redes:</p>
          {socialNetworks.map(({ id, icon, link }) => (
            <Link key={id} href={link} className="text-2xl">
              {icon}
            </Link>
          ))}
        </div>
   
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="my-3"> © 2024 BancaMV.</div> 
        </div>
      </div>


  )
};

