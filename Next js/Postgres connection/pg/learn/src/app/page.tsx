import type { Users } from "@/lib/defination";
import { UserIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

async function getData(): Promise<Users[]> {
  const res = await fetch("http://localhost:3000/api/users");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const { message } = await res.json();
  return message;
}

export default async function Page() {
  const datas = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {datas.map((data: Users) => (
          <Link
            href={`/user/${data.id}`}
            key={data.id}
            className="flex gap-5 items-center justify-center bg-slate-400 p-5 rounded-lg hover:bg-slate-300 hover:text-black hover:scale-105 duration-300"
          >
            <UserIcon className="h-8 w-8" />
            <div className="flex flex-col ml-5">
              <p className="text-lg font-bold">{data.name}</p>
              <p className="text-sm">{data.email}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
