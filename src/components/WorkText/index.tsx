import { motion } from "framer-motion";

function WorkText() {
  const timelineEvents = [
    {
      year: "1996",
      title: "Nascimento",
      description: "Barreiras, BA",
    },
    {
      year: "2019",
      title: "Mudança",
      description: "Cascavel, PR",
    },
    {
      year: "2021",
      title: "Início da Faculdade",
      description: "Análise e Desenvolvimento de Sistemas",
    },
    {
      year: "2024",
      title: "Hoje",
      description: "Desenvolvedor Web em evolução",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="w-full md:w-2/3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-6 md:space-y-8">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex gap-4 md:gap-6"
          >
            {/* Ano - Coluna esquerda */}
            <div className="flex-shrink-0 w-16 md:w-20">
              <div className="text-sm md:text-base font-light text-zinc-200 dark:text-zinc-900">
                {event.year}
              </div>
            </div>

            {/* Divisor vertical minimalista */}
            <div className="flex flex-col items-center">
              <div className="w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full" />
              {index !== timelineEvents.length - 1 && (
                <div className="w-0.5 h-16 md:h-20 bg-gradient-to-b from-blue-300/70 to-transparent dark:from-blue-400/50 dark:to-transparent" />
              )}
            </div>

            {/* Conteúdo - Coluna direita */}
            <div className="pb-4 md:pb-6">
              <h3 className="text-base md:text-lg font-semibold dark:text-zinc-900  mb-1">
                {event.title}
              </h3>
              <p className="text-sm md:text-base text-zinc-200 dark:text-zinc-900">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default WorkText;
