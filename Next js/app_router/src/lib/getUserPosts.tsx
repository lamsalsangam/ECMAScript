export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  // if (!res.ok) throw new Error("Failed to fetch user posts.");
  if (!res.ok) return undefined;
  return res.json();
}
