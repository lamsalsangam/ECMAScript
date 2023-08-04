export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center px-10 flex-wrap break- text-center bg-[#ffffff] w-7/12 h-72 rounded-2xl shadow-2xl text-[#A0E5FA] text-2xl font-bold antialiased">
      <div className="animate-bounce w-5/6 h-2 bg-[#A0E5FA] rounded-2xl"></div>
      <br />
      <div className="animate-bounce w-5/6 h-2 bg-[#A0E5FA] rounded-2xl"></div>
      <br />
      <div className="animate-bounce w-3/6 h-2 bg-[#A0E5FA] rounded-2xl"></div>
    </div>
  );
}
