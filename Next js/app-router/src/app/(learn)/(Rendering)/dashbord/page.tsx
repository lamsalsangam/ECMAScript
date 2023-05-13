import axios from "axios";

// export const dynamic = "force-dynamic";
// export const revalidate = 10;

const page = async ({}) => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
  //     next: { revalidate: 10 },
  //   });
  //   const data = await res.json();
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return <div>Dashbord</div>;
};

export default page;
