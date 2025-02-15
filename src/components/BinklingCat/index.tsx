import { motion } from "framer-motion";

const WalkingCat = () => {
  return (
    <div className="flex items-center justify-center w-full  overflow-hidden">
      <motion.div
        initial={{ x: -9 }}
        animate={{ x: 300 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="relative w-20 h-20"
      >
        {/* Corpo */}
        <div className="absolute w-14 h-10 bg-gray-700 rounded-lg top-4 left-3">
            ---- -- -- -
        </div>
        {/* Cabeça */}
        <div className="absolute w-10 h-10 bg-gray-400 rounded-full top-0 left-5"></div>
        {/* Orelhas */}
        <div className="absolute w-4 h-4 bg-gray-600 rotate-45 top-0 left-4"></div>
        <div className="absolute w-4 h-4 bg-gray-600 -rotate-45 top-0 left-10"></div>
        {/* Olhos */}
        <div className="absolute w-2 h-2 bg-black rounded-full top-3 left-7"></div>
        <div className="absolute w-2 h-2 bg-black rounded-full top-3 left-11"></div>
        {/* Cauda */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-12 h-2 bg-zinc-500 rounded-full top-4 left-14"
        ></motion.div>
        {/* Pernas */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-2 h-6 bg-zinc-600 top-10 left-5"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 3, 0] }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.15,
          }}
          className="absolute w-2 h-6 bg-zinc-600 top-10 left-10"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default WalkingCat;
