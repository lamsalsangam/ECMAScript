import Image from "next/image";

export default function HomeBanner() {
  return (
    <div className="realtive mb-8 bg-gradient-to-r from-purple-400 to-purple-700">
      <div className="mx-auto flex flex-col items-center justify-evenly gap-2 px-8 py-12 md:flex-row">
        <div className="mb-8 text-center md:mb-0">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            Summer Sale
          </h1>
          <p className="mb-2 text-lg text-white md:text-xl">
            Price down for the selected items
          </p>
          <p className="text-2xl font-bold text-amber-950 md:text-5xl">
            GET 50% OFF
          </p>
        </div>
        <div className="relative aspect-video w-1/3">
          <Image
            src={"/banner.png"}
            fill
            alt="Banner image"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
