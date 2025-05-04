interface AboutProps {
  text: string;
}

function About({ text }: AboutProps) {
  return (
    <div className="font-regular flex items-center justify-center font-bold text-xl w-full p-2">
      {text}
    </div>
  );
}

export default About;
