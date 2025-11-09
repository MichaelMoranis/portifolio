interface AboutProps {
  text: string;
}

function About({ text }: AboutProps) {
  return (
    <div className="mt-4 text-zinc-400 dark:text-zinc-600 leading-relaxed text-base md:text-lg">
      {text}
    </div>
  );
}

export default About;
