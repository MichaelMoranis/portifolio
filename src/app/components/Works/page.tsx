"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Description from "../Description/page";
import Cards from "../Cards/page";
import Outdoor from "../Outdoor";

 interface Repo {
  id: number;
  name: string;
  html_url: string;
  // Adicione outras propriedades conforme necessário
}

export default function Works() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function SearchRepo() {
      try {
        const response = await fetch(
          "https://api.github.com/users/michaelmoranis/repos"
        );
        if (!response.ok) {
          throw new Error("deu tudo errado na requisicao");
        }
        const data = await response.json();
        console.log(data)
        setRepos(data);
      } catch (error) {
        console.log(`deu tudo errado aqui tambem no catch ${error}`);
      }
    }
    SearchRepo();
  }, []);
  return (
    <div className="w-full">
      <Description />
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="bg-zinc-800 p-4  text-wrap flex-wrap"
      >
      <h3 className="bg-zinc-800">Projetos</h3>
        <div className=" bg-zinc-800 w-full  px-2  py-4 rounded-md">
          <ul className="flex flex-col gap-4">
            {repos.map((repo) => (
              <li key={repo.id} className="rounded-md">
                <Cards key={repo.id} link={repo.html_url}>
                 {repo.name}
                </Cards>
              </li>
            ))}
          </ul>
        </div>
        <Outdoor />
      </motion.div>
    </div>
  );
}
