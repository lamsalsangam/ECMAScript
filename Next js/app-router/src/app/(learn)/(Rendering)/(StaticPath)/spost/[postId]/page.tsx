import { Metadata } from "next";

export async function genetateStaticParams() {
  const posts = ["post-one", "post-two"];

  return posts.map((post) => {
    return {
      postId: post,
    };
  });
}

interface PageProps {
  params: {
    postId: string;
  };
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = (await res.json()) as Post;
  return {
    title: data.title,
  };
}

const page = async (props: PageProps) => {
  return <div>Static Path</div>;
};

export default page;
