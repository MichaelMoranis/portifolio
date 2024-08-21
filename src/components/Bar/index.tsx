interface TextProps {
  text: string;
}

function Bar({ text }: TextProps) {
  return (
    <div className="flex items-center justify-center bg-zinc-700 rounded-md p-2 text-center w-80 md:w-96 text-white lg:w-96">
      {text}
    </div>
  );
}

export default Bar;
