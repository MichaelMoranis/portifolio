"use client"

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Cards from "../Cards/page";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="px-4 bg-zinc-800 w-96 justify-center rounded-md p-2">
        <div className="flex items-center justify-between p-2 rounded-md">
          <div>Projetos</div>
          <div>
            <button className="flex gap-2 bg-zinc-700 p-2 rounded-md">
              <Link href={"components/Works"}>ver todos</Link>
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
        <div className="m-1">
          <Cards />
        </div>
      </div>
    </motion.div>
  );
}
