"use client"

import React, { useState, useEffect } from 'react';
import { FaChevronUp } from "react-icons/fa";
import './TopButton.css';

export function TopButton() {

    const [showButton, setShowButton] = useState(false);

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const handleScroll = () => {
        const scrollPosition:number = window.scrollY;
        const totalHeight:number = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percentageScrolled:number= (scrollPosition / totalHeight) * 100;

        if (percentageScrolled > 10) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        showButton && (
            <div className={`fixed bottom-4 right-4 w-50 h-50 z-[1] smallScreenButton`} onClick={scrollTop}>
                <div className='p-4 m-4 bg-customGradient rounded-full'>
                    <FaChevronUp className="cursor-pointer bg-transparent rounded-full " size={25}/>
                </div>
            </div>
        )
    );
}