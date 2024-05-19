"use client";

import Image from "next/image";
import { CgEditBlackPoint } from "react-icons/cg";

export default function Banner() {
  return (
    <div className="flex flex-col sm:flex-row  gap-24">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center m-2 gap-24">
        <div>
          <Image
            className="flex items-center md:w-18 md:h-18 justify-center border-cyan-700 bg-slate-400 border-solid rounded-full"
            src="/cara.png"
            width={100}
            height={100}
            alt="imagem perfil"
          />
        </div>
        <div className="flex flex-col items-center md:justify-around">
          <h2 className="text-2xl font-bold">I&apos;m Michael Moranis</h2>
          <p>
            Lorem ipsum dolor piditate rem animi atque aliquid
            recusandae temporibus!
          </p>
        </div>
      </div>
    </div>
  );
}
