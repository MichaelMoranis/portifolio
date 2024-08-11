interface WorkTextProps {
  textWork: string;
  yearStudent?: string;
  yearDescription?: string;
  age?: string;
}

function WorkText(text: WorkTextProps) {
  return (
    <div className="text-zinc-400 mx-12 px-12">
      <div className="w-80 text-left">
        <p className=" w-10 border-b-4 border-b-zinc-500 text-zinc-300">
          {text.yearStudent}
        </p>
        {text.textWork}
      </div>
    </div>
  );
}

export default WorkText