"use client";

import Image from "next/image";
interface ParentsProps {
  children: string;
  link: string
}

export default function Cards({ children, link }: ParentsProps) {
  return (
    <section className="flex justify-center border-2 border-current border-zinc-700 bg-zinc-800 gap rounded-md">
      <div className="flex flex-col justify-around p-2 w-full gap-2">
        <div className="flex flex-col h-32 gap-2 p-2 w-full rounded-md">
          <Image width={30} height={30} src="/icon.png" alt="icon for works" />
          <h3 className="text-xl">
            {children}
          </h3>
          <a className="text-start w-20" href={link}>ver mais</a>
        </div>
      </div>
    </section>
  );
}
