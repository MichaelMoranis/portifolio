interface WorkProps {
    text: string
}


function Work(text: WorkProps) {
  return (
    <div className="flex justify-between w-4/5 sm:w-2/3 md:w-4/3 border-b-zinc-600 border-b-4 text-zinc-300">
      <h4 className="text-2xl">
        {text.text}
      </h4>
    </div>
  );
}

export default Work;
