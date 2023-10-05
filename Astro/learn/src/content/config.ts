import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      categories: z.array(z.string()),
      date: z.string(),
      featured: z.boolean().default(false),
      image: image(),
      title: z.string(),
    }),
});

export const collection = {
  // It is very important that the "posts" naming match up with the directory name that the file is in.
  posts: postsCollection,
};
