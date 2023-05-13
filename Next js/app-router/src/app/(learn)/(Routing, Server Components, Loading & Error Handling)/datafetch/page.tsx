const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const DataFetch = async () => {
  await wait(5000);

  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();

  throw new Error("not authenticated");

  return <div>{JSON.stringify(data)}</div>;
};

export default DataFetch;
