interface WorkTextProps {
  textWork: string;
  yearStudent?: string;
  yearDescription?: string;
  age?: string;
}

function WorkText(text: WorkTextProps) {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-between w-full  sm:w-2/3 md:w-96 md:justify-center font-regular">
      <div className="w-80 md:w-full text-left">
        <p className=" w-10 border-b-4 border-b-zinc-500">
          {text.yearStudent}
        </p>
        {text.textWork}
      </div>
    </div>
  );
}

export default WorkText