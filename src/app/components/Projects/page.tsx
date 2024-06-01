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
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
      }}
    >
      <div className="bg-zinc-800 w-96  justify-between rounded-md p-1">
        <div className="flex items-center justify-between p-2 rounded-md">
          <div>Projetos</div>
          <div>
            <button className="flex gap-2 bg-zinc-700 p-2 rounded-md">
              <Link href={"components/Works"}>ver todos</Link>
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Cards link={html_url}>sou o projeto cards</Cards>
          <Cards link={html_url}>sou o projeto cards</Cards>
          <Cards link={html_url}>sou o projeto cards</Cards>
        </div>
      </div>
    </motion.div>
  );
}
