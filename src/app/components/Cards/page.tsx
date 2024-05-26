"use client"

import Image from "next/image";

export default function Cards() {
  return (
    <section className="flex justify-start p-4 bg-zinc-600 rounded-md mb-4">
      <div className="flex flex-col justify-center p-2 w-full gap-4">
        <div className="flex flex-row gap-4 h-12 bg-zinc-500 p-2 w-full rounded-md"><Image width={30} height={30} src="/icon.png" alt="" /><a href="https://github.com/MichaelMoranis/adivinhe-o-numero">jogo adivinhe o numero</a></div>
        <div className="h-12 bg-zinc-500 p-2 w-full rounded-md">works 02</div>
        <div className="h-12 bg-zinc-500 p-2 w-full rounded-md">works 03</div>
      </div>
    </section>
  );
}
