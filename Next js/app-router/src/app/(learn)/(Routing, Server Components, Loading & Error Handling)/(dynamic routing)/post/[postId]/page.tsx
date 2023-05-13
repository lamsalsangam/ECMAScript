import { FC } from "react";

interface PageProps {
  params: {
    postId: string;
  };
}

// const page: FC<PageProps> = ({ params }) => {
const page = async ({ params }: PageProps) => {
  // searchParams: /post/123/?searchQuery=hello
  return <div>Dynamic Page {params.postId}</div>;
};

export default page;
