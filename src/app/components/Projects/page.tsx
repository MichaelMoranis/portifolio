"use client";

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Cards from "../Cards/page";

interface Props {
  html_url: string;
}

export default function Projects({ html_url }: Props) {
  return (
    <motion.div
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
      }}
      className="w-full"
    >
      <div className="w-full">
        <div className="flex w-full items-center justify-between p-2 rounded-md">
          <div>Projetos</div>
          <div>
            <button className="flex gap-2 items-center bg-zinc-700 p-2 rounded-md hover:bg-indigo-700">
              <Link href={"components/Works"}>ver todos</Link>
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
        <div className="flex  flex-col w-full gap-4">
          <Cards link={html_url}>Jogo adivinhe o numero</Cards>
          <Cards link={html_url}>Projeto pro orcamentos</Cards>
          <Cards link={html_url}>Construcao do tema NeoOsaka theme</Cards>
          <Cards link={html_url}>Projeto LinkTree Copia</Cards>
        </div>
      </div>
    </motion.div>
  );
}
