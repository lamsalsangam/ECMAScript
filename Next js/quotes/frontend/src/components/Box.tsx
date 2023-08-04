type BoxProps = {
  quote: string;
  // Add other props and their types here
};

export default function Box({ quote }: BoxProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-3 md:px-14 md:py-10 flex-wrap break- text-center bg-[#A0E5FA] w-full md:w-7/12 h-96 md:h-80 rounded-2xl shadow-2xl text-[#ffffff] text-xl md:text-3xl font-bold antialiased">
      {quote}
    </div>
  );
}
