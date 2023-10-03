import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    date: z.string(),
    image: z.string(),
    title: z.string(),
  }),
});

export const collection = {
  // It is very important that the "posts" naming match up with the directory name that the file is in.
  posts: postsCollection,
};
