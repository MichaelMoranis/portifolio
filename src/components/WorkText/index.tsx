interface WorkTextProps {
    textWork: string
    yearStudent?: string
    yearDescription?: string
    age?: string
}


function WorkText(text: WorkTextProps) {
  return (
    <p className="my-2 flex justify-between w-4/5 sm:w-2/3 md:w-4/3 text-zinc-300">
      <div className="w-full">
        <p className="border-b-zinc-600 w-10 border-b-4 text-zinc-300">{text.yearStudent}</p>
        {text.textWork}
      </div>
    </p>
  );
}

export default WorkText;
