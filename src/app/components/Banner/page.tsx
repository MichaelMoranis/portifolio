"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex flex-col justify-around items-center">
      <div className="flex flex-col items-center justify-around gap-6 w-full md:flex-row md:items-center  m-2 px-6">
        <div>
          <Image
            className="flex items-center md:w-18 md:h-18 justify-center border-cyan-700 bg-slate-400 border-solid rounded-full"
            src="/cara.png"
            width={150}
            height={150} 
            alt="imagem perfil"
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold items-center">Eu sou Michael Moranis</h2>
          </div>
          <div>
            <h3 className="w-80">
              Desenvolvedor web, atualmente morando em Cascavel PR. !!
            </h3>
          </div>
          <button className="flex items-center justify-center gap-2 bg-zinc-800 rounded-md px-4 py2 py-1 w-32">
            e-mail
          </button>
        </div>
      </div>
    </div>
  );
}
