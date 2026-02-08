interface TextProps {
  text: string;
}

function Bar({ text }: TextProps) {
  return (
    <div className="relative w-80 md:w-96 lg:w-96">
      <div className="flex items-center justify-center rounded-xl p-3 text-center
        bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white
        ring-1 ring-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
        <span className="font-medium tracking-wide">
          {text}
        </span>
      </div>
      <span className="pointer-events-none absolute -bottom-2 left-6 right-6 h-0.5
        bg-gradient-to-r from-transparent via-blue-400/80 to-transparent" />
    </div>
  );
}

export default Bar;
