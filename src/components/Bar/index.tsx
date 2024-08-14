interface TextProps {
  text: string;
}

function Bar({ text }: TextProps) {
  return (
    <div className="flex items-center justify-center bg-zinc-700 rounded-md p-2 text-center w-80 sm:w-2/3 md:w-4/3 text-white">
      {text}
    </div>
  );
}

export default Bar;
