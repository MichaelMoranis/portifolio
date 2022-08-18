import React from "react";

export default function About() {
 return (
   <section id="about">
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-white">
        Olá, sou o Michael, tenho 26 anos, e desde então
        <br className="hidden lg:inline-block" /> tenho estudado muito sobre o universo da programação,
        <br className="hidden lg:inline-block" /> sou um desenvolvedor de Software
      </h1>
      <p className="mb-8 font-medium sm:text-4xl text-3xl leading-relaxed">
       FrontEnd Fascinado por inovação e desafios!
      </p>
      <div className="flex justify-center">
        <a 
         href="#skills"
         className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-2xl">
          Skills 
         </a>
         <a 
         href="#projects"
         className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-bg-700 hover:text-white rounded text-2xl">
           Aplicações Desenvolvidas
         </a>
      </div>
    </div>  
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
     <img 
       className="object-cover object-center rounded"
       alt="perfil"
       src="./perfil1.jpg" 
     /> 
    </div> 
    </div>
   </section> 
 )
}