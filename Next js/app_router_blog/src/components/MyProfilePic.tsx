import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto mt-3">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto"
        src={"/images/Profilepic.jpg"}
        width={200}
        height={200}
        alt="Sangam"
        priority={true}
      />
    </section>
  );
}
