interface TextProps {
  text: string;
}

function Bar({ text }: TextProps) {
  return (
    <div className="flex items-center justify-center bg-zinc-700 rounded-md p-2 text-zinc-300 text-center w-80 sm:w-2/3 md:w-4/3">
      {text}
    </div>
  );
}

export default Bar;
