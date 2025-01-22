import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(5),
  content: z.string().optional(),
  image: z.string().optional(),
});

export type postType = z.infer<typeof postSchema>;
