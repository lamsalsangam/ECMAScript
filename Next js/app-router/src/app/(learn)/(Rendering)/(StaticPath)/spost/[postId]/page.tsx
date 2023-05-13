export async function genetateStaticParams() {
  const posts = ["post-one", "post-two"];

  return posts.map((post) => {
    return {
      postId: post,
    };
  });
}
const page = async (props: any) => {
  return <div>Static Path</div>;
};

export default page;
