import { motion, useReducedMotion } from "framer-motion";
import imgBanner from "../../assets/developer.png";
import Bar from "../Bar";

function Banner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.figure
      className="flex flex-col items-center w-full gap-8"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="group relative flex flex-col items-center pb-4 w-full">
        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-500/15 via-transparent to-purple-500/15 blur-2xl opacity-70
          motion-safe:group-hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-500 motion-reduce:transition-none"
        />
        <img
          className="relative rounded-2xl w-full max-w-md md:max-w-none md:w-full md:h-96 h-auto
            ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out
            motion-safe:group-hover:scale-[1.02] motion-reduce:transition-none"
          src={imgBanner}
          loading="lazy"
          height={300}
          width={300}
          alt="Ilustracao de home office"
        />
      </div>
      <figcaption className="w-full flex justify-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <Bar text="Sou dev frontend em Cascavel PR" />
        </motion.div>
      </figcaption>
    </motion.figure>
  );
}

export default Banner;
