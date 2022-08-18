import React from "react";


export default function Navbar() {
 return (
  <header className="bg-gray-700 md:sticky top-0 z-10">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0">
      <a href="#about" className="ml-3 text-3xl">
        Michael Moranis
      </a>
    </a>   
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
     <a href="#projects" className="mr-5 text-2xl hover:text-white">
      Projetos
    </a> 
    <a href="#skills" className="mr-5 text-2xl hover:text-white">
     Habilidades e  Tecnologias
    </a> 
    <a href="https://github.com/MichaelMoranis" className="mr-5 text-2xl hover:text-white">
     github/michaelmoranis
    </a> 
    </nav>
    </div>
  </header> 
 )    
}