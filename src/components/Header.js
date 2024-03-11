import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){

    const [toggleMenu,setToggleMenu] =useState(false);
    return <header className="px-10 flex justify-between py-2 pg-primary">
        <a className="font-bold text-black font-sri-font" href="/" alt="logo">GGG</a>
        <nav className="hidden md:block">
            <ul className="flex gap-x-4 items-center text-white">
                <li><a className='hover:text-green-300' href="/">Home</a></li>
                <li><a className='hover:text-green-300' href="#about">About</a></li>
                <li><a className='hover:text-green-300' href="#project">Projects</a></li>
                <li><a className='hover:text-green-300' href="#contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden">
            <ul onClick={() =>setToggleMenu (!toggleMenu)} className="items-center nav-list text-red-500">
                <li><a className='hover:text-blue-300' href="/">Home</a></li>
                <li><a className='hover:text-blue-300' href="#about">About</a></li>
                <li><a className='hover:text-blue-300' href="#project">Projects</a></li>
                <li><a className='hover:text-blue-300' href="#contact">Contact</a></li>
            </ul>
        </nav>}

        <button onClick={() =>setToggleMenu (!toggleMenu)} className="block md:hidden"><Bars3Icon className="text-white h-5"/></button>
        
    </header>
}