"use client"  

import Link from "next/link";
import Image  from 'next/image';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { dataHeader } from "./Header.data";
import { useState } from "react";

import { RiMenu2Line } from "react-icons/ri";


export function Header(){
  const [openMenu, setOpenMenu] = useState(false)

    return(
   
         <nav className="flex flex-wrap items-center justify-between mx-auto max-w-8xl  p-4 mx-auto md:py-6 bg-gray">
          <Link href="/" className="flex items-center">
            <Image src="/assets/bancamv.png" alt="logobanco" width={200} height={40} priority/>
          </Link>
        {openMenu 
        ? <RiMenu2Line className="block text-3xl md:hidden cursor-pointer" onClick={() => setOpenMenu(!openMenu)} /> 
        : <HiOutlineMenuAlt2 className="block text-3xl md:hidden cursor-pointer" onClick={() => setOpenMenu(!openMenu)} />
        }
          <div className={`flex flex-col items-center  ${openMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {dataHeader.map(({id, name, idLink}) =>(
              <div key={id} className="px-3 transition-all duration-400 ease-in-out mb-4 py-4 md:mb-0">
                 <Link href={idLink} className="text-lg hover:text-secondary">{name}</Link>
              </div>
            ))}
          </div> 
          </div>
         </nav>
       
    )
}