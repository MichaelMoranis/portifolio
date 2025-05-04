import imageOne from "../pages/images/articles-one.png";
import imageTwo from "../pages/images/articles-two.png";
import imageTree from "../pages/images/articles-tree.png";
import { motion } from "framer-motion";

function Articles() {
  const navArticles = [
    {
      src: imageOne,
      alt: "How I Managed a Delay in a Freelance Project and Kept My Client Happy",
      href: "https://dev.to/michaelmoranis/how-i-managed-a-delay-in-a-freelance-project-and-kept-my-client-happy-2ao3",
    },
    {
      src: imageTwo,
      alt: "Beginning of my career as a freelancer",
      href: "https://dev.to/michaelmoranis/-storing-data-in-the-database-with-javascript-2bkf",
    },
    {
      src: imageTree,
      alt: "Fatigue and Focus as a Freelance Dev",
      href: "https://dev.to/michaelmoranis/apredendo-construcao-de-apis-com-node-e-typescript-o11",
    },
  ];
  return (
    <motion.div
      className="box p-0"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <section className="flex flex-col items-center gap-8 justify-evenly mt-5  md:flex-wrap lg:flex-wrap p-2 w-full md:flex-row max-w-[850px]">
        <div className="flex flex-col items-center w-full gap-4">
          <h1 className="font-regular font-bold text-2xl w-full text-center ">
            Artigos publicados durante toda minha trajetória como desenvolvedor
            web solo!
          </h1>
          <h3 className="font-regular font-bold text-xl">
            Artigos publicados!
          </h3>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center w-full">
          {navArticles.map((article, index) => (
            <div className="h-52 w-full md:w-80 rounded-lg">
              <a href={article.href}>
                <img
                  key={index}
                  className="rounded-xl h-52 w-full"
                  src={article.src}
                  loading="lazy"
                  height="300px"
                  width="300px"
                  alt={article.alt}
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default Articles;
