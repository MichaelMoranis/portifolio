"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Description from "../Description/page";

export default function Works() {
  const [repos, setRepos] = useState([]);

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
        setRepos(data);
      } catch (error) {
        console.log(`deu tudo errado aqui tambem no catch ${error}`);
      }
    }
    SearchRepo();
  }, []);
  return (
    <div>
      <Description />
      <h3>Projetos</h3>
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
        <div className=" bg-zinc-600 px-2 m-4 rounded-md">
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <li>{repo.name}</li>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
