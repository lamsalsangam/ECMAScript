import { Users } from "@/lib/defination";
import { UserIcon } from "@heroicons/react/20/solid";

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const { message } = await res.json();
  return message;
}

const renderUserCard = (user: Users) => (
  <div
    key={user.id}
    className="flex gap-5 items-center justify-center bg-slate-400 p-5 rounded-lg hover:bg-slate-300 hover:text-black hover:scale-105 duration-300"
  >
    <div className="flex flex-col ml-5">
      <p className="text-lg font-bold">{user.name}</p>
      <p className="text-sm">{user.email}</p>
    </div>
  </div>
);

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = await getData(id);

  if (data) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center gap-10">
          <UserIcon className="h-20 w-20" />
          {data.map(renderUserCard)}
        </div>
      </main>
    );
  } else {
    return <div>Failed to fetch data.</div>;
  }
}
