type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function sitemap() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allPost = (await res.json()) as Post[];

  const posts = allPost.map((post) => ({
    url: `http://loaclhost:3000/spost/${post.id}`,
    lastModified: new Date().toISOString,
  }));

  const routes = ["", "/about", "/post"].map((route) => ({
    url: `http://localhost:3000/${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
