interface AboutProps {
  text: string;
}

function About({ text }: AboutProps) {
  return (
    <div className="font-regular flex items-center justify-center text-zinc-300 text-center font-bold text-xl w-full md:w-full p-4">
      {text}
    </div>
  );
}

export default About;
